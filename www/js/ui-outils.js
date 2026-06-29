// Panneau Boîte à outils clinique : scores, normes, 14 besoins, démarche, transmissions DAR, précautions, glossaire.
import { el, toast } from "./app.js";
import { Storage } from "./storage.js";
import { BESOINS, CONSTANTES, SCORES, PRECAUTIONS, DEMARCHE_STEPS, macrocibleTemplate, MOBILISATION, BIONETTOYAGE } from "./content/outils.js";
import { GLOSSAIRE } from "./content/glossaire.js";

export function renderOutils(root, opts = {}) {
  if (opts.tool) return openTool(root, opts.tool);
  showHub(root);
}

const TOOLS = [
  { id: "constantes", icon: "❤️", titre: "Constantes normales", sub: "Par âge : TA, FC, FR, T°, SpO₂" },
  { id: "mobilisation", icon: "💪", titre: "Manutention & mobilisation", sub: "Gestes, postures, aides techniques" },
  { id: "precautions", icon: "🧼", titre: "Hygiène & précautions", sub: "Standard + complémentaires" },
  { id: "bionettoyage", icon: "🧽", titre: "Bionettoyage", sub: "Entretien des locaux & matériels" },
  { id: "henderson", icon: "🧩", titre: "14 besoins de Henderson", sub: "Grille de recueil" },
  { id: "scores", icon: "📊", titre: "Scores cliniques", sub: "Norton (escarre), Glasgow…" },
  { id: "demarche", icon: "🔄", titre: "Démarche de soins", sub: "Les 5 étapes guidées" },
  { id: "dar", icon: "📝", titre: "Transmissions ciblées (DAR)", sub: "Données – Actions – Résultats" },
  { id: "glossaire", icon: "📖", titre: "Lexique progressif", sub: "Termes débloqués au fil des révisions" },
];

function showHub(root) {
  root.appendChild(el("div", { class: "panel-head" }, [el("h1", {}, ["🧰 Boîte à outils"]), el("div", { class: "sub" }, ["Tes mémos pour le stage et l'examen."])]));
  const list = el("div", { class: "list" });
  TOOLS.forEach((t) => list.appendChild(el("button", { class: "row", onclick: () => openTool(root, t.id) }, [
    el("span", { class: "row-ic", style: { fontSize: "1.5rem" } }, [t.icon]),
    el("span", { class: "row-main" }, [el("div", { class: "row-title" }, [t.titre]), el("div", { class: "row-sub" }, [t.sub])]),
    el("span", { class: "row-chev" }, ["›"]),
  ])));
  root.appendChild(list);
}

function head(root, title, onBack) {
  root.appendChild(el("div", { class: "panel-head" }, [
    el("button", { class: "btn btn-ghost btn-sm", style: { paddingLeft: "0", marginBottom: "6px" }, onclick: onBack }, ["← Outils"]),
    el("h1", {}, [title]),
  ]));
}

function openTool(root, id) {
  root.innerHTML = "";
  const back = () => { root.innerHTML = ""; showHub(root); };
  if (id === "scores") return toolScores(root, back);
  if (id === "constantes") return toolConstantes(root, back);
  if (id === "henderson") return toolHenderson(root, back);
  if (id === "demarche") return toolDemarche(root, back);
  if (id === "dar") return toolDar(root, back);
  if (id === "precautions") return toolPrecautions(root, back);
  if (id === "mobilisation") return toolMobilisation(root, back);
  if (id === "bionettoyage") return toolBionettoyage(root, back);
  if (id === "glossaire") return toolGlossaire(root, back);
  back();
}

function toolMobilisation(root, back) {
  head(root, "💪 Manutention & mobilisation", back);
  root.appendChild(el("div", { class: "card mb" }, [el("div", { class: "card-title" }, ["Principes de prévention"]), el("ol", { class: "fiche steps", style: { marginTop: "8px" } }, MOBILISATION.principes.map((p) => el("li", {}, [p])))]));
  root.appendChild(el("div", { class: "card mb" }, [el("div", { class: "card-title" }, ["Aides techniques"]), el("div", { class: "chips", style: { marginTop: "8px" } }, MOBILISATION.aides.map((a) => el("span", { class: "chip" }, [a])))]));
  root.appendChild(el("div", { class: "callout danger" }, [el("div", { class: "callout-t" }, ["Vigilance"]), el("div", { class: "small" }, [MOBILISATION.alerte])]));
}

function toolBionettoyage(root, back) {
  head(root, "🧽 Bionettoyage", back);
  root.appendChild(el("div", { class: "callout mb" }, [el("div", { class: "callout-t" }, ["Principe de base"]), el("div", { class: "small" }, [BIONETTOYAGE.principe])]));
  root.appendChild(el("div", { class: "card mb" }, [el("div", { class: "card-title" }, ["Étapes"]), el("ol", { class: "fiche steps", style: { marginTop: "8px" } }, BIONETTOYAGE.etapes.map((e) => el("li", {}, [e])))]));
  root.appendChild(el("div", { class: "card" }, [el("div", { class: "card-title" }, ["Règles d'or"]), el("ul", { class: "fiche", style: { marginTop: "8px" } }, BIONETTOYAGE.regles.map((r) => el("li", {}, [r])))]));
}

function toolScores(root, back) {
  head(root, "📊 Scores cliniques", back);
  const sel = el("div", { class: "chips mb" });
  const area = el("div", {});
  SCORES.forEach((sc, i) => sel.appendChild(el("button", { class: `chip ${i === 0 ? "active" : ""}`, onclick: (e) => { [...sel.children].forEach((c) => c.classList.remove("active")); e.currentTarget.classList.add("active"); render(sc); } }, [sc.nom.split(" (")[0]])));
  root.appendChild(sel); root.appendChild(area);

  function render(sc) {
    area.innerHTML = "";
    area.appendChild(el("div", { class: "card mb" }, [el("div", { class: "card-title" }, [sc.icon + " " + sc.nom]), el("div", { class: "card-sub" }, [sc.desc])]));
    const choices = sc.items.map(() => null);
    const result = el("div", { class: "card center mt", style: { display: "none" } });
    sc.items.forEach((item, ii) => {
      const wrap = el("div", { class: "card", style: { marginBottom: "10px" } }, [el("div", { class: "small", style: { fontWeight: "700", marginBottom: "8px" } }, [item.label])]);
      const opts = el("div", { class: "chips" });
      item.options.forEach((o) => opts.appendChild(el("button", { class: "chip", onclick: (e) => { [...opts.children].forEach((c) => c.classList.remove("active")); e.currentTarget.classList.add("active"); choices[ii] = o.p; update(); } }, [`${o.t} (${o.p})`])));
      wrap.appendChild(opts); area.appendChild(wrap);
    });
    area.appendChild(result);
    function update() {
      if (choices.some((c) => c == null)) { result.style.display = "none"; return; }
      const total = choices.reduce((a, b) => a + b, 0);
      const interp = sc.interpret(total);
      result.style.display = "block";
      result.innerHTML = "";
      result.appendChild(el("div", { style: { fontSize: "2.2rem", fontWeight: "800", color: "var(--accent-strong)" } }, [String(total)]));
      result.appendChild(el("div", { class: `badge badge-${interp.kind}`, style: { marginTop: "6px" } }, [interp.label]));
    }
  }
  render(SCORES[0]);
}

function toolConstantes(root, back) {
  head(root, "❤️ Constantes normales", back);
  const t = el("table", { class: "tbl" }, [el("tr", {}, [el("th", {}, ["Âge"]), el("th", {}, ["FC"]), el("th", {}, ["FR"]), el("th", {}, ["TA"]), el("th", {}, ["T°"])])]);
  CONSTANTES.forEach((c) => t.appendChild(el("tr", {}, [el("td", {}, [c.groupe]), el("td", {}, [c.fc]), el("td", {}, [c.fr]), el("td", {}, [c.ta]), el("td", {}, [c.t])])));
  root.appendChild(el("div", { class: "card" }, [t, el("div", { class: "small muted", style: { marginTop: "8px" } }, ["FC en bpm · FR en /min · TA en mmHg · T° en °C. Repères indicatifs."])]));
}

function toolHenderson(root, back) {
  head(root, "🧩 Les 14 besoins", back);
  root.appendChild(el("div", { class: "card mb small muted" }, ["Grille de recueil de données (modèle de Virginia Henderson). Pour chaque besoin : satisfait, perturbé ou non satisfait ?"]));
  const list = el("div", { class: "list" });
  BESOINS.forEach((b) => list.appendChild(el("div", { class: "row" }, [
    el("span", { class: "row-ic", style: { fontWeight: "800", color: "var(--accent)" } }, [String(b.n)]),
    el("span", { class: "row-main" }, [el("div", { class: "row-title", style: { fontSize: "0.92rem" } }, [b.label]), el("div", { class: "row-sub" }, [b.ex])]),
  ])));
  root.appendChild(list);
}

function toolDemarche(root, back) {
  head(root, "🔄 Démarche de soins", back);
  const stepper = el("div", { class: "stepper card" });
  DEMARCHE_STEPS.forEach((s, i) => stepper.appendChild(el("div", { class: "step-node" }, [
    el("div", { class: "step-rail" }, [el("div", { class: "step-dot current" }, [String(i + 1)]), i < DEMARCHE_STEPS.length - 1 ? el("div", { class: "step-line" }) : null]),
    el("div", { class: "step-body" }, [el("div", { class: "step-title" }, [s.titre]), el("div", { class: "step-desc" }, [s.aide])]),
  ])));
  root.appendChild(stepper);
}

function toolDar(root, back) {
  head(root, "📝 Transmissions DAR", back);
  root.appendChild(el("div", { class: "card mb" }, [el("p", { class: "fiche" }, ["Rédige une transmission ciblée. La cible, puis Données / Actions / Résultats."])]));
  const cible = el("input", { type: "text", placeholder: "Cible (ex. Douleur)" });
  const d = el("textarea", { placeholder: "Données : ce que présente / dit le patient…" });
  const a = el("textarea", { placeholder: "Actions : interventions réalisées…" });
  const r = el("textarea", { placeholder: "Résultats : réaction, évolution…" });
  const out = el("div", { class: "calc-display mt", style: { whiteSpace: "pre-wrap", display: "none" } });
  root.appendChild(el("div", { class: "field" }, [el("label", {}, ["Cible"]), cible]));
  root.appendChild(el("div", { class: "field" }, [el("label", {}, ["D — Données"]), d]));
  root.appendChild(el("div", { class: "field" }, [el("label", {}, ["A — Actions"]), a]));
  root.appendChild(el("div", { class: "field" }, [el("label", {}, ["R — Résultats"]), r]));
  root.appendChild(el("button", { class: "btn btn-block", onclick: () => {
    out.style.display = "block";
    out.textContent = `CIBLE : ${cible.value || "—"}\n\nD : ${d.value || "—"}\nA : ${a.value || "—"}\nR : ${r.value || "—"}`;
  } }, ["Générer la transmission"]));
  root.appendChild(out);
  root.appendChild(el("div", { class: "section-title" }, ["Modèle de macrocible (MTVED)"]));
  root.appendChild(el("div", { class: "calc-display", style: { whiteSpace: "pre-wrap" } }, [macrocibleTemplate()]));
}

function toolPrecautions(root, back) {
  head(root, "🧼 Hygiène & précautions", back);
  root.appendChild(el("div", { class: "card mb" }, [el("div", { class: "card-title" }, ["Précautions standard"]), el("ul", { class: "fiche", style: { marginTop: "6px" } }, PRECAUTIONS.standard.map((p) => el("li", {}, [p])))]));
  root.appendChild(el("div", { class: "section-title" }, ["Précautions complémentaires"]));
  PRECAUTIONS.complementaires.forEach((c) => root.appendChild(el("div", { class: "card", style: { marginBottom: "10px" } }, [
    el("span", { class: `ue-tag ${c.couleur}` }, [c.type]),
    el("div", { class: "small", style: { marginTop: "8px" } }, [el("strong", {}, ["Exemples : "]), c.exemples]),
    el("div", { class: "small muted", style: { marginTop: "4px" } }, [c.mesures]),
  ])));
}

function toolGlossaire(root, back) {
  head(root, "📖 Lexique", back);
  const total = GLOSSAIRE.length;
  let filter = "tous", query = "";
  const prog = el("div", { class: "card mb" });
  const seg = el("div", { class: "segmented mb" });
  const results = el("div", { class: "list" });

  function renderProgress() {
    const n = Storage.getDiscovered().length;
    prog.innerHTML = "";
    prog.appendChild(el("div", { class: "flex-between", style: { marginBottom: "8px" } }, [el("strong", { class: "small" }, ["📖 Termes débloqués"]), el("span", { class: "badge badge-accent" }, [n + " / " + total])]));
    prog.appendChild(el("div", { class: "progress" }, [el("span", { style: { width: Math.round(n / total * 100) + "%" } })]));
    prog.appendChild(el("div", { class: "small muted", style: { marginTop: "6px" } }, ["Les termes se débloquent quand tu les rencontres dans les QCM et les fiches. Touche un terme verrouillé pour révéler sa définition."]));
  }
  function renderSeg() {
    seg.innerHTML = "";
    [["tous", "Tous"], ["done", "Débloqués"], ["todo", "À découvrir"]].forEach(([id, lbl]) =>
      seg.appendChild(el("button", { class: filter === id ? "active" : "", onclick: () => { filter = id; renderSeg(); renderList(); } }, [lbl])));
  }
  function renderList() {
    results.innerHTML = "";
    const q = query.toLowerCase();
    const list = GLOSSAIRE
      .map((g) => ({ g, done: Storage.isDiscovered(g.terme) }))
      .filter((x) => filter === "tous" || (filter === "done" && x.done) || (filter === "todo" && !x.done))
      .filter((x) => !q || x.g.terme.toLowerCase().includes(q) || (x.done && x.g.def.toLowerCase().includes(q)))
      .sort((a, b) => a.g.terme.localeCompare(b.g.terme));
    if (!list.length) { results.appendChild(el("div", { class: "empty small" }, ["Aucun terme."])); return; }
    list.forEach(({ g, done }) => {
      const defEl = el("div", { class: "row-sub", style: done ? {} : { filter: "blur(3.5px)", cursor: "pointer" } }, [g.def]);
      const row = el("div", { class: "row" }, [
        el("span", { class: "row-ic" }, [done ? "📗" : "🔒"]),
        el("span", { class: "row-main" }, [el("div", { class: "row-title", style: { fontSize: "0.92rem", opacity: done ? "1" : "0.7" } }, [g.terme]), defEl]),
      ]);
      if (!done) row.addEventListener("click", () => { defEl.style.filter = "none"; });
      results.appendChild(row);
    });
  }
  root.appendChild(prog);
  root.appendChild(el("div", { class: "search-bar mb" }, [el("span", { class: "s-ic" }, ["🔎"]), el("input", { type: "search", placeholder: "Rechercher un terme…", oninput: (e) => { query = e.target.value; renderList(); } })]));
  root.appendChild(seg);
  root.appendChild(results);
  renderProgress(); renderSeg(); renderList();
}
