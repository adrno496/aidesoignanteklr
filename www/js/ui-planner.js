// Panneau Planning & coaching : échéances de certification + compte à rebours + révision prioritaire.
import { el, toast, navigate, confirmModal } from "./app.js";
import { Storage, todayStr } from "./storage.js";
import { modById, blocCouleur } from "./content/referentiel.js";
import { qcmForMod, pickQcm } from "./content/index.js";

export function daysUntil(date) {
  const [y, m, d] = date.split("-").map(Number);
  const [y2, m2, d2] = todayStr().split("-").map(Number);
  return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(y2, m2 - 1, d2)) / 86400000);
}

export function renderPlanner(root) {
  root.appendChild(el("div", { class: "panel-head" }, [
    el("h1", {}, ["🗓️ Planning & coaching"]),
    el("div", { class: "sub" }, ["Tes échéances, ton compte à rebours et ce qu'il faut réviser en priorité."]),
  ]));

  root.appendChild(el("div", { class: "section-title" }, ["Mes échéances"]));
  const list = el("div", { class: "list" });
  root.appendChild(list);
  renderExams(list);

  const label = el("input", { type: "text", placeholder: "Ex. Éval bloc 2, oral certification…" });
  const date = el("input", { type: "date", value: todayStr() });
  root.appendChild(el("div", { class: "card mt" }, [
    el("div", { class: "field" }, [el("label", {}, ["Nouvelle échéance"]), label]),
    el("div", { class: "field" }, [el("label", {}, ["Date"]), date]),
    el("button", { class: "btn btn-block", onclick: () => {
      if (!date.value) return toast("Choisis une date.", "info");
      Storage.addExam(label.value.trim(), date.value);
      label.value = "";
      renderExams(list);
      toast("Échéance ajoutée ✓", "success", 1500);
    } }, ["Ajouter l'échéance"]),
  ]));

  root.appendChild(el("div", { class: "section-title" }, ["À réviser en priorité"]));
  const weak = Storage.weakAreas().slice(0, 6);
  if (!weak.length) {
    root.appendChild(el("div", { class: "card muted small" }, ["Fais quelques QCM : l'app détectera automatiquement tes points faibles et te dira quoi réviser en priorité. 💪"]));
  } else {
    const w = el("div", { class: "list" });
    weak.forEach((a) => {
      const u = modById(a.id);
      const n = qcmForMod(a.id).length;
      w.appendChild(el("div", { class: "row" }, [
        el("span", { class: `ue-tag ${u ? blocCouleur(u.bloc) : "ue-4"}` }, ["M" + a.id]),
        el("span", { class: "row-main" }, [
          el("div", { class: "row-title", style: { fontSize: "0.9rem" } }, [u ? u.titre : "Module " + a.id]),
          el("div", { class: "row-sub" }, [`Maîtrise ${a.mastery}%${a.wrong ? ` · ${a.wrong} erreur${a.wrong > 1 ? "s" : ""}` : ""}`]),
        ]),
        n ? el("button", { class: "btn btn-soft btn-sm", onclick: () => navigate("entrainement", { mode: "qcm", pool: pickQcm(qcmForMod(a.id), Math.min(15, n)), title: "Module " + a.id }) }, ["Réviser"]) : null,
      ]));
    });
    root.appendChild(w);
  }

  root.appendChild(el("div", { class: "section-title" }, ["Objectif du jour"]));
  const due = Storage.dueCardIds().length;
  const wrong = Storage.wrongIds().length;
  root.appendChild(el("div", { class: "card" }, [
    el("div", { class: "small", style: { marginBottom: "10px" } }, [
      `🔁 ${due} carte${due > 1 ? "s" : ""} à réviser aujourd'hui` + (wrong ? ` · 🩹 ${wrong} erreur${wrong > 1 ? "s" : ""} à revoir` : ""),
    ]),
    el("div", { class: "flex", style: { gap: "8px" } }, [
      el("button", { class: "btn", style: { flex: "1" }, onclick: () => navigate("entrainement", { mode: "review" }) }, ["Réviser mes cartes"]),
      wrong ? el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => navigate("entrainement", { mode: "errors" }) }, ["Mes erreurs"]) : null,
    ].filter(Boolean)),
  ]));
}

function renderExams(list) {
  list.innerHTML = "";
  const exams = Storage.getExams();
  if (!exams.length) {
    list.appendChild(el("div", { class: "empty small", style: { padding: "16px" } }, ["Aucune échéance. Ajoute tes dates d'évaluations, d'épreuves ou de certification ci-dessous."]));
    return;
  }
  exams.forEach((e) => {
    const d = daysUntil(e.date);
    const past = d < 0;
    const urgent = d >= 0 && d <= 7;
    list.appendChild(el("div", { class: "row" }, [
      el("span", { class: "row-ic", style: { fontSize: "1.4rem" } }, [past ? "✅" : urgent ? "🔥" : "🗓️"]),
      el("span", { class: "row-main" }, [
        el("div", { class: "row-title" }, [e.label]),
        el("div", { class: "row-sub" }, [e.date]),
      ]),
      el("span", { class: `badge ${past ? "" : urgent ? "badge-bad" : "badge-accent"}`, style: { marginRight: "6px" } }, [past ? "passé" : d === 0 ? "aujourd'hui" : `J-${d}`]),
      el("button", { class: "btn btn-ghost btn-sm btn-icon", title: "Supprimer", onclick: () => confirmModal({ title: "Supprimer cette échéance ?", confirmLabel: "Supprimer", danger: true, onConfirm: () => { Storage.removeExam(e.id); renderExams(list); } }) }, ["🗑️"]),
    ]));
  });
}
