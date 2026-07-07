// Panneau « Ma VAE » : accompagnement pas-à-pas à la Validation des Acquis de l'Expérience (DEAS).
// Parcours, grille des 11 compétences (auto-positionnement), assistant de situation, jury, export PDF.
import { el, toast, openModal, closeModal } from "./app.js";
import { Storage } from "./storage.js";
import { VAE_STEPS, VAE_STEP_META, COMP_ATTENDUS, SITUATION_CHAMPS, VAE_GLOSSAIRE, VAE_DOSSIER_CHECKLIST, VAE_JURY_QUESTIONS, VAE_RESSOURCES } from "./content/vae.js";
import { COMPETENCES, BLOCS } from "./content/referentiel.js";
import { XP, checkAchievements } from "./gamification.js";
import { isAiEnabled, ask, Prompts } from "./ai-client.js";

function countWords(t) { return (String(t).trim().match(/\S+/g) || []).length; }
function isDone(id) { const s = Storage.getVae().steps || {}; return !!(s[id] && String(s[id]).trim().length > 20); }

const POS_LABELS = { maitrise: "Maîtrisé", consolider: "À consolider", "pas-encore": "Pas encore" };

export function renderVae(root, opts = {}) {
  if (opts.stepId) { const st = VAE_STEPS.find((s) => s.id === opts.stepId); if (st) return showStep(root, st); }
  if (opts.view === "competences") return void (showOverview(root), showCompetencesModal());
  if (opts.view === "situations") return void (showOverview(root), showSituationsModal());
  showOverview(root);
}

function showOverview(root) {
  root.innerHTML = "";
  const done = VAE_STEPS.filter((s) => isDone(s.id)).length;
  const pct = Math.round((done / VAE_STEPS.length) * 100);

  root.appendChild(el("div", { class: "panel-head" }, [
    el("div", { class: "eyebrow" }, ["Diplôme d'État d'Aide-Soignant·e · par expérience"]),
    el("h1", {}, ["🎓 Ma VAE"]),
    el("div", { class: "sub" }, ["Obtenir le DEAS par la Validation des Acquis de l'Expérience, étape par étape."]),
  ]));

  root.appendChild(el("div", { class: "card mb" }, [
    el("div", { class: "flex-between mb" }, [el("strong", {}, ["Avancement du dossier"]), el("span", { class: "badge badge-accent" }, [`${done}/${VAE_STEPS.length}`])]),
    el("div", { class: "progress" }, [el("span", { style: { width: pct + "%" } })]),
    el("div", { class: "small muted", style: { marginTop: "6px" } }, [pct === 100 ? "Toutes les étapes sont remplies ! 🎉" : "Avance à ton rythme, étape par étape."]),
  ]));

  // Rétroplanning
  root.appendChild(retroplanningCard(root));

  // Trousse à outils
  root.appendChild(el("div", { class: "section-title" }, ["🧰 Mes outils VAE"]));
  const cov = coveredCompetences();
  root.appendChild(el("div", { class: "flex", style: { gap: "10px", marginBottom: "10px" } }, [
    el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => showCompetencesModal() }, [`🎯 Compétences (${cov.size}/11)`]),
    el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => showSituationsModal() }, [`🗂️ Situations (${Storage.getVaeSituations().length})`]),
  ]));
  root.appendChild(el("div", { class: "flex", style: { gap: "10px" } }, [
    el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => showGlossaireModal() }, ["📖 Glossaire VAE"]),
    el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => showJuryModal() }, ["🎭 Simuler le jury"]),
  ]));

  // Stepper
  const stepper = el("div", { class: "stepper card" });
  VAE_STEPS.forEach((s, idx) => {
    const d = isDone(s.id);
    stepper.appendChild(el("div", { class: "step-node" }, [
      el("div", { class: "step-rail" }, [
        el("div", { class: `step-dot ${d ? "done" : ""}` }, [d ? "✓" : String(idx + 1)]),
        idx < VAE_STEPS.length - 1 ? el("div", { class: "step-line" }) : null,
      ]),
      el("button", { class: "step-body", style: { background: "none", border: "0", textAlign: "left", color: "inherit", cursor: "pointer" }, onclick: () => showStep(root, s) }, [
        el("div", { class: "step-title" }, [`${s.icon} ${s.titre}`]),
        el("div", { class: "step-desc" }, [s.objectif]),
      ]),
    ]));
  });
  root.appendChild(stepper);

  // Checklist avant dépôt
  root.appendChild(el("div", { class: "section-title" }, ["🏁 Checklist avant dépôt du dossier"]));
  root.appendChild(el("div", { class: "card mb" }, [
    el("p", { class: "small muted", style: { marginBottom: "8px" } }, ["À vérifier avant de déposer ton dossier de validation."]),
    checklistBlock(VAE_DOSSIER_CHECKLIST, "vae-depot"),
  ]));

  // Export
  root.appendChild(el("div", { class: "card mb" }, [
    el("div", { class: "card-title" }, ["📤 Exporter mon dossier (brouillon)"]),
    el("p", { class: "small muted" }, ["Rassemble tes étapes et tes situations en un brouillon PDF, à retravailler avec ton accompagnateur."]),
    el("button", { class: "btn btn-secondary btn-block", onclick: () => exportVaePdf() }, ["📄 Générer le PDF de mon dossier"]),
  ]));

  // Ressources
  root.appendChild(el("div", { class: "section-title" }, ["Ressources officielles"]));
  const res = el("div", { class: "list" });
  VAE_RESSOURCES.forEach((r) => res.appendChild(el("a", { class: "row", href: r.url, target: "_blank", rel: "noopener" }, [
    el("span", { class: "row-ic" }, ["🔗"]), el("span", { class: "row-main" }, [el("div", { class: "row-title", style: { fontSize: "0.9rem" } }, [r.nom])]), el("span", { class: "row-chev" }, ["↗"]),
  ])));
  root.appendChild(res);

  root.appendChild(el("p", { class: "disclaimer" }, ["Aide indicative. Les modalités de la VAE évoluent : vérifie toujours sur france-vae.gouv.fr et avec ton accompagnateur / point relais conseil."]));
}

// ---------- Étape ----------
function showStep(root, s) {
  root.innerHTML = "";
  const idx = VAE_STEPS.indexOf(s);
  root.appendChild(el("div", { class: "panel-head" }, [
    el("button", { class: "btn btn-ghost btn-sm", style: { paddingLeft: "0", marginBottom: "6px" }, onclick: () => showOverview(root) }, ["← Toutes les étapes"]),
    el("h1", {}, [`${s.icon} ${s.titre}`]),
    el("div", { class: "sub" }, [s.objectif]),
  ]));

  root.appendChild(el("div", { class: "card fiche mb", html: s.cours }));
  if (s.exemple) root.appendChild(el("div", { class: "callout" }, [el("div", { class: "callout-t" }, ["Exemple"]), el("div", {}, [s.exemple])]));
  if (s.conseils?.length) root.appendChild(el("div", { class: "card mb" }, [el("div", { class: "card-title" }, ["✅ Conseils"]), el("ul", { class: "fiche" }, s.conseils.map((c) => el("li", {}, [c])))]));
  if (s.pieges?.length) root.appendChild(el("div", { class: "callout warn" }, [el("div", { class: "callout-t" }, ["Pièges à éviter"]), el("ul", { style: { margin: "6px 0 0", paddingLeft: "18px" } }, s.pieges.map((p) => el("li", {}, [p])))]));

  // Raccourcis contextuels
  if (s.id === "positionnement" || s.id === "relier") {
    root.appendChild(el("button", { class: "btn btn-secondary btn-block mb", onclick: () => showCompetencesModal() }, ["🎯 Ouvrir la grille des 11 compétences"]));
  }
  if (s.id === "situations" || s.id === "decrire") {
    root.appendChild(el("button", { class: "btn btn-secondary btn-block mb", onclick: () => showSituationsModal() }, ["🗂️ Ouvrir mes situations de travail"]));
  }
  if (s.id === "oral") {
    root.appendChild(el("div", { class: "section-title" }, ["Questions probables du jury"]));
    root.appendChild(el("div", { class: "card" }, [el("ul", { class: "fiche" }, VAE_JURY_QUESTIONS.map((q) => el("li", {}, [q])))]));
    root.appendChild(juryTools());
  }

  // Checklist d'étape
  if (s.checklist?.length) {
    root.appendChild(el("div", { class: "section-title" }, ["☑️ Ai-je bien fait cette étape ?"]));
    root.appendChild(el("div", { class: "card" }, [checklistBlock(s.checklist, s.id)]));
  }

  // Rédaction
  root.appendChild(el("div", { class: "section-title" }, ["✍️ Mes notes / ma rédaction"]));
  const stored = (Storage.getVae().steps || {})[s.id] || "";
  const wasDone = isDone(s.id);
  const ta = el("textarea", { placeholder: s.placeholder || "Écris ici…", style: { minHeight: "150px" } });
  ta.value = stored;
  const counter = el("div", { class: "small muted", style: { marginTop: "4px" } });
  const updateCounter = () => { const n = countWords(ta.value); counter.textContent = `${n} mot${n > 1 ? "s" : ""} · sauvegarde auto`; };
  let saveTimer = null;
  ta.addEventListener("input", () => {
    updateCounter();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      Storage.saveVaeStep(s.id, ta.value);
      if (!wasDone && isDone(s.id)) {
        Storage.addXp(XP.tfeStep);
        for (const a of checkAchievements()) toast(`Succès : ${a.icon} ${a.title}`, "success", 2600);
        toast("Étape enregistrée (+" + XP.tfeStep + " XP) ✓", "success", 1800);
      }
    }, 600);
  });
  root.appendChild(ta);
  updateCounter();
  root.appendChild(counter);

  // Aide IA ciblée
  const meta = VAE_STEP_META[s.id];
  const aideLabel = meta?.aide?.label || "Demander un retour au tuteur IA";
  const aiBtn = el("button", { class: "btn btn-secondary btn-block mt", onclick: async () => {
    if (!isAiEnabled()) return toast("Active le tuteur IA dans Réglages pour utiliser cette aide.", "info", 3000);
    aiBtn.setAttribute("disabled", ""); const lbl = aiBtn.textContent; aiBtn.textContent = "Analyse en cours…";
    try { const out = await ask(Prompts.vaeStep(meta?.aide?.type || "decrire", ta.value)); showAiResult(out); }
    catch (e) { toast(e.message, "error", 3500); }
    finally { aiBtn.removeAttribute("disabled"); aiBtn.textContent = lbl; }
  } }, ["🤖 " + aideLabel]);
  root.appendChild(aiBtn);

  // Navigation
  root.appendChild(el("div", { class: "flex", style: { gap: "10px", marginTop: "18px" } }, [
    idx > 0 ? el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => showStep(root, VAE_STEPS[idx - 1]) }, ["← Précédent"]) : null,
    idx < VAE_STEPS.length - 1 ? el("button", { class: "btn", style: { flex: "1" }, onclick: () => showStep(root, VAE_STEPS[idx + 1]) }, ["Suivant →"]) : null,
  ].filter(Boolean)));
}

// ---------- Rétroplanning ----------
function retroplanningCard(root) {
  const card = el("div", { class: "card mb" });
  const jury = Storage.getVaeJuryDate();
  card.appendChild(el("div", { class: "card-title" }, ["🗓️ Mon rétroplanning"]));
  card.appendChild(el("div", { class: "small muted", style: { marginBottom: "8px" } }, ["Indique ta date de passage devant le jury : l'app calcule une échéance indicative par étape."]));
  const input = el("input", { type: "date", value: jury });
  input.addEventListener("change", () => { Storage.setVaeJuryDate(input.value); showOverview(root); });
  card.appendChild(input);

  if (jury) {
    const dep = new Date(jury + "T00:00:00");
    const now = new Date(); now.setHours(0, 0, 0, 0);
    const j = Math.round((dep - now) / 86400000);
    card.appendChild(el("div", { class: "small", style: { margin: "8px 0 4px", fontWeight: "600" } }, [j >= 0 ? `⏳ ${j} jour${j > 1 ? "s" : ""} avant le jury` : `Jury passé depuis ${-j} jour(s)`]));
    const list = el("div", { class: "list", style: { marginTop: "6px" } });
    VAE_STEPS.forEach((s) => {
      const meta = VAE_STEP_META[s.id]; if (!meta) return;
      const d = new Date(dep.getTime() - meta.semAvantJury * 7 * 86400000);
      const dn = isDone(s.id);
      const late = !dn && d < now;
      list.appendChild(el("button", { class: "row", onclick: () => showStep(root, s) }, [
        el("span", { class: "row-ic" }, [dn ? "✅" : (late ? "⚠️" : "◻️")]),
        el("span", { class: "row-main" }, [
          el("div", { class: "row-title", style: { fontSize: "0.88rem" } }, [s.titre]),
          el("div", { class: "row-sub", style: { color: late ? "var(--bad, #c0392b)" : "" } }, ["à viser pour le " + d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "2-digit" })]),
        ]),
        el("span", { class: "row-chev" }, ["›"]),
      ]));
    });
    card.appendChild(list);
    card.appendChild(el("div", { class: "small muted", style: { marginTop: "6px" } }, ["Échéances indicatives — cale-toi sur le calendrier France VAE."]));
  }
  return card;
}

// ---------- Grille des compétences ----------
function coveredCompetences() {
  const set = new Set();
  Storage.getVaeSituations().forEach((s) => (s.comps || []).forEach((c) => set.add(Number(c))));
  return set;
}

function showCompetencesModal() {
  const covered = coveredCompetences();
  const wrap = el("div", {});
  wrap.appendChild(el("h3", {}, ["🎯 Les 11 compétences"]));
  wrap.appendChild(el("p", { class: "small muted" }, ["Auto-positionne-toi et note tes preuves. Objectif : chaque compétence couverte par au moins une situation."]));

  BLOCS.forEach((b) => {
    wrap.appendChild(el("div", { class: "section-title", style: { marginLeft: "0" } }, [`${b.icon} Bloc ${b.n}`]));
    COMPETENCES.filter((c) => c.bloc === b.n).forEach((c) => {
      const pos = Storage.getVaePositions()[c.n] || "";
      const card = el("div", { class: "card", style: { marginBottom: "8px" } });
      card.appendChild(el("div", { class: "flex-between" }, [
        el("strong", { class: "small" }, [`Compétence ${c.n}`]),
        covered.has(c.n) ? el("span", { class: "badge badge-good" }, ["couverte ✓"]) : el("span", { class: "badge" }, ["à couvrir"]),
      ]));
      card.appendChild(el("div", { class: "small", style: { margin: "4px 0" } }, [c.titre]));
      card.appendChild(el("div", { class: "callout", style: { margin: "6px 0" } }, [el("div", { class: "callout-t" }, ["Ce que le jury attend"]), el("div", { class: "small" }, [COMP_ATTENDUS[c.n] || ""])]));
      // Positionnement 3 états
      const seg = el("div", { class: "flex", style: { gap: "6px", marginBottom: "6px" } });
      ["maitrise", "consolider", "pas-encore"].forEach((lvl) => {
        const active = pos === lvl;
        seg.appendChild(el("button", { class: `btn btn-sm ${active ? "" : "btn-secondary"}`, style: { flex: "1", fontSize: "0.78rem" }, onclick: () => { Storage.setVaePosition(c.n, active ? "" : lvl); closeModal(); showCompetencesModal(); } }, [POS_LABELS[lvl]]));
      });
      card.appendChild(seg);
      const note = el("textarea", { placeholder: "Où / comment je le prouve (situation, geste concret)…", style: { minHeight: "60px" } });
      note.value = Storage.getVaeCompNote(c.n);
      let t = null; note.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => Storage.setVaeCompNote(c.n, note.value), 500); });
      card.appendChild(note);
      wrap.appendChild(card);
    });
  });
  wrap.appendChild(el("button", { class: "btn btn-block mt", onclick: () => closeModal() }, ["Fermer"]));
  openModal(wrap);
}

// ---------- Situations ----------
function situationText(s) {
  const parts = [];
  if (s.contexte) parts.push("Contexte : " + s.contexte);
  if (s.personne) parts.push("Personne accompagnée : " + s.personne);
  if (s.mission) parts.push("Ma mission : " + s.mission);
  if (s.actions) parts.push("Ce que j'ai fait : " + s.actions);
  if (s.difficultes) parts.push("Difficultés : " + s.difficultes);
  if (s.resultat) parts.push("Résultat : " + s.resultat);
  return parts.join("\n");
}

function showSituationsModal() {
  const wrap = el("div", {});
  const list = el("div", {});
  const render = () => {
    list.innerHTML = "";
    const sits = Storage.getVaeSituations();
    if (!sits.length) { list.appendChild(el("p", { class: "small muted" }, ["Aucune situation pour l'instant. Ajoute ta première ci-dessous."])); return; }
    sits.forEach((s) => {
      const comps = (s.comps || []).map(Number).sort((a, b) => a - b);
      list.appendChild(el("div", { class: "card", style: { marginBottom: "8px" } }, [
        el("div", { class: "flex-between" }, [el("strong", { class: "small" }, [s.titre || "(sans titre)"]), el("span", { class: "badge badge-accent" }, [`${comps.length} comp.`])]),
        comps.length ? el("div", { class: "small muted", style: { margin: "4px 0" } }, ["Compétences : " + comps.join(", ")]) : null,
        el("div", { class: "flex", style: { gap: "8px", marginTop: "6px" } }, [
          el("button", { class: "btn btn-ghost btn-sm", onclick: () => showSituationForm(s, render) }, ["✏️ Modifier"]),
          el("button", { class: "btn btn-ghost btn-sm", onclick: () => { Storage.removeVaeSituation(s.id); render(); } }, ["🗑️ Supprimer"]),
        ]),
      ].filter(Boolean)));
    });
  };
  wrap.appendChild(el("h3", {}, ["🗂️ Mes situations de travail"]));
  wrap.appendChild(el("p", { class: "small muted" }, ["Décris tes situations avec la méthode guidée, et coche les compétences qu'elles prouvent."]));
  wrap.appendChild(list);
  wrap.appendChild(el("button", { class: "btn btn-block mt", onclick: () => showSituationForm(null, render) }, ["+ Nouvelle situation"]));
  wrap.appendChild(el("button", { class: "btn btn-ghost btn-block mt", onclick: () => closeModal() }, ["Fermer"]));
  render();
  openModal(wrap);
}

function showSituationForm(existing, onDone) {
  closeModal();
  const wrap = el("div", {});
  wrap.appendChild(el("h3", {}, [existing ? "✏️ Modifier la situation" : "🗂️ Nouvelle situation"]));
  const fields = {};
  SITUATION_CHAMPS.forEach((f) => {
    wrap.appendChild(el("label", { class: "guided-label", style: { display: "block", fontWeight: "600", fontSize: "0.9rem", margin: "10px 0 4px" } }, [f.label]));
    const input = f.key === "titre"
      ? el("input", { type: "text", placeholder: f.placeholder })
      : el("textarea", { placeholder: f.placeholder, style: { minHeight: "60px" } });
    if (existing && existing[f.key]) input.value = existing[f.key];
    fields[f.key] = input;
    wrap.appendChild(input);
  });

  // Compétences prouvées
  wrap.appendChild(el("div", { class: "section-title", style: { marginLeft: "0" } }, ["Compétences prouvées par cette situation"]));
  const compsSel = new Set((existing?.comps || []).map(Number));
  const grid = el("div", {});
  COMPETENCES.forEach((c) => {
    const cb = el("input", { type: "checkbox" });
    if (compsSel.has(c.n)) cb.checked = true;
    cb.addEventListener("change", () => { if (cb.checked) compsSel.add(c.n); else compsSel.delete(c.n); });
    grid.appendChild(el("label", { class: "check-row" }, [cb, el("span", {}, [`C${c.n} — ${c.titre}`])]));
  });
  wrap.appendChild(el("div", { class: "card" }, [grid]));

  // IA : vérifier une compétence
  const aiBtn = el("button", { class: "btn btn-secondary btn-block mt", onclick: async () => {
    if (!isAiEnabled()) return toast("Active le tuteur IA dans Réglages.", "info", 3000);
    const txt = situationText(Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, v.value])));
    if (txt.trim().length < 30) return toast("Décris d'abord ta situation.", "info");
    aiBtn.setAttribute("disabled", ""); const lbl = aiBtn.textContent; aiBtn.textContent = "Analyse…";
    try { const out = await ask(Prompts.vaeStep("decrire", txt)); showAiResult(out); }
    catch (e) { toast(e.message, "error", 3500); }
    finally { aiBtn.removeAttribute("disabled"); aiBtn.textContent = lbl; }
  } }, ["🤖 Améliorer ma situation"]);
  wrap.appendChild(aiBtn);

  wrap.appendChild(el("div", { class: "flex", style: { gap: "10px", marginTop: "12px" } }, [
    el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => { closeModal(); showSituationsModal(); } }, ["Annuler"]),
    el("button", { class: "btn", style: { flex: "1" }, onclick: () => {
      const data = { comps: [...compsSel] };
      Object.entries(fields).forEach(([k, v]) => { data[k] = v.value; });
      if (!data.titre.trim() && !data.actions.trim()) { toast("Donne au moins un titre ou décris tes actions.", "info"); return; }
      if (existing) Storage.updateVaeSituation(existing.id, data); else Storage.addVaeSituation(data);
      toast("Situation enregistrée ✓", "success", 1600);
      closeModal(); showSituationsModal(); onDone && onDone();
    } }, ["Enregistrer"]),
  ]));
  openModal(wrap);
}

// ---------- Glossaire ----------
function showGlossaireModal() {
  const list = el("div", { class: "list" });
  VAE_GLOSSAIRE.forEach((g) => list.appendChild(el("div", { class: "card", style: { marginBottom: "6px" } }, [
    el("strong", { class: "small" }, [g.terme]), el("div", { class: "small muted", style: { marginTop: "2px" } }, [g.def]),
  ])));
  openModal(el("div", {}, [el("h3", {}, ["📖 Glossaire VAE"]), list, el("button", { class: "btn btn-block mt", onclick: () => closeModal() }, ["Fermer"])]));
}

// ---------- Simulateur de jury ----------
function showJuryModal() { openModal(juryTools()); }

function juryTools() {
  const box = el("div", {});
  box.appendChild(el("div", { class: "section-title", style: { marginLeft: "0" } }, ["🎭 Simulateur de jury (IA)"]));
  const juryBox = el("div", { class: "card" });
  const log = el("div", { class: "fiche", style: { whiteSpace: "pre-wrap", maxHeight: "260px", overflowY: "auto", marginBottom: "8px" } });
  let history = "";
  const answer = el("textarea", { placeholder: "Ta réponse au jury…", style: { minHeight: "70px" } });
  const nextTurn = async (btn) => {
    if (!isAiEnabled()) return toast("Active le tuteur IA dans Réglages pour le simulateur.", "info", 3000);
    const v = Storage.getVae();
    const ctx = (v.steps?.oral || v.steps?.decrire || "") + " " + Storage.getVaeSituations().map((s) => s.titre).join("; ");
    if (answer.value.trim()) history += `\nMoi : ${answer.value.trim()}`;
    btn.setAttribute("disabled", ""); const lbl = btn.textContent; btn.textContent = "…";
    try {
      const out = await ask(Prompts.vaeJury(ctx.slice(0, 600), history), { maxTokens: 400 });
      history += `\nJury : ${out}`; log.textContent = history.trim(); answer.value = "";
    } catch (e) { toast(e.message, "error", 3500); }
    finally { btn.removeAttribute("disabled"); btn.textContent = lbl; log.scrollTop = log.scrollHeight; }
  };
  juryBox.appendChild(el("p", { class: "small muted" }, ["Le jury pose une question à la fois. Réponds, puis demande la suivante. (Nécessite le tuteur IA activé.)"]));
  juryBox.appendChild(log);
  juryBox.appendChild(answer);
  juryBox.appendChild(el("button", { class: "btn btn-block", onclick: (e) => nextTurn(e.target) }, ["Commencer la simulation"]));
  juryBox.appendChild(el("button", { class: "btn btn-secondary btn-block mt", onclick: (e) => nextTurn(e.target) }, ["Répondre → question suivante"]));
  box.appendChild(juryBox);
  return box;
}

// ---------- Divers ----------
function showAiResult(text) {
  openModal(el("div", {}, [el("h3", {}, ["🤖 Retour du tuteur"]), el("div", { class: "fiche", style: { whiteSpace: "pre-wrap" } }, [text]), el("button", { class: "btn btn-block mt", onclick: () => closeModal() }, ["Fermer"])]));
}

function checklistBlock(items, prefix) {
  const checks = Storage.getVaeChecks();
  const wrap = el("div", {});
  items.forEach((label, i) => {
    const key = `${prefix}:${i}`;
    const cb = el("input", { type: "checkbox" });
    if (checks[key]) cb.checked = true;
    cb.addEventListener("change", () => Storage.toggleVaeCheck(key, cb.checked));
    wrap.appendChild(el("label", { class: "check-row" }, [cb, el("span", {}, [label])]));
  });
  return wrap;
}

function exportVaePdf() {
  const v = Storage.getVae();
  const steps = v.steps || {};
  const sits = Storage.getVaeSituations();
  const filledSteps = VAE_STEPS.filter((s) => (steps[s.id] || "").trim().length);
  if (!filledSteps.length && !sits.length) { toast("Rédige au moins une étape ou une situation avant d'exporter.", "info", 3000); return; }
  const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  const covered = coveredCompetences();
  const covLine = COMPETENCES.map((c) => `C${c.n}${covered.has(c.n) ? " ✓" : " —"}`).join(" · ");
  const stepsHtml = filledSteps.map((s) => `<h2>${esc(s.icon + " " + s.titre)}</h2><div class="txt">${esc(steps[s.id]).replace(/\n/g, "<br>")}</div>`).join("");
  const sitsHtml = sits.map((s) => `<h3>${esc(s.titre || "Situation")}</h3><p class="cmp">Compétences visées : ${(s.comps || []).map(Number).sort((a, b) => a - b).join(", ") || "—"}</p><div class="txt">${esc(situationText(s)).replace(/\n/g, "<br>")}</div>`).join("");
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Mon dossier VAE — brouillon</title>
    <style>@page{size:A4;margin:2.4cm 2.2cm}body{font-family:Georgia,serif;font-size:12pt;line-height:1.55;color:#111;max-width:800px;margin:0 auto}
    h1{font-size:20pt;text-align:center}.meta{text-align:center;color:#555;margin-bottom:1.5em}
    h2{font-size:14pt;border-bottom:1px solid #999;padding-bottom:3px;margin-top:1.6em}h3{font-size:12.5pt;margin-top:1.2em}
    .cmp{color:#555;font-style:italic;font-size:10.5pt;margin:2px 0}.txt{margin-top:.3em}
    .cov{background:#f3f3f3;border-radius:6px;padding:10px 12px;font-size:10pt;margin:1em 0}
    .warn{background:#fff3cd;border:1px solid #e0c46c;padding:12px 16px;border-radius:6px;font-size:10pt;margin-bottom:1.5em}</style>
    </head><body>
    <h1>Mon dossier VAE — brouillon</h1>
    <p class="meta">Diplôme d'État d'Aide-Soignant·e · export depuis l'app</p>
    <div class="warn">Brouillon de travail exporté depuis l'app, à retravailler et à mettre au format France VAE avec ton accompagnateur. Vérifie l'anonymat avant tout partage.</div>
    <div class="cov"><strong>Couverture des compétences :</strong><br>${covLine}</div>
    ${stepsHtml}
    ${sits.length ? "<h2>🗂️ Mes situations de travail</h2>" + sitsHtml : ""}
    </body></html>`;
  const w = window.open("", "_blank");
  if (!w) { toast("Autorise les pop-ups pour exporter le PDF.", "info", 3500); return; }
  w.document.write(html); w.document.close();
  w.onload = () => { w.focus(); w.print(); };
  toast("Choisis « Enregistrer au format PDF » dans la fenêtre d'impression.", "info", 4000);
}
