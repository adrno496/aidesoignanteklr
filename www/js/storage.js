// Couche de persistance : localStorage (réglages, profil, progression, SRS) + IndexedDB (journal de sessions).
// Fonctionne en navigateur ; repli mémoire pour les tests Node.

const IS_BROWSER = typeof window !== "undefined" && typeof localStorage !== "undefined";
const memStore = new Map();
const memDb = { sessions: new Map() };

const KEYS = {
  settings: "aideso_settings",
  profile: "aideso_profile",
  achievements: "aideso_achievements",
  favorites: "aideso_favorites",
  read: "aideso_read",            // fiches lues : { ueId: [ficheId,...] }
  srs: "aideso_srs",              // état SM-2 : { cardId: {ef,interval,reps,due,lapses,seen} }
  progress: "aideso_progress",    // par UE : { ueId: {qcmSeen,qcmCorrect,fichesRead} }
  quests: "aideso_quests",
  tfe: "aideso_tfe",              // données du mémoire de l'étudiant·e
  notes: "aideso_notes",          // notes personnelles : { refId: "texte" }
  planner: "aideso_planner",      // planning de révision
  device_id: "aideso_device_id",
};

function uuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function lsGet(key) {
  if (IS_BROWSER) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; }
    catch { return null; }
  }
  return memStore.has(key) ? JSON.parse(memStore.get(key)) : null;
}
function lsSet(key, value) {
  const s = JSON.stringify(value);
  if (IS_BROWSER) { try { localStorage.setItem(key, s); return true; } catch { return false; } }
  memStore.set(key, s); return true;
}

const DEFAULT_SETTINGS = {
  theme: "clair",            // clair | sombre | menthe | lavande | nuit
  contrast: "normal",        // normal | high
  font: "normal",            // normal | lisible | grand
  motion: "auto",            // auto | reduce
  ttsEnabled: false,
  ttsRate: 1.0,
  notifsEnabled: false,
  notifHour: 18,
  examTimerSec: 60,          // temps par question en mode examen
  aiEnabled: false,
  aiProvider: "mistral",        // mistral | anthropic
  aiModel: "mistral-small-latest",
  aiKey: "",
  onboarded: false,
  promo: "",                 // ex. "2023-2026"
  dailyGoal: 20,             // objectif de cartes/jour
};

const DEFAULT_PROFILE = {
  prenom: "",
  annee: 3,                  // année d'étude (1/2/3)
  totalXp: 0,
  streak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  qcmAnswered: 0,
  qcmCorrect: 0,
  cardsReviewed: 0,
  casCompleted: 0,
  calculsDone: 0,
  examsTaken: 0,
  fichesRead: 0,
  createdAt: null,
};

// ---------- IndexedDB : journal des sessions d'étude ----------
let _db = null;
function openDb() {
  return new Promise((resolve) => {
    if (!IS_BROWSER || typeof indexedDB === "undefined") { resolve(null); return; }
    const req = indexedDB.open("aideso_db", 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("sessions")) {
        const s = db.createObjectStore("sessions", { keyPath: "id" });
        s.createIndex("date", "date", { unique: false });
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = () => resolve(null);
  });
}
function idbPut(store, value) {
  return new Promise((resolve) => {
    if (!_db) { memDb[store].set(value.id, value); resolve(true); return; }
    const tx = _db.transaction(store, "readwrite");
    tx.objectStore(store).put(value);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
}
function idbAll(store) {
  return new Promise((resolve) => {
    if (!_db) { resolve(Array.from(memDb[store].values())); return; }
    const tx = _db.transaction(store, "readonly");
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}
function idbClear(store) {
  return new Promise((resolve) => {
    if (!_db) { memDb[store].clear(); resolve(true); return; }
    const tx = _db.transaction(store, "readwrite");
    tx.objectStore(store).clear();
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
}

// ---------- Niveaux (thématisés infirmier) ----------
const LEVELS = [
  { min: 0,     label: "Pré-rentrée",            icon: "🌱" },
  { min: 80,    label: "Élève AS",               icon: "📘" },
  { min: 300,   label: "AS en formation",        icon: "📗" },
  { min: 700,   label: "Bientôt diplômé·e",      icon: "📙" },
  { min: 1400,  label: "Aide-soignant·e DE",     icon: "💗" },
  { min: 2600,  label: "AS confirmé·e",          icon: "⚕️" },
  { min: 4500,  label: "AS expert·e",            icon: "🩺" },
  { min: 7000,  label: "AS référent·e",          icon: "👑" },
];
export function levelFromXp(xp) {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].min) idx = i;
  const lv = LEVELS[idx], next = LEVELS[idx + 1];
  return {
    index: idx, label: lv.label, icon: lv.icon,
    currentMin: lv.min,
    nextMin: next ? next.min : lv.min,
    isMax: !next,
  };
}

export function todayStr() {
  if (typeof Date === "undefined") return "1970-01-01";
  return new Date().toISOString().slice(0, 10);
}
export function computeStreak(lastDate, today, current) {
  if (!lastDate) return 1;
  if (lastDate === today) return current || 1;
  const [y1, m1, d1] = lastDate.split("-").map(Number);
  const [y2, m2, d2] = today.split("-").map(Number);
  const diff = Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
  return diff === 1 ? (current || 0) + 1 : 1;
}

export const Storage = {
  async init() {
    if (IS_BROWSER) { try { _db = await openDb(); } catch { _db = null; } }
  },

  // Settings
  getSettings() { return { ...DEFAULT_SETTINGS, ...(lsGet(KEYS.settings) || {}) }; },
  saveSettings(patch) { return lsSet(KEYS.settings, { ...this.getSettings(), ...patch }); },

  // Profile
  getProfile() {
    const p = lsGet(KEYS.profile);
    if (!p) { const fresh = { ...DEFAULT_PROFILE, createdAt: Date.now() }; lsSet(KEYS.profile, fresh); return fresh; }
    return { ...DEFAULT_PROFILE, ...p };
  },
  saveProfile(patch) { return lsSet(KEYS.profile, { ...this.getProfile(), ...patch }); },

  // Marque l'activité du jour et met à jour le streak. Retourne {streak, isNewDay}.
  touchActivity() {
    const p = this.getProfile();
    const today = todayStr();
    const isNewDay = p.lastActiveDate !== today;
    const streak = computeStreak(p.lastActiveDate, today, p.streak);
    this.saveProfile({
      lastActiveDate: today,
      streak,
      longestStreak: Math.max(p.longestStreak || 0, streak),
    });
    return { streak, isNewDay };
  },

  addXp(amount) {
    const p = this.getProfile();
    const before = levelFromXp(p.totalXp);
    const totalXp = (p.totalXp || 0) + amount;
    this.saveProfile({ totalXp });
    const after = levelFromXp(totalXp);
    return { totalXp, leveledUp: after.index > before.index, level: after };
  },

  bump(field, by = 1) {
    const p = this.getProfile();
    this.saveProfile({ [field]: (p[field] || 0) + by });
  },

  // Achievements
  getAchievements() { return lsGet(KEYS.achievements) || []; },
  hasAchievement(id) { return this.getAchievements().includes(id); },
  addAchievement(id) {
    const list = this.getAchievements();
    if (list.includes(id)) return false;
    list.push(id); lsSet(KEYS.achievements, list); return true;
  },

  // Favoris (fiches)
  getFavorites() { return lsGet(KEYS.favorites) || []; },
  isFavorite(id) { return this.getFavorites().includes(id); },
  toggleFavorite(id) {
    const list = this.getFavorites();
    const i = list.indexOf(id);
    if (i >= 0) list.splice(i, 1); else list.push(id);
    lsSet(KEYS.favorites, list);
    return i < 0; // true si ajouté
  },

  // Fiches lues
  getRead() { return lsGet(KEYS.read) || {}; },
  markRead(ueId, ficheId) {
    const r = this.getRead();
    r[ueId] = r[ueId] || [];
    if (!r[ueId].includes(ficheId)) { r[ueId].push(ficheId); lsSet(KEYS.read, r); this.bump("fichesRead"); return true; }
    return false;
  },
  isRead(ueId, ficheId) { return (this.getRead()[ueId] || []).includes(ficheId); },

  // Progression par UE
  getProgress() { return lsGet(KEYS.progress) || {}; },
  recordQcm(ueId, correct) {
    const pr = this.getProgress();
    pr[ueId] = pr[ueId] || { qcmSeen: 0, qcmCorrect: 0 };
    pr[ueId].qcmSeen += 1;
    if (correct) pr[ueId].qcmCorrect += 1;
    lsSet(KEYS.progress, pr);
    this.bump("qcmAnswered");
    if (correct) this.bump("qcmCorrect");
  },
  ueMastery(ueId) {
    const pr = this.getProgress()[ueId];
    if (!pr || !pr.qcmSeen) return 0;
    return Math.round((pr.qcmCorrect / pr.qcmSeen) * 100);
  },

  // SRS (état SM-2)
  getSrs() { return lsGet(KEYS.srs) || {}; },
  getCard(id) { return this.getSrs()[id] || null; },
  saveCard(id, state) { const s = this.getSrs(); s[id] = state; lsSet(KEYS.srs, s); },
  dueCardIds(now) {
    const s = this.getSrs();
    const t = now || Date.now();
    return Object.keys(s).filter((id) => (s[id].due || 0) <= t);
  },

  // Generic key store
  getKey(name, fallback = null) { return lsGet(KEYS[name] || name) ?? fallback; },
  setKey(name, value) { return lsSet(KEYS[name] || name, value); },

  // Notes personnelles
  getNote(refId) { return (lsGet(KEYS.notes) || {})[refId] || ""; },
  setNote(refId, text) { const n = lsGet(KEYS.notes) || {}; if (text) n[refId] = text; else delete n[refId]; lsSet(KEYS.notes, n); },

  // TFE
  getTfe() { return lsGet(KEYS.tfe) || { steps: {}, currentStep: 0 }; },
  saveTfe(data) { return lsSet(KEYS.tfe, { ...this.getTfe(), ...data }); },
  saveTfeStep(stepId, content) {
    const t = this.getTfe(); t.steps = t.steps || {}; t.steps[stepId] = content; lsSet(KEYS.tfe, t);
  },

  // Journal de sessions (IndexedDB) — pour heatmap & stats
  async logSession(session) {
    return idbPut("sessions", { id: uuid(), date: todayStr(), ts: Date.now(), ...session });
  },
  async getSessions() { return idbAll("sessions"); },

  getDeviceId() {
    let id = lsGet(KEYS.device_id);
    if (typeof id !== "string" || id.length < 8) { id = uuid(); lsSet(KEYS.device_id, id); }
    return id;
  },

  // Export / import (sauvegarde)
  exportAll() {
    const dump = { _app: "aideso", _v: 1, _date: todayStr() };
    for (const k of Object.values(KEYS)) dump[k] = lsGet(k);
    return dump;
  },
  importAll(dump) {
    if (!dump || dump._app !== "aideso") throw new Error("Fichier de sauvegarde invalide.");
    for (const k of Object.values(KEYS)) if (k in dump && dump[k] != null) lsSet(k, dump[k]);
    return true;
  },

  async resetAll() {
    if (IS_BROWSER) Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
    else { memStore.clear(); }
    await idbClear("sessions");
  },
};
