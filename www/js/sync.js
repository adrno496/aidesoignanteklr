// Sauvegarde & synchronisation cloud (PC ↔ téléphone) via Supabase, par clé d'accès nominative.
// Sans SDK : appels REST/Auth directs (offline-safe — n'appelle le réseau qu'à la synchro).
import { SUPABASE } from "./supabase-config.js";
import { Storage } from "./storage.js";

const LS = { session: "sync_session", stamp: "sync_stamp" };
const APP = SUPABASE.app;

// Accès localStorage tolérant (sûr hors navigateur / en mode privé).
function lsGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch {} }
function lsDel(k) { try { localStorage.removeItem(k); } catch {} }

function getSession() { try { return JSON.parse(lsGet(LS.session) || "null"); } catch { return null; } }
function setSession(s) { if (s) lsSet(LS.session, JSON.stringify(s)); else lsDel(LS.session); }

export function isLoggedIn() { return !!getSession()?.access_token; }
export function currentName() { const s = getSession(); return s?.user?.user_metadata?.name || null; }

function normalizeKey(k) { return String(k || "").trim().toUpperCase().replace(/\s+/g, ""); }
function keyEmail(k) { const n = normalizeKey(k); return "u-" + n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") + "@infi.app"; }

function jsonHeaders(extra) { return { apikey: SUPABASE.anonKey, "Content-Type": "application/json", ...(extra || {}) }; }

export async function signInWithKey(key) {
  const k = normalizeKey(key);
  if (k.length < 6) throw new Error("Clé d'accès trop courte.");
  const r = await fetch(SUPABASE.url + "/auth/v1/token?grant_type=password", {
    method: "POST", headers: jsonHeaders(), body: JSON.stringify({ email: keyEmail(k), password: k }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error_description || j.msg || j.error || "Clé d'accès invalide.");
  setSession({ access_token: j.access_token, refresh_token: j.refresh_token, expires_at: Date.now() + (j.expires_in || 3600) * 1000, user: j.user });
  return j.user;
}

export function signOut() { setSession(null); lsDel(LS.stamp); }

async function ensureToken() {
  const s = getSession();
  if (!s) throw new Error("Non connecté.");
  if (Date.now() < (s.expires_at || 0) - 60000) return s.access_token;
  const r = await fetch(SUPABASE.url + "/auth/v1/token?grant_type=refresh_token", {
    method: "POST", headers: jsonHeaders(), body: JSON.stringify({ refresh_token: s.refresh_token }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { setSession(null); throw new Error("Session expirée, reconnecte-toi."); }
  setSession({ access_token: j.access_token, refresh_token: j.refresh_token, expires_at: Date.now() + (j.expires_in || 3600) * 1000, user: j.user || s.user });
  return j.access_token;
}

function authHeaders(token) { return { apikey: SUPABASE.anonKey, Authorization: "Bearer " + token, "Content-Type": "application/json" }; }

function syncErr(status, txt) {
  if (status === 404 || /relation .*saves.* does not exist/i.test(txt || "")) return "Sauvegarde non configurée côté serveur (table « saves » manquante).";
  if (status === 401) return "Session expirée, reconnecte-toi.";
  return "Erreur de synchronisation (" + status + ").";
}

async function pull() {
  const t = await ensureToken();
  const r = await fetch(SUPABASE.url + `/rest/v1/saves?app=eq.${APP}&select=data,updated_at`, { headers: authHeaders(t) });
  if (!r.ok) throw new Error(syncErr(r.status, await r.text().catch(() => "")));
  const rows = await r.json();
  return rows[0] || null;
}

let _lastPushedJson = null;
async function push() {
  const t = await ensureToken();
  const dump = Storage.exportAll();
  const body = [{ app: APP, data: dump, updated_at: new Date().toISOString() }];
  const r = await fetch(SUPABASE.url + "/rest/v1/saves", {
    method: "POST", headers: { ...authHeaders(t), Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(syncErr(r.status, await r.text().catch(() => "")));
  _lastPushedJson = JSON.stringify(dump);
  lsSet(LS.stamp, String(Date.now()));
}

// Synchronise : importe le distant s'il est plus récent que le dernier état local connu, sinon envoie le local.
export async function syncNow() {
  const remote = await pull();
  const localStamp = Number(lsGet(LS.stamp) || 0);
  if (remote && remote.data && new Date(remote.updated_at).getTime() > localStamp) {
    Storage.importAll(remote.data);
    lsSet(LS.stamp, String(new Date(remote.updated_at).getTime()));
    _lastPushedJson = JSON.stringify(Storage.exportAll());
    window.dispatchEvent(new CustomEvent("sync-updated"));
    return "pulled";
  }
  await push();
  return "pushed";
}

export function lastSync() {
  const t = Number(lsGet(LS.stamp) || 0);
  return t ? new Date(t) : null;
}

let _started = false;
export function initAutoSync() {
  if (_started || !isLoggedIn()) return;
  _started = true;
  syncNow().catch(() => {});
  const tryPush = () => { if (!isLoggedIn()) return; try { if (JSON.stringify(Storage.exportAll()) !== _lastPushedJson) push().catch(() => {}); } catch {} };
  setInterval(tryPush, 45000);
  window.addEventListener("online", tryPush);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") tryPush(); });
}
