// Panneau Réglages : apparence, profil, voix, notifications, tuteur IA, données (export/import/reset).
import { el, toast, navigate, confirmModal } from "./app.js";
import { Storage } from "./storage.js";
import { applyAppearance, THEMES } from "./themes.js";
import { requestNotifPermission } from "./notifications.js";
import { isLoggedIn, currentName, signInWithKey, signOut, syncNow, lastSync, initAutoSync } from "./sync.js";

export function renderSettings(root) {
  const s = Storage.getSettings();
  const p = Storage.getProfile();

  root.appendChild(el("div", { class: "panel-head" }, [
    el("button", { class: "btn btn-ghost btn-sm", style: { paddingLeft: "0", marginBottom: "6px" }, onclick: () => navigate("profile") }, ["← Profil"]),
    el("h1", {}, ["⚙️ Réglages"]),
  ]));

  // -------- Compte & synchronisation --------
  root.appendChild(el("div", { class: "section-title" }, ["Compte & synchronisation"]));
  const syncBox = el("div", {});
  root.appendChild(syncBox);
  renderSync(syncBox);

  // -------- Apparence --------
  root.appendChild(el("div", { class: "section-title" }, ["Apparence"]));
  const themeChips = el("div", { class: "chips" });
  THEMES.forEach((t) => themeChips.appendChild(el("button", { class: `chip ${s.theme === t.id ? "active" : ""}`, onclick: (e) => {
    Storage.saveSettings({ theme: t.id }); applyAppearance(); [...themeChips.children].forEach((c) => c.classList.remove("active")); e.currentTarget.classList.add("active");
  } }, [el("span", { style: { width: "12px", height: "12px", borderRadius: "50%", background: t.swatch, display: "inline-block", marginRight: "2px" } }), t.label])));
  root.appendChild(el("div", { class: "card" }, [
    el("div", { class: "small", style: { fontWeight: "650", marginBottom: "8px" } }, ["Thème"]),
    themeChips,
    toggleRow("Contraste élevé", "Améliore la lisibilité.", s.contrast === "high", (on) => { Storage.saveSettings({ contrast: on ? "high" : "normal" }); applyAppearance(); }),
    toggleRow("Réduire les animations", "Moins de mouvement à l'écran.", s.motion === "reduce", (on) => { Storage.saveSettings({ motion: on ? "reduce" : "auto" }); applyAppearance(); }),
    selectRow("Police", s.font, [["normal", "Standard"], ["lisible", "Lisibilité renforcée"], ["grand", "Grande taille"]], (v) => { Storage.saveSettings({ font: v }); applyAppearance(); }),
  ]));

  // -------- Profil --------
  root.appendChild(el("div", { class: "section-title" }, ["Mon profil"]));
  root.appendChild(el("div", { class: "card" }, [
    inputRow("Prénom", p.prenom || "", "text", (v) => Storage.saveProfile({ prenom: v })),
    inputRow("Promo / IFAS", s.promo || "", "text", (v) => Storage.saveSettings({ promo: v }), "ex. 2025–2026"),
    inputRow("Objectif quotidien (cartes)", String(s.dailyGoal || 20), "number", (v) => Storage.saveSettings({ dailyGoal: Math.max(5, Number(v) || 20) })),
    inputRow("Temps par question en examen (s)", String(s.examTimerSec || 60), "number", (v) => Storage.saveSettings({ examTimerSec: Math.max(15, Number(v) || 60) })),
  ]));

  // -------- Voix --------
  root.appendChild(el("div", { class: "section-title" }, ["Lecture vocale"]));
  root.appendChild(el("div", { class: "card" }, [
    toggleRow("Activer la lecture des fiches", "Bouton « Écouter » sur chaque fiche.", s.ttsEnabled, (on) => Storage.saveSettings({ ttsEnabled: on })),
  ]));

  // -------- Notifications --------
  root.appendChild(el("div", { class: "section-title" }, ["Rappels"]));
  root.appendChild(el("div", { class: "card" }, [
    toggleRow("Rappel de révision quotidien", "Une notification si tu n'as pas révisé.", s.notifsEnabled, async (on) => {
      if (on) { const perm = await requestNotifPermission(); if (perm !== "granted") { toast("Autorisation refusée par le navigateur.", "error"); return false; } }
      Storage.saveSettings({ notifsEnabled: on });
    }),
    inputRow("Heure du rappel", String(s.notifHour || 18), "number", (v) => Storage.saveSettings({ notifHour: Math.min(23, Math.max(0, Number(v) || 18)) })),
  ]));

  // -------- Tuteur IA --------
  root.appendChild(el("div", { class: "section-title" }, ["Tuteur IA (optionnel)"]));
  root.appendChild(el("div", { class: "card" }, [
    el("p", { class: "small muted" }, ["Désactivé par défaut. Avec ta propre clé API (Mistral par défaut, ou Anthropic), tu peux demander des explications, des QCM générés et un retour sur ton mémoire. La clé reste sur cet appareil."]),
    toggleRow("Activer le tuteur IA", "Nécessite une clé API.", s.aiEnabled, (on) => Storage.saveSettings({ aiEnabled: on })),
    selectRow("Fournisseur", s.aiProvider, [["mistral", "Mistral (par défaut)"], ["anthropic", "Anthropic (Claude)"]], (v) => { Storage.saveSettings({ aiProvider: v, aiModel: v === "anthropic" ? "claude-haiku-4-5-20251001" : "mistral-small-latest" }); navigate("settings"); }),
    inputRow(s.aiProvider === "anthropic" ? "Clé API (Anthropic)" : "Clé API (Mistral)", s.aiKey || "", "password", (v) => Storage.saveSettings({ aiKey: v.trim() }), s.aiProvider === "anthropic" ? "sk-ant-…" : "clé Mistral…"),
    selectRow("Modèle", s.aiModel, s.aiProvider === "anthropic"
      ? [["claude-haiku-4-5-20251001", "Claude Haiku (rapide)"], ["claude-sonnet-4-6", "Claude Sonnet (équilibré)"], ["claude-opus-4-8", "Claude Opus (le + capable)"]]
      : [["mistral-small-latest", "Mistral Small (rapide, éco)"], ["mistral-medium-latest", "Mistral Medium (équilibré)"], ["mistral-large-latest", "Mistral Large (le + capable)"]],
      (v) => Storage.saveSettings({ aiModel: v })),
    el("p", { class: "small muted", style: { marginTop: "10px" } }, ["Obtiens une clé sur console.mistral.ai. Note : l'appel se fait depuis le navigateur ; si le fournisseur bloque les requêtes navigateur (CORS), utilise un relais."]),
  ]));

  // -------- Données --------
  root.appendChild(el("div", { class: "section-title" }, ["Mes données"]));
  const fileInput = el("input", { type: "file", accept: "application/json", style: { display: "none" }, onchange: (e) => importFile(e.target.files[0]) });
  root.appendChild(el("div", { class: "card" }, [
    el("p", { class: "small muted" }, ["Toutes tes données restent sur cet appareil. Pense à exporter une sauvegarde régulièrement."]),
    el("button", { class: "btn btn-secondary btn-block mb", onclick: exportData }, ["⬇️ Exporter ma sauvegarde"]),
    el("button", { class: "btn btn-secondary btn-block mb", onclick: () => fileInput.click() }, ["⬆️ Importer une sauvegarde"]),
    fileInput,
    el("button", { class: "btn btn-danger btn-block", onclick: () => confirmModal({ title: "Tout réinitialiser ?", message: "Cela efface définitivement ta progression, tes notes et ton mémoire sur cet appareil.", confirmLabel: "Effacer", danger: true, onConfirm: async () => { await Storage.resetAll(); toast("Données réinitialisées.", "success"); navigate("dashboard"); } }) }, ["🗑️ Tout réinitialiser"]),
  ]));

  root.appendChild(el("p", { class: "disclaimer" }, ["AideSo v1 · Aide à la révision DEAS (arrêté du 10 juin 2021). Le contenu ne remplace pas les cours officiels ni les protocoles en vigueur. En cas de doute, réfère-toi à ton IFAS et à l'IDE."]));
}

// ---------- Compte & synchronisation (PC ↔ téléphone) ----------
function renderSync(box) {
  box.innerHTML = "";
  if (isLoggedIn()) {
    const last = lastSync();
    box.appendChild(el("div", { class: "card" }, [
      el("div", { class: "flex-between mb" }, [
        el("div", { class: "flex" }, [el("span", { style: { fontSize: "1.3rem" } }, ["☁️"]), el("strong", {}, ["Connecté" + (currentName() ? " · " + currentName() : "")])]),
        el("span", { class: "badge badge-good" }, ["Sync active"]),
      ]),
      el("div", { class: "small muted", style: { marginBottom: "10px" } }, [last ? "Dernière synchro : " + last.toLocaleString("fr-FR") : "Pas encore synchronisé."]),
      el("button", { class: "btn btn-block mb", onclick: async (e) => {
        const b = e.currentTarget; b.setAttribute("disabled", ""); b.textContent = "Synchronisation…";
        try { const r = await syncNow(); toast(r === "pulled" ? "Données récupérées ✓" : "Sauvegardé dans le cloud ✓", "success"); renderSync(box); }
        catch (err) { toast(err.message, "error", 4000); b.removeAttribute("disabled"); b.textContent = "🔄 Synchroniser maintenant"; }
      } }, ["🔄 Synchroniser maintenant"]),
      el("button", { class: "btn btn-secondary btn-block", onclick: () => confirmModal({ title: "Se déconnecter ?", message: "Tes données restent sur cet appareil. Tu pourras te reconnecter avec ta clé d'accès.", confirmLabel: "Se déconnecter", onConfirm: () => { signOut(); toast("Déconnecté.", "info"); renderSync(box); } }) }, ["Se déconnecter"]),
    ]));
  } else {
    const keyInput = el("input", { type: "text", placeholder: "Ta clé d'accès", autocapitalize: "characters", autocomplete: "off", spellcheck: "false" });
    box.appendChild(el("div", { class: "card" }, [
      el("p", { class: "small muted" }, ["Entre ta clé d'accès personnelle pour sauvegarder ta progression dans le cloud et la retrouver sur PC et téléphone."]),
      el("div", { class: "field" }, [el("label", {}, ["Clé d'accès"]), keyInput]),
      el("button", { class: "btn btn-block", onclick: async (e) => {
        const b = e.currentTarget; if (!keyInput.value.trim()) return toast("Saisis ta clé d'accès.", "info");
        b.setAttribute("disabled", ""); b.textContent = "Connexion…";
        try {
          await signInWithKey(keyInput.value);
          toast("Connecté ✓ synchronisation…", "success");
          try { await syncNow(); } catch (e2) { toast(e2.message, "error", 4500); }
          initAutoSync();
          renderSync(box);
        } catch (err) { toast(err.message, "error", 4000); b.removeAttribute("disabled"); b.textContent = "Se connecter"; }
      } }, ["Se connecter"]),
      el("p", { class: "small muted", style: { marginTop: "8px" } }, ["Pas de clé ? Demande-la à la personne qui t'a partagé l'app. (La sauvegarde locale fonctionne sans compte.)"]),
    ]));
  }
}

// ---------- helpers de formulaire ----------
function toggleRow(title, sub, initial, onChange) {
  let on = !!initial;
  const tg = el("div", { class: `toggle ${on ? "on" : ""}` });
  const row = el("div", { class: "switch", onclick: async () => {
    const next = !on;
    const res = await onChange(next);
    if (res === false) return;
    on = next; tg.classList.toggle("on", on);
  } }, [el("div", { class: "sw-main" }, [el("div", { class: "sw-title" }, [title]), sub ? el("div", { class: "sw-sub" }, [sub]) : null]), tg]);
  return row;
}
function inputRow(label, value, type, onChange, placeholder) {
  const input = el("input", { type, value, placeholder: placeholder || "" });
  input.value = value;
  input.addEventListener("change", () => onChange(input.value));
  return el("div", { class: "field", style: { marginTop: "12px" } }, [el("label", {}, [label]), input]);
}
function selectRow(label, value, options, onChange) {
  const sel = el("select", { onchange: (e) => onChange(e.target.value) }, options.map(([v, l]) => el("option", { value: v, selected: v === value ? true : null }, [l])));
  return el("div", { class: "field", style: { marginTop: "12px" } }, [el("label", {}, [label]), sel]);
}

function exportData() {
  try {
    const data = Storage.exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = el("a", { href: url, download: `aideso-sauvegarde-${data._date}.json` });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Sauvegarde exportée ✓", "success");
  } catch (e) { toast("Échec de l'export.", "error"); }
}
function importFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try { Storage.importAll(JSON.parse(reader.result)); toast("Sauvegarde importée ✓", "success"); navigate("dashboard"); }
    catch (e) { toast(e.message || "Fichier invalide.", "error", 3000); }
  };
  reader.readAsText(file);
}
