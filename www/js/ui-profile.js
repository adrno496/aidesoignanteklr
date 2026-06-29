// Panneau Profil : niveau, statistiques, maîtrise par UE, succès.
import { el, navigate } from "./app.js";
import { Storage, levelFromXp } from "./storage.js";
import { ACHIEVEMENTS } from "./gamification.js";
import { modById, blocCouleur } from "./content/referentiel.js";

export function renderProfile(root) {
  const p = Storage.getProfile();
  const lvl = levelFromXp(p.totalXp);
  const pct = lvl.isMax ? 100 : Math.round(((p.totalXp - lvl.currentMin) / (lvl.nextMin - lvl.currentMin)) * 100);
  const acc = p.qcmAnswered ? Math.round((p.qcmCorrect / p.qcmAnswered) * 100) : 0;

  root.appendChild(el("div", { class: "panel-head flex-between" }, [
    el("h1", {}, ["👤 Profil"]),
    el("button", { class: "btn btn-secondary btn-sm", onclick: () => navigate("settings") }, ["⚙️ Réglages"]),
  ]));

  // Carte niveau
  root.appendChild(el("div", { class: "card" }, [
    el("div", { class: "flex", style: { gap: "14px" } }, [
      el("div", { style: { fontSize: "3rem" } }, [lvl.icon]),
      el("div", { style: { flex: "1" } }, [
        el("div", { style: { fontWeight: "800", fontSize: "1.1rem" } }, [p.prenom || "Étudiant·e"]),
        el("div", { class: "muted small" }, [lvl.label + " · " + p.totalXp + " XP"]),
      ]),
      el("div", { class: "streak-pill", style: { background: "var(--accent-soft)", color: "var(--accent-strong)" } }, ["🔥 " + (p.streak || 0)]),
    ]),
    el("div", { class: "progress", style: { marginTop: "12px" } }, [el("span", { style: { width: pct + "%" } })]),
    el("div", { class: "small muted", style: { marginTop: "6px" } }, [lvl.isMax ? "Niveau maximum !" : `${lvl.nextMin - p.totalXp} XP avant ${levelFromXp(lvl.nextMin).label}`]),
  ]));

  // Stats
  root.appendChild(el("div", { class: "section-title" }, ["Statistiques"]));
  root.appendChild(el("div", { class: "kpi-grid" }, [
    kpi("QCM répondus", p.qcmAnswered), kpi("Taux de réussite", acc + "%"),
    kpi("Cartes révisées", p.cardsReviewed), kpi("Fiches lues", p.fichesRead),
    kpi("Situations faites", p.casCompleted), kpi("Examens blancs", p.examsTaken),
    kpi("Meilleure série", (p.longestStreak || 0) + " j"), kpi("Succès", Storage.getAchievements().length),
  ]));

  // Maîtrise par module
  const prog = Storage.getProgress();
  const modIds = Object.keys(prog).filter((id) => prog[id].qcmSeen > 0).sort((a, b) => Storage.ueMastery(b) - Storage.ueMastery(a));
  if (modIds.length) {
    root.appendChild(el("div", { class: "section-title" }, ["Maîtrise par module"]));
    const card = el("div", { class: "card" });
    modIds.slice(0, 12).forEach((id) => {
      const u = modById(id); const m = Storage.ueMastery(id);
      card.appendChild(el("div", { style: { marginBottom: "12px" } }, [
        el("div", { class: "flex-between", style: { marginBottom: "4px" } }, [
          el("span", { class: "small" }, [el("span", { class: `ue-tag ${u ? blocCouleur(u.bloc) : "ue-4"}`, style: { marginRight: "6px" } }, ["M" + id]), u ? u.titre : ""]),
          el("span", { class: "small muted tabnum" }, [m + "%"]),
        ]),
        el("div", { class: "progress thin" }, [el("span", { style: { width: m + "%" } })]),
      ]));
    });
    root.appendChild(card);
  }

  // Succès
  root.appendChild(el("div", { class: "section-title" }, [`Succès (${Storage.getAchievements().length}/${ACHIEVEMENTS.length})`]));
  const grid = el("div", { class: "grid grid-3" });
  ACHIEVEMENTS.forEach((a) => {
    const got = Storage.hasAchievement(a.id);
    grid.appendChild(el("div", { class: "card center", style: { padding: "12px 8px", opacity: got ? "1" : "0.4" }, title: a.desc }, [
      el("div", { style: { fontSize: "1.8rem" } }, [got ? a.icon : "🔒"]),
      el("div", { class: "small", style: { fontWeight: "700", marginTop: "4px" } }, [a.title]),
      el("div", { class: "small muted", style: { fontSize: "0.7rem" } }, [a.desc]),
    ]));
  });
  root.appendChild(grid);
}

function kpi(label, value) {
  return el("div", { class: "kpi" }, [el("div", { class: "k-l" }, [label]), el("div", { class: "k-v tabnum" }, [String(value)])]);
}
