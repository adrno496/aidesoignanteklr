// Panneau S'entraîner : QCM, flashcards (SRS), mode examen, situations professionnelles.
import { el, toast } from "./app.js";
import { Storage } from "./storage.js";
import { newCard, review, previewIntervals } from "./srs.js";
import { XP, checkAchievements } from "./gamification.js";
import { allQcm, qcmForBloc, qcmForMod, allFlashcards, allCas, pickQcm } from "./content/index.js";
import { BLOCS, MODULES, modulesByBloc, modById } from "./content/referentiel.js";
import { confettiBurst } from "./confetti.js";

function header(root, title, sub, onBack) {
  root.appendChild(el("div", { class: "panel-head" }, [
    onBack ? el("button", { class: "btn btn-ghost btn-sm", style: { paddingLeft: "0", marginBottom: "6px" }, onclick: onBack }, ["← Retour"]) : null,
    el("h1", {}, [title]),
    sub ? el("div", { class: "sub" }, [sub]) : null,
  ]));
}

function award(xp) {
  Storage.touchActivity();
  const r = Storage.addXp(xp);
  if (r.leveledUp) { confettiBurst(); toast(`Niveau atteint : ${r.level.label} ${r.level.icon}`, "accent", 3200); }
  for (const a of checkAchievements()) toast(`Succès débloqué : ${a.icon} ${a.title}`, "success", 3000);
}

export function renderEntrainement(root, opts = {}) {
  switch (opts.mode) {
    case "review": return startFlashcards(root, opts.flashPool);
    case "qcmRandom": return startQcm(root, pickQcm(allQcm(), 20), { title: "QCM express" });
    case "qcm": return startQcm(root, opts.pool || pickQcm(allQcm(), 20), { title: opts.title || "QCM" });
    case "situations": return showCasList(root);
    case "errors": return startErrors(root);
    default: return showHub(root);
  }
}

function startErrors(root) {
  const byId = new Map(allQcm().map((q) => [q.id, q]));
  const pool = Storage.wrongIds().map((id) => byId.get(id)).filter(Boolean);
  if (!pool.length) {
    header(root, "Mes erreurs", null, () => { root.innerHTML = ""; showHub(root); });
    root.appendChild(el("div", { class: "empty" }, [el("div", { class: "empty-ic" }, ["🎉"]), el("p", {}, ["Aucune erreur à revoir."]), el("p", { class: "small muted" }, ["Les QCM ratés s'ajoutent ici automatiquement."])]));
    return;
  }
  startQcm(root, pickQcm(pool, Math.min(30, pool.length)), { title: "Mes erreurs" });
}

function showHub(root) {
  header(root, "S'entraîner", "Choisis ton mode de révision.");
  const due = Storage.dueCardIds().length;
  const wrong = Storage.wrongIds().length;
  root.appendChild(el("div", { class: "list" }, [
    modeCard("🔁", "Flashcards intelligentes", `Répétition espacée${due ? ` · ${due} à revoir` : ""}`, () => startFlashcards(root)),
    modeCard("🎯", "QCM par thème", "Choisis un bloc ou un module", () => showQcmPicker(root)),
    wrong ? modeCard("🩹", "Réviser mes erreurs", `${wrong} question${wrong > 1 ? "s" : ""} à revoir`, () => startErrors(root)) : null,
    modeCard("⏱️", "Examen blanc", "20 QCM chronométrés, correction à la fin", () => startExam(root)),
    modeCard("🩺", "Situations professionnelles", "Mises en situation à analyser", () => showCasList(root)),
  ].filter(Boolean)));
}
function modeCard(icon, title, sub, onclick) {
  return el("button", { class: "row", onclick }, [
    el("span", { class: "row-ic", style: { fontSize: "1.5rem" } }, [icon]),
    el("span", { class: "row-main" }, [el("div", { class: "row-title" }, [title]), el("div", { class: "row-sub" }, [sub])]),
    el("span", { class: "row-chev" }, ["›"]),
  ]);
}

// Raccourcis clavier pendant un quiz : 1-9 / A-Z pour répondre, Entrée/Espace pour continuer.
// Un seul handler actif à la fois (retire le précédent) ; s'auto-retire quand la zone quitte le DOM.
let _quizKeyHandler = null;
function installQuizKeys(area) {
  if (_quizKeyHandler) { document.removeEventListener("keydown", _quizKeyHandler); _quizKeyHandler = null; }
  const onKey = (e) => {
    if (!document.body.contains(area)) { document.removeEventListener("keydown", onKey); if (_quizKeyHandler === onKey) _quizKeyHandler = null; return; }
    if (document.querySelector(".modal-overlay")) return;
    const explain = area.querySelector(".explain");
    if (explain) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); const nb = explain.querySelector("button"); if (nb) nb.click(); }
      return;
    }
    const opts = area.querySelectorAll(".opt");
    if (!opts.length) return;
    let idx = -1;
    if (/^[1-9]$/.test(e.key)) idx = +e.key - 1;
    else if (/^[a-z]$/i.test(e.key)) idx = e.key.toLowerCase().charCodeAt(0) - 97;
    if (idx >= 0 && idx < opts.length && !opts[idx].hasAttribute("disabled")) { e.preventDefault(); opts[idx].click(); }
  };
  _quizKeyHandler = onKey;
  document.addEventListener("keydown", onKey);
}

function showQcmPicker(root) {
  root.innerHTML = "";
  header(root, "QCM par thème", "Sélectionne ce que tu veux travailler.", () => { root.innerHTML = ""; showHub(root); });

  root.appendChild(el("div", { class: "section-title" }, ["Par bloc"]));
  const blocWrap = el("div", { class: "chips" });
  BLOCS.forEach((b) => {
    const n = qcmForBloc(b.n).length;
    blocWrap.appendChild(el("button", { class: "chip", onclick: () => {
      const pool = qcmForBloc(b.n);
      if (!pool.length) return toast("Pas encore de QCM pour ce bloc.", "info");
      startQcm(root, pickQcm(pool, Math.min(20, pool.length)), { title: "Bloc " + b.n });
    } }, [`Bloc ${b.n} (${n})`]));
  });
  root.appendChild(blocWrap);

  root.appendChild(el("div", { class: "section-title" }, ["Par module"]));
  MODULES.forEach((m) => {
    const n = qcmForMod(m.id).length;
    if (!n) return;
    root.appendChild(el("button", { class: "row", onclick: () => startQcm(root, pickQcm(qcmForMod(m.id), Math.min(20, n)), { title: "Module " + m.id }) }, [
      el("span", { class: "ue-tag ue-4" }, ["M" + m.id]),
      el("span", { class: "row-main" }, [el("div", { class: "row-title", style: { fontSize: "0.9rem" } }, [m.titre]), el("div", { class: "row-sub" }, [`${n} QCM`])]),
      el("span", { class: "row-chev" }, ["›"]),
    ]));
  });
}

function startQcm(root, pool, { title = "QCM" } = {}) {
  root.innerHTML = "";
  if (!pool || !pool.length) { showHub(root); return toast("Aucune question disponible.", "info"); }
  let i = 0, score = 0;
  const area = el("div", {});
  header(root, title, null, () => { root.innerHTML = ""; showHub(root); });
  root.appendChild(area);
  installQuizKeys(area);

  function renderQ() {
    area.innerHTML = "";
    const q = pool[i];
    area.appendChild(el("div", { class: "quiz-progress" }, [
      el("div", { class: "progress" }, [el("span", { style: { width: ((i / pool.length) * 100) + "%" } })]),
      el("span", { class: "small muted tabnum" }, [`${i + 1}/${pool.length}`]),
    ]));
    area.appendChild(el("div", { class: "small muted mb" }, ["Module " + q.mod]));
    area.appendChild(el("div", { class: "quiz-q" }, [q.q]));
    const opts = el("div", {});
    q.options.forEach((txt, idx) => {
      opts.appendChild(el("button", { class: "opt", onclick: () => answer(idx) }, [
        el("span", { class: "opt-key" }, [String.fromCharCode(65 + idx)]),
        el("span", {}, [txt]),
      ]));
    });
    area.appendChild(opts);

    function answer(chosen) {
      const correct = chosen === q.correct;
      if (correct) score++;
      Storage.recordQcm(q.mod, correct);
      if (correct) Storage.clearWrong(q.id); else Storage.markWrong(q.id);
      award(correct ? XP.qcmCorrect : XP.qcmWrong);
      [...opts.children].forEach((b, idx) => {
        b.setAttribute("disabled", "");
        if (idx === q.correct) b.classList.add("correct");
        else if (idx === chosen) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      area.appendChild(el("div", { class: "explain", "aria-live": "polite" }, [
        el("div", { class: "ex-verdict", style: { color: correct ? "var(--good)" : "var(--bad)" } }, [correct ? "✅ Bonne réponse" : "❌ Mauvaise réponse"]),
        el("div", {}, [q.explication || ""]),
        q.ref ? el("div", { class: "ex-ref" }, ["Réf. : " + q.ref]) : null,
        el("button", { class: "btn btn-block mt", onclick: () => { i++; i < pool.length ? renderQ() : finish(); } }, [i + 1 < pool.length ? "Question suivante →" : "Voir le résultat"]),
      ]));
      area.querySelector(".explain").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
  function finish() {
    const pct = Math.round((score / pool.length) * 100);
    Storage.logSession({ type: "qcm", count: pool.length, correct: score });
    if (pct >= 80) confettiBurst();
    area.innerHTML = "";
    area.appendChild(resultCard("QCM terminé", score, pool.length, () => startQcm(root, pool, { title }), () => { root.innerHTML = ""; showHub(root); }));
  }
  renderQ();
}

function resultCard(title, score, total, onRetry, onHome) {
  const pct = Math.round((score / total) * 100);
  return el("div", { class: "card center" }, [
    el("div", { style: { fontSize: "3rem" } }, [pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪"]),
    el("h2", {}, [title]),
    el("div", { style: { fontSize: "2.4rem", fontWeight: "800", color: "var(--accent-strong)", margin: "8px 0" } }, [`${score}/${total}`]),
    el("div", { class: "muted" }, [`${pct}% de réussite`]),
    el("div", { class: "flex", style: { gap: "10px", marginTop: "18px" } }, [
      el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: onHome }, ["Accueil"]),
      el("button", { class: "btn", style: { flex: "1" }, onclick: onRetry }, ["Recommencer"]),
    ]),
  ]);
}

// ---------------- Flashcards (SRS) ----------------
function buildReviewQueue() {
  const srs = Storage.getSrs();
  const all = allFlashcards();
  const byId = new Map(all.map((c) => [c.id, c]));
  const now = Date.now();
  const due = Object.keys(srs).filter((id) => (srs[id].due || 0) <= now && byId.has(id)).map((id) => byId.get(id));
  const goal = Storage.getSettings().dailyGoal || 20;
  const fresh = all.filter((c) => !srs[c.id]).slice(0, goal);
  return [...due, ...fresh];
}

function startFlashcards(root, pool) {
  root.innerHTML = "";
  const queue = pool && pool.length ? [...pool] : buildReviewQueue();
  header(root, "Flashcards", null, () => { root.innerHTML = ""; showHub(root); });
  if (!queue.length) {
    root.appendChild(el("div", { class: "empty" }, [el("div", { class: "empty-ic" }, ["🎉"]), el("p", {}, ["Aucune carte à réviser pour le moment."])]));
    return;
  }
  let i = 0, reviewed = 0;
  const area = el("div", {});
  root.appendChild(area);

  function renderCard() {
    area.innerHTML = "";
    const c = queue[i];
    const state = Storage.getCard(c.id) || newCard();
    const prev = previewIntervals(state);
    area.appendChild(el("div", { class: "quiz-progress" }, [
      el("div", { class: "progress" }, [el("span", { style: { width: ((i / queue.length) * 100) + "%" } })]),
      el("span", { class: "small muted tabnum" }, [`${i + 1}/${queue.length}`]),
    ]));
    const card = el("div", { class: "flashcard" }, [
      el("div", { class: "flashcard-inner" }, [
        el("div", { class: "flash-face" }, [el("div", { class: "flash-label" }, ["Module " + c.mod + " · question"]), el("div", { class: "flash-content q" }, [c.recto])]),
        el("div", { class: "flash-face flash-back" }, [el("div", { class: "flash-label" }, ["réponse"]), el("div", { class: "flash-content" }, [c.verso])]),
      ]),
    ]);
    area.appendChild(card);

    const flipBtn = el("button", { class: "btn btn-block mt", onclick: () => { card.classList.add("flipped"); flipBtn.remove(); grades.style.display = "grid"; } }, ["Afficher la réponse"]);
    const grades = el("div", { class: "srs-grades mt", style: { display: "none" } }, [
      gradeBtn("g-again", "À revoir", prev.again, () => grade("again")),
      gradeBtn("g-hard", "Difficile", prev.hard, () => grade("hard")),
      gradeBtn("g-good", "Correct", prev.good, () => grade("good")),
      gradeBtn("g-easy", "Facile", prev.easy, () => grade("easy")),
    ]);
    area.appendChild(flipBtn);
    area.appendChild(grades);
    card.addEventListener("click", () => { if (!card.classList.contains("flipped")) { card.classList.add("flipped"); flipBtn.remove(); grades.style.display = "grid"; } });

    function grade(g) {
      Storage.saveCard(c.id, review(state, g));
      Storage.bump("cardsReviewed");
      reviewed++;
      award(XP.cardReview);
      i++;
      i < queue.length ? renderCard() : finish();
    }
  }
  function gradeBtn(cls, label, interval, onclick) {
    return el("button", { class: `btn ${cls}`, onclick }, [label, el("small", {}, [interval])]);
  }
  function finish() {
    Storage.logSession({ type: "flashcards", count: reviewed });
    area.innerHTML = "";
    area.appendChild(el("div", { class: "card center" }, [
      el("div", { style: { fontSize: "3rem" } }, ["✅"]),
      el("h2", {}, ["Session terminée"]),
      el("p", { class: "muted" }, [`${reviewed} carte${reviewed > 1 ? "s" : ""} révisée${reviewed > 1 ? "s" : ""}.`]),
      el("button", { class: "btn btn-block mt", onclick: () => { root.innerHTML = ""; showHub(root); } }, ["Terminer"]),
    ]));
  }
  renderCard();
}

// ---------------- Examen blanc ----------------
function startExam(root) {
  root.innerHTML = "";
  const pool = pickQcm(allQcm(), Math.min(20, allQcm().length));
  if (pool.length < 5) { showHub(root); return toast("Pas encore assez de QCM pour un examen.", "info"); }
  const perQ = Storage.getSettings().examTimerSec || 60;
  let i = 0; const answers = [];
  header(root, "Examen blanc", `${pool.length} questions · ${perQ}s/question`, () => { root.innerHTML = ""; showHub(root); });
  const area = el("div", {});
  root.appendChild(area);
  installQuizKeys(area);
  let timer = null, remaining = perQ;

  function renderQ() {
    clearInterval(timer); remaining = perQ;
    area.innerHTML = "";
    const q = pool[i];
    const timeEl = el("span", { class: "badge badge-amber tabnum" }, [`⏱ ${remaining}s`]);
    area.appendChild(el("div", { class: "flex-between mb" }, [el("span", { class: "small muted tabnum" }, [`${i + 1}/${pool.length}`]), timeEl]));
    area.appendChild(el("div", { class: "progress mb" }, [el("span", { style: { width: ((i / pool.length) * 100) + "%" } })]));
    area.appendChild(el("div", { class: "quiz-q" }, [q.q]));
    const opts = el("div", {});
    q.options.forEach((txt, idx) => opts.appendChild(el("button", { class: "opt", onclick: () => choose(idx) }, [el("span", { class: "opt-key" }, [String.fromCharCode(65 + idx)]), el("span", {}, [txt])])));
    area.appendChild(opts);
    timer = setInterval(() => { remaining--; timeEl.textContent = `⏱ ${remaining}s`; if (remaining <= 0) choose(-1); }, 1000);
    function choose(idx) { clearInterval(timer); answers[i] = idx; i++; i < pool.length ? renderQ() : finish(); }
  }
  function finish() {
    clearInterval(timer);
    let score = 0;
    pool.forEach((q, idx) => { const ok = answers[idx] === q.correct; if (ok) score++; Storage.recordQcm(q.mod, ok); if (ok) Storage.clearWrong(q.id); else Storage.markWrong(q.id); });
    Storage.bump("examsTaken");
    award(XP.examFinished);
    Storage.logSession({ type: "exam", count: pool.length, correct: score });
    for (const a of checkAchievements()) toast(`Succès : ${a.icon} ${a.title}`, "success", 2600);
    if (score / pool.length >= 0.8) confettiBurst();
    area.innerHTML = "";
    area.appendChild(resultCard("Examen terminé", score, pool.length, () => startExam(root), () => { root.innerHTML = ""; showHub(root); }));
    const corr = el("div", { class: "mt-lg" }, [el("div", { class: "section-title" }, ["Correction"])]);
    pool.forEach((q, idx) => {
      const ok = answers[idx] === q.correct;
      corr.appendChild(el("div", { class: "card", style: { marginBottom: "10px" } }, [
        el("div", { class: "flex-between" }, [el("strong", { class: "small" }, [`Q${idx + 1} · Module ${q.mod}`]), el("span", { class: `badge ${ok ? "badge-good" : "badge-bad"}` }, [ok ? "Juste" : "Faux"])]),
        el("div", { class: "small", style: { margin: "6px 0" } }, [q.q]),
        el("div", { class: "small", style: { color: "var(--good)" } }, ["✓ " + q.options[q.correct]]),
        q.explication ? el("div", { class: "small muted", style: { marginTop: "4px" } }, [q.explication]) : null,
      ]));
    });
    area.appendChild(corr);
  }
  renderQ();
}

// ---------------- Situations professionnelles ----------------
function showCasList(root) {
  root.innerHTML = "";
  header(root, "Situations professionnelles", "Analyse des situations comme en stage.", () => { root.innerHTML = ""; showHub(root); });
  const cas = allCas();
  if (!cas.length) { root.appendChild(el("div", { class: "empty" }, [el("div", { class: "empty-ic" }, ["🩺"]), el("p", {}, ["Les situations arrivent bientôt."])])); return; }
  const list = el("div", { class: "list" });
  cas.forEach((c) => list.appendChild(el("button", { class: "row", onclick: () => playCas(root, c) }, [
    el("span", { class: "row-ic", style: { fontSize: "1.4rem" } }, ["🩺"]),
    el("span", { class: "row-main" }, [el("div", { class: "row-title" }, [c.titre]), el("div", { class: "row-sub" }, [(c.niveau || "") + (c.mod ? " · Module " + c.mod : "")])]),
    el("span", { class: "row-chev" }, ["›"]),
  ])));
  root.appendChild(list);
}

function playCas(root, c) {
  root.innerHTML = "";
  header(root, c.titre, c.contexte || null, () => { root.innerHTML = ""; showCasList(root); });
  root.appendChild(el("div", { class: "card mb" }, [el("div", { class: "eyebrow" }, ["Situation"]), el("p", { style: { marginTop: "6px" } }, [c.situation])]));
  const area = el("div", {});
  root.appendChild(area);
  let i = 0;

  function renderStep() {
    area.innerHTML = "";
    if (i >= (c.questions || []).length) return finish();
    const q = c.questions[i];
    area.appendChild(el("div", { class: "small muted mb" }, [`Question ${i + 1}/${c.questions.length}`]));
    area.appendChild(el("div", { class: "quiz-q" }, [q.q]));
    if (q.type === "qcm") {
      const opts = el("div", {});
      q.options.forEach((txt, idx) => opts.appendChild(el("button", { class: "opt", onclick: () => reveal(idx) }, [el("span", { class: "opt-key" }, [String.fromCharCode(65 + idx)]), el("span", {}, [txt])])));
      area.appendChild(opts);
      function reveal(chosen) {
        [...opts.children].forEach((b, idx) => { b.setAttribute("disabled", ""); if (idx === q.correct) b.classList.add("correct"); else if (idx === chosen) b.classList.add("wrong"); else b.classList.add("dim"); });
        area.appendChild(corrigeBox(q.corrige));
      }
    } else {
      const btn = el("button", { class: "btn btn-secondary btn-block", onclick: () => { btn.remove(); area.appendChild(corrigeBox(q.corrige)); } }, ["Afficher le corrigé"]);
      area.appendChild(btn);
    }
  }
  function corrigeBox(text) {
    return el("div", { class: "explain" }, [
      el("div", { class: "ex-verdict", style: { color: "var(--accent-strong)" } }, ["💡 Corrigé"]),
      el("div", {}, [text || ""]),
      el("button", { class: "btn btn-block mt", onclick: () => { i++; renderStep(); } }, [i + 1 < c.questions.length ? "Question suivante →" : "Terminer"]),
    ]);
  }
  function finish() {
    Storage.bump("casCompleted");
    award(XP.casCompleted);
    Storage.logSession({ type: "cas", count: 1 });
    for (const a of checkAchievements()) toast(`Succès : ${a.icon} ${a.title}`, "success", 2600);
    confettiBurst();
    area.innerHTML = "";
    if (c.demarche) area.appendChild(el("div", { class: "card mb" }, [el("div", { class: "eyebrow" }, ["Conduite à tenir"]), el("p", { style: { marginTop: "6px" } }, [c.demarche])]));
    area.appendChild(el("div", { class: "card center" }, [
      el("div", { style: { fontSize: "2.6rem" } }, ["🩺"]), el("h2", {}, ["Situation terminée"]),
      el("button", { class: "btn btn-block mt", onclick: () => { root.innerHTML = ""; showCasList(root); } }, ["Autres situations"]),
    ]));
  }
  renderStep();
}
