// Panneau DEAS / Examen : blocs & compétences, modules, stages, AFGSU, certification, rôle AS, conseils.
import { el, navigate } from "./app.js";
import { BLOCS, COMPETENCES, MODULES, STAGES, FORMATION, modulesByBloc } from "./content/referentiel.js";
import { AFGSU, STAGES_INFO, CERTIFICATION, ROLE_AS, PASSERELLES, CONSEILS } from "./content/deas.js";

export function renderDeas(root) {
  root.appendChild(el("div", { class: "panel-head" }, [
    el("div", { class: "eyebrow" }, ["Diplôme d'État d'Aide-Soignant·e"]),
    el("h1", {}, ["📋 Mon DEAS"]),
    el("div", { class: "sub" }, [FORMATION.note]),
  ]));

  // Aperçu formation
  root.appendChild(el("div", { class: "card mb" }, [
    el("div", { class: "kpi-grid" }, [
      kpi("Durée", "≈ 11–12 mois"), kpi("Total", FORMATION.total + " h"),
      kpi("Enseignement", FORMATION.theorie + " h"), kpi("Stage", FORMATION.stage + " h"),
    ]),
  ]));

  // Blocs & compétences
  root.appendChild(el("div", { class: "section-title" }, ["Les 5 blocs de compétences"]));
  BLOCS.forEach((b) => {
    const acc = el("div", { class: "accordion" });
    const body = el("div", { class: "acc-body" });
    body.appendChild(el("div", { class: "small muted", style: { marginBottom: "8px" } }, [b.titre]));
    COMPETENCES.filter((c) => c.bloc === b.n).forEach((c) => {
      body.appendChild(el("div", { class: "callout", style: { marginTop: "8px" } }, [el("div", { class: "callout-t" }, ["Compétence " + c.n]), el("div", { class: "small" }, [c.titre])]));
    });
    body.appendChild(el("div", { class: "section-title", style: { marginLeft: "0" } }, ["Modules"]));
    modulesByBloc(b.n).forEach((m) => body.appendChild(el("button", { class: "row", onclick: () => navigate("cours", { mod: m.id }) }, [
      el("span", { class: `ue-tag ${b.couleur}` }, ["M" + m.id]),
      el("span", { class: "row-main" }, [el("div", { class: "row-title", style: { fontSize: "0.88rem" } }, [m.titre]), el("div", { class: "row-sub" }, [m.heures + " h"])]),
      el("span", { class: "row-chev" }, ["›"]),
    ])));
    acc.appendChild(el("button", { class: "acc-head", onclick: () => acc.classList.toggle("open") }, [
      el("span", { style: { fontSize: "1.3rem" } }, [b.icon]),
      el("span", {}, [`Bloc ${b.n}`, el("div", { class: "row-sub" }, [b.titre])]),
      el("span", { class: "row-chev" }, ["›"]),
    ]));
    acc.appendChild(body);
    root.appendChild(acc);
  });

  // Stages
  root.appendChild(el("div", { class: "section-title" }, ["Les stages"]));
  root.appendChild(el("div", { class: "card mb" }, [
    el("p", { class: "small" }, [STAGES_INFO.desc]),
    el("ul", { class: "fiche", style: { marginTop: "6px" } }, STAGES_INFO.obligations.map((o) => el("li", {}, [o]))),
    el("div", { class: "callout" }, [el("div", { class: "callout-t" }, ["Portfolio"]), el("div", { class: "small" }, [STAGES_INFO.suivi])]),
  ]));
  root.appendChild(el("div", { class: "grid grid-2" }, STAGES.map((s) => el("div", { class: "card" }, [
    el("div", { style: { fontSize: "1.5rem" } }, [s.icon]),
    el("div", { class: "card-title", style: { fontSize: "0.9rem" } }, [s.titre]),
    el("div", { class: "card-sub small" }, [s.desc]),
  ]))));

  // AFGSU
  root.appendChild(el("div", { class: "section-title" }, ["AFGSU 2 (obligatoire)"]));
  root.appendChild(el("div", { class: "card mb" }, [
    el("p", { class: "small" }, [AFGSU.desc]),
    el("ul", { class: "fiche", style: { marginTop: "6px" } }, AFGSU.points.map((p) => el("li", {}, [p]))),
    el("div", { class: "badge badge-amber" }, [AFGSU.validite]),
  ]));

  // Certification
  root.appendChild(el("div", { class: "section-title" }, ["La certification"]));
  root.appendChild(el("div", { class: "card mb" }, [
    el("p", { class: "small" }, [CERTIFICATION.desc]),
    el("ul", { class: "fiche", style: { marginTop: "6px" } }, CERTIFICATION.points.map((p) => el("li", {}, [p]))),
  ]));

  // Rôle AS vs IDE
  root.appendChild(el("div", { class: "section-title" }, ["Mon champ de compétences"]));
  root.appendChild(el("div", { class: "card mb" }, [
    el("div", { class: "card-title", style: { color: "var(--good)" } }, ["✅ L'aide-soignant·e réalise"]),
    el("ul", { class: "fiche", style: { marginTop: "6px" } }, ROLE_AS.fait.map((x) => el("li", {}, [x]))),
    el("div", { class: "card-title", style: { color: "var(--bad)", marginTop: "10px" } }, ["⛔ Relève de l'IDE"]),
    el("ul", { class: "fiche", style: { marginTop: "6px" } }, ROLE_AS.neFaitPas.map((x) => el("li", {}, [x]))),
    el("div", { class: "callout warn", style: { marginTop: "6px" } }, [el("div", { class: "small" }, [ROLE_AS.note])]),
  ]));

  // Conseils
  root.appendChild(el("div", { class: "section-title" }, ["Conseils pour réussir"]));
  CONSEILS.forEach((c) => root.appendChild(el("div", { class: "callout", style: { marginBottom: "8px" } }, [el("div", { class: "callout-t" }, [c.t]), el("div", { class: "small" }, [c.d])])));

  // Passerelles
  root.appendChild(el("div", { class: "section-title" }, ["Passerelles & suites"]));
  root.appendChild(el("div", { class: "card mb" }, [el("ul", { class: "fiche" }, PASSERELLES.map((p) => el("li", {}, [p])))]));

  root.appendChild(el("p", { class: "disclaimer" }, ["Informations indicatives (arrêté du 10 juin 2021). Réfère-toi toujours aux consignes de ton IFAS et aux textes en vigueur."]));
}

function kpi(label, value) {
  return el("div", { class: "kpi" }, [el("div", { class: "k-l" }, [label]), el("div", { class: "k-v" }, [String(value)])]);
}
