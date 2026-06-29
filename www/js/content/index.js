// Registre de contenu : agrège les "packs" (fiches, QCM, flashcards, situations) et expose des requêtes.
// Les packs sont chargés dynamiquement ; un nouveau pack = une ligne dans PACK_FILES.
import { modById } from "./referentiel.js";

// Manifeste des packs. La génération de masse ajoute des entrées ici. -- AUTO-PACKS --
const PACK_FILES = [
  "transversal",
  "situations",
  "mod_1",
  "mod_1_plus",
  "mod_2",
  "mod_2_plus",
  "mod_3",
  "mod_3_plus",
  "mod_4",
  "mod_4_plus",
  "mod_5",
  "mod_5_plus",
  "mod_6",
  "mod_6_plus",
  "mod_7",
  "mod_7_plus",
  "mod_8",
  "mod_8_plus",
  "mod_9",
  "mod_10",
];

let _cache = null;

export async function loadContent() {
  if (_cache) return _cache;
  const mods = await Promise.all(
    PACK_FILES.map((name) =>
      import(`./packs/${name}.js`).catch((e) => {
        console.warn("[content] pack indisponible:", name, e?.message || e);
        return {};
      })
    )
  );
  const fiches = [], qcm = [], flashcards = [], cas = [];
  for (const m of mods) {
    if (Array.isArray(m.fiches)) fiches.push(...m.fiches);
    if (Array.isArray(m.qcm)) qcm.push(...m.qcm);
    if (Array.isArray(m.flashcards)) flashcards.push(...m.flashcards);
    if (Array.isArray(m.cas)) cas.push(...m.cas);
  }
  // IDs stables basés sur le contenu (résistent à l'ajout de packs → SRS et « mes erreurs » préservés).
  const h = (s) => { let x = 5381; const t = String(s || ""); for (let i = 0; i < t.length; i++) x = ((x << 5) + x) ^ t.charCodeAt(i); return (x >>> 0).toString(36); };
  const uniq = (list, makeId) => { const seen = new Set(); for (const it of list) { if (!it.id) { let id = makeId(it); while (seen.has(id)) id += "_b"; it.id = id; } seen.add(it.id); } };
  fiches.forEach((f, i) => { if (!f.id) f.id = "f_" + i; });
  uniq(qcm, (q) => "q_" + (q.mod || q.ueId || "x") + "_" + h(q.q));
  uniq(flashcards, (c) => "fc_" + (c.mod || c.ueId || "x") + "_" + h(c.recto));
  cas.forEach((c, i) => { if (!c.id) c.id = "cas_" + i; });
  _cache = { fiches, qcm, flashcards, cas };
  return _cache;
}

function data() { return _cache || { fiches: [], qcm: [], flashcards: [], cas: [] }; }

export const allFiches = () => data().fiches;
export const allQcm = () => data().qcm;
export const allFlashcards = () => data().flashcards;
export const allCas = () => data().cas;

export const fichesForMod = (mod) => data().fiches.filter((f) => f.mod === mod);
export const qcmForMod = (mod) => data().qcm.filter((q) => q.mod === mod);
export const flashcardsForMod = (mod) => data().flashcards.filter((c) => c.mod === mod);

function inBloc(mod, n) { const m = modById(mod); return m && m.bloc === n; }
export const qcmForBloc = (n) => data().qcm.filter((q) => inBloc(q.mod, n));
export const flashcardsForBloc = (n) => data().flashcards.filter((c) => inBloc(c.mod, n));

export function modStats(mod) {
  return {
    fiches: fichesForMod(mod).length,
    qcm: qcmForMod(mod).length,
    flashcards: flashcardsForMod(mod).length,
  };
}

export function searchFiches(query) {
  const q = (query || "").trim().toLowerCase();
  if (q.length < 2) return [];
  return data().fiches.filter((f) => {
    const hay = (f.titre + " " + (f.resume || "") + " " + (f.tags || []).join(" ") + " M" + (f.mod || "")).toLowerCase();
    return hay.includes(q);
  }).slice(0, 40);
}

export function ficheById(id) { return data().fiches.find((f) => f.id === id) || null; }

export function pickQcm(pool, n) {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}
