// Panneau Accueil : progression, révision du jour (SRS), quêtes, accès rapides, heatmap.
import { el, navigate } from "./app.js";
import { Storage, levelFromXp } from "./storage.js";
import { getWeeklyQuests } from "./gamification.js";
import { allFlashcards } from "./content/index.js";

function greeting() {
  const h = new Date().getHours();
  return h < 6 ? "Bonne nuit" : h < 12 ? "Bonjour" : h < 18 ? "Bon après-midi" : "Bonsoir";
}

export function renderDashboard(root) {
  const p = Storage.getProfile();
  const s = Storage.getSettings();
  const lvl = levelFromXp(p.totalXp);
  const pct = lvl.isMax ? 100 : Math.round(((p.totalXp - lvl.currentMin) / (lvl.nextMin - lvl.currentMin)) * 100);

  const due = Storage.dueCardIds();
  const srs = Storage.getSrs();
  const newCards = allFlashcards().filter((c) => !srs[c.id]);
  const toReview = due.length + Math.min(newCards.length, s.dailyGoal || 20);

  root.appendChild(el("div", { class: "panel-head" }, [
    el("div", { class: "eyebrow" }, [greeting() + (p.prenom ? `, ${p.prenom}` : "")]),
    el("h1", {}, ["AideSo ", el("span", { class: "muted", style: { fontWeight: "400", fontSize: "1rem" } }, ["· révision aide-soignant·e"])]),
  ]));

  root.appendChild(el("div", { class: "hero" }, [
    el("div", { class: "flex-between" }, [
      el("div", {}, [
        el("h2", {}, [toReview > 0 ? `${toReview} carte${toReview > 1 ? "s" : ""} à réviser` : "Tout est à jour ! 🎉"]),
        el("div", { class: "hero-sub" }, [toReview > 0 ? `${due.length} due${due.length > 1 ? "s" : ""} · ${Math.min(newCards.length, s.dailyGoal || 20)} nouvelle${newCards.length > 1 ? "s" : ""}` : "Reviens demain ou explore un module."]),
      ]),
      el("div", { class: "streak-pill" }, ["🔥 " + (p.streak || 0) + " j"]),
    ]),
    el("button", { class: "btn", onclick: () => navigate("entrainement", { mode: "review" }) }, [toReview > 0 ? "Réviser maintenant →" : "Réviser quand même"]),
  ]));

  root.appendChild(el("div", { class: "card mt", style: { marginTop: "12px" } }, [
    el("div", { class: "flex-between mb" }, [
      el("div", { class: "flex" }, [el("span", { style: { fontSize: "1.4rem" } }, [lvl.icon]), el("strong", {}, [lvl.label])]),
      el("span", { class: "badge badge-accent" }, [`${p.totalXp} XP`]),
    ]),
    el("div", { class: "progress" }, [el("span", { style: { width: pct + "%" } })]),
    el("div", { class: "small muted", style: { marginTop: "6px" } }, [lvl.isMax ? "Niveau maximum atteint !" : `${lvl.nextMin - p.totalXp} XP avant le niveau suivant`]),
  ]));

  const acc = p.qcmAnswered ? Math.round((p.qcmCorrect / p.qcmAnswered) * 100) : 0;
  root.appendChild(el("div", { class: "stat-row mt" }, [
    el("div", { class: "stat" }, [el("div", { class: "v" }, [String(p.qcmAnswered)]), el("div", { class: "l" }, ["QCM faits"])]),
    el("div", { class: "stat" }, [el("div", { class: "v" }, [acc + "%"]), el("div", { class: "l" }, ["Réussite"])]),
    el("div", { class: "stat" }, [el("div", { class: "v" }, [String(p.cardsReviewed)]), el("div", { class: "l" }, ["Cartes"])]),
  ]));

  const wrong = Storage.wrongIds().length;
  root.appendChild(el("div", { class: "section-title" }, ["Accès rapides"]));
  root.appendChild(el("div", { class: "grid grid-2" }, [
    quick("🎯", "QCM express", "20 questions au hasard", () => navigate("entrainement", { mode: "qcmRandom" })),
    wrong ? quick("🩹", "Mes erreurs", `${wrong} à revoir`, () => navigate("entrainement", { mode: "errors" })) : quick("🩺", "Situations", "Mises en situation", () => navigate("entrainement", { mode: "situations" })),
    quick("🧰", "Boîte à outils", "Constantes, gestes, hygiène…", () => navigate("outils")),
    quick("📋", "DEAS / Examen", "Blocs, stages, certification", () => navigate("deas")),
  ]));

  const quests = getWeeklyQuests();
  root.appendChild(el("div", { class: "section-title" }, ["Défis de la semaine"]));
  root.appendChild(el("div", { class: "card" }, quests.map((q) => {
    const pc = Math.round((q.done / q.target) * 100);
    return el("div", { style: { marginBottom: "12px" } }, [
      el("div", { class: "flex-between", style: { marginBottom: "4px" } }, [
        el("span", { class: "small" }, [`${q.icon} ${q.label}`]),
        el("span", { class: "small muted tabnum" }, [q.complete ? "✅" : `${q.done}/${q.target}`]),
      ]),
      el("div", { class: "progress thin" }, [el("span", { style: { width: pc + "%" } })]),
    ]);
  })));

  root.appendChild(el("div", { class: "section-title" }, ["Activité (90 derniers jours)"]));
  const heatCard = el("div", { class: "card" }, [el("div", { class: "spinner" })]);
  root.appendChild(heatCard);
  fillHeatmap(heatCard);

  root.appendChild(el("p", { class: "disclaimer" }, ["AideSo est une aide à la révision et ne remplace pas tes cours ni les protocoles officiels en vigueur."]));
}

function quick(icon, title, sub, onclick) {
  return el("button", { class: "card card-link", onclick }, [
    el("div", { style: { fontSize: "1.6rem", marginBottom: "6px" } }, [icon]),
    el("div", { class: "card-title", style: { fontSize: "0.95rem" } }, [title]),
    el("div", { class: "card-sub small" }, [sub]),
  ]);
}

async function fillHeatmap(card) {
  let sessions = [];
  try { sessions = await Storage.getSessions(); } catch {}
  const byDay = {};
  for (const s of sessions) byDay[s.date] = (byDay[s.date] || 0) + (s.count || 1);
  const cells = [];
  const today = new Date();
  for (let i = 89; i >= 0; i--) {
    const d = new Date(today.getTime() - i * 86400000);
    const key = d.toISOString().slice(0, 10);
    const n = byDay[key] || 0;
    const lvl = n === 0 ? 0 : n < 3 ? 1 : n < 8 ? 2 : n < 15 ? 3 : 4;
    cells.push(el("div", { class: `heat-cell ${lvl ? "heat-" + lvl : ""}`, title: `${key} — ${n} activité(s)` }));
  }
  card.innerHTML = "";
  card.appendChild(el("div", { class: "heatmap" }, cells));
  const total = sessions.reduce((a, s) => a + (s.count || 1), 0);
  card.appendChild(el("div", { class: "small muted", style: { marginTop: "10px" } }, [`${total} activités enregistrées · série actuelle ${Storage.getProfile().streak || 0} j`]));
}
