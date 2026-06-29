// Rappels de révision locaux (best-effort via l'API Notification du navigateur).
import { Storage } from "./storage.js";

export async function requestNotifPermission() {
  if (typeof Notification === "undefined") return "unsupported";
  if (Notification.permission === "granted") return "granted";
  try { return await Notification.requestPermission(); } catch { return "denied"; }
}

// Vérifie au démarrage s'il est l'heure du rappel et si l'utilisateur n'a pas révisé aujourd'hui.
export function maybeRemind() {
  const s = Storage.getSettings();
  if (!s.notifsEnabled) return;
  if (typeof Notification === "undefined" || Notification.permission !== "granted") return;
  const p = Storage.getProfile();
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const lastReminded = Storage.getKey("last_remind");
  if (lastReminded === today) return;
  if (p.lastActiveDate === today) return; // déjà révisé aujourd'hui
  if (now.getHours() >= (s.notifHour || 18)) {
    try {
      new Notification("Infi — révision du jour", {
        body: "C'est le moment de réviser ! Quelques cartes t'attendent. 🔥",
        icon: "icons/icon-192.png",
        badge: "icons/icon-192.png",
      });
      Storage.setKey("last_remind", today);
    } catch {}
  }
}
