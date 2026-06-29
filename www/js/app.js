// Infi — amorçage, routage par panneaux, helpers partagés (DOM, toast, modale).
import { Storage } from "./storage.js";
import { applyAppearance } from "./themes.js";
import { installUpdateBanner } from "./a11y.js";
import { shouldShowOnboarding, showOnboarding } from "./onboarding.js";
import { maybeRemind } from "./notifications.js";
import { loadContent } from "./content/index.js";

import { renderDashboard } from "./ui-dashboard.js";
import { renderCours } from "./ui-cours.js";
import { renderEntrainement } from "./ui-entrainement.js";
import { renderDeas } from "./ui-deas.js";
import { renderProfile } from "./ui-profile.js";
import { renderOutils } from "./ui-outils.js";
import { renderSettings } from "./ui-settings.js";
import { renderPlanner } from "./ui-planner.js";

const PANELS = {
  dashboard:    { id: "dashboard",    label: "Accueil",     icon: "🏠", render: renderDashboard },
  cours:        { id: "cours",        label: "Cours",       icon: "📚", render: renderCours },
  entrainement: { id: "entrainement", label: "S'entraîner", icon: "🎯", render: renderEntrainement },
  deas:         { id: "deas",         label: "DEAS",        icon: "📋", render: renderDeas },
  profile:      { id: "profile",      label: "Profil",      icon: "👤", render: renderProfile },
  outils:       { id: "outils",       label: "Outils",      icon: "🧰", render: renderOutils, hidden: true },
  planner:      { id: "planner",      label: "Planning",    icon: "🗓️", render: renderPlanner, hidden: true },
  settings:     { id: "settings",     label: "Réglages",    icon: "⚙️", render: renderSettings, hidden: true },
};

let currentPanel = "dashboard";

// ---------- DOM helper ----------
export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k === "style" && typeof v === "object") Object.assign(node.style, v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v === true) node.setAttribute(k, "");
    else node.setAttribute(k, v);
  }
  const list = Array.isArray(children) ? children : [children];
  for (const c of list) {
    if (c == null || c === false) continue;
    node.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
  }
  return node;
}

export function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }

export function toast(message, kind = "info", duration = 2600) {
  const root = document.getElementById("toast-root") || document.body;
  const node = el("div", { class: `toast toast-${kind}` }, [message]);
  root.appendChild(node);
  requestAnimationFrame(() => node.classList.add("toast-show"));
  setTimeout(() => { node.classList.remove("toast-show"); setTimeout(() => node.remove(), 300); }, duration);
}

// ---------- Modale ----------
export function openModal(content, opts = {}) {
  const overlay = el("div", { class: "modal-overlay" });
  const modal = el("div", { class: "modal", role: "dialog", "aria-modal": "true", tabindex: "-1" }, [el("div", { class: "modal-grab" })]);
  modal.appendChild(content);
  overlay.appendChild(modal);
  if (opts.dismissable !== false) {
    overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
  }
  (document.getElementById("modal-root") || document.body).appendChild(overlay);
  try { modal.focus(); } catch {}
  return overlay;
}
export function closeModal() {
  const overlays = document.querySelectorAll(".modal-overlay");
  if (overlays.length) overlays[overlays.length - 1].remove();
}
export function confirmModal({ title, message, confirmLabel = "Confirmer", danger = false, onConfirm }) {
  const body = el("div", {}, [
    el("h3", {}, [title]),
    message ? el("p", { class: "muted" }, [message]) : null,
    el("div", { class: "flex", style: { gap: "10px", marginTop: "16px" } }, [
      el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => closeModal() }, ["Annuler"]),
      el("button", { class: `btn ${danger ? "btn-danger" : ""}`, style: { flex: "1" }, onclick: () => { closeModal(); onConfirm && onConfirm(); } }, [confirmLabel]),
    ]),
  ]);
  openModal(body);
}

// ---------- Routage ----------
export function navigate(panel, opts = {}) {
  if (!PANELS[panel]) panel = "dashboard";
  currentPanel = panel;
  const root = document.getElementById("panel-root");
  if (!root) return;
  clear(root);
  root.classList.remove("panel-enter"); void root.offsetWidth; root.classList.add("panel-enter");
  try { PANELS[panel].render(root, opts); }
  catch (err) {
    console.error("[panel]", panel, err);
    root.appendChild(el("div", { class: "empty" }, [el("div", { class: "empty-ic" }, ["⚠️"]), el("p", {}, ["Une erreur est survenue sur cet écran."]), el("p", { class: "small muted" }, [String(err && err.message || err)])]));
  }
  document.querySelectorAll(".bottom-nav .nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.panel === panel));
  window.scrollTo(0, 0);
}
export function getCurrentPanel() { return currentPanel; }

function renderBottomNav() {
  const nav = document.getElementById("bottom-nav");
  if (!nav) return;
  clear(nav);
  for (const p of Object.values(PANELS)) {
    if (p.hidden) continue;
    nav.appendChild(el("button", { class: "nav-btn", "data-panel": p.id, onclick: () => navigate(p.id) }, [
      el("span", { class: "nav-icon" }, [p.icon]),
      el("span", { class: "nav-label" }, [p.label]),
    ]));
  }
}

function renderHardRefresh() {
  if (document.getElementById("hard-refresh-btn")) return;
  const btn = el("button", {
    id: "hard-refresh-btn", class: "hard-refresh-btn", title: "Forcer la mise à jour", "aria-label": "Forcer la mise à jour",
    onclick: async () => {
      if (btn.disabled) return;
      btn.disabled = true; btn.classList.add("spinning");
      toast("Mise à jour…", "info", 1800);
      try {
        if ("caches" in window) { const keys = await caches.keys(); await Promise.all(keys.map((k) => caches.delete(k))); }
        if ("serviceWorker" in navigator) { const regs = await navigator.serviceWorker.getRegistrations(); await Promise.all(regs.map((r) => r.unregister())); }
      } catch {}
      setTimeout(() => { const u = new URL(window.location.href); u.searchParams.set("_v", String(Date.now())); window.location.replace(u.toString()); }, 500);
    },
  }, ["🔄"]);
  document.body.appendChild(btn);
}

async function bootstrap() {
  await Storage.init();
  await loadContent();
  if (typeof window !== "undefined") window._aidesoContentReady = true;
  applyAppearance(Storage.getSettings());
  installUpdateBanner();
  renderBottomNav();
  renderHardRefresh();
  navigate("dashboard");
  if (shouldShowOnboarding()) setTimeout(() => showOnboarding({ onComplete: () => navigate("dashboard") }), 350);
  setTimeout(() => { try { maybeRemind(); } catch {} }, 1500);
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    bootstrap().catch((err) => {
      console.error(err);
      const root = document.getElementById("panel-root");
      if (root) root.innerHTML = `<div class="empty"><div class="empty-ic">⚠️</div><h2>Erreur de démarrage</h2><pre class="small">${String(err && err.message || err)}</pre></div>`;
    });
  });
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const popup = document.getElementById("glossary-popup");
    if (popup) { popup.remove(); return; }
    closeModal();
  });
  window.AideSo = { Storage, navigate, toast };
}
