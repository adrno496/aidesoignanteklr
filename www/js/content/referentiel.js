// Référentiel de formation aide-soignant·e (DEAS — arrêté du 10 juin 2021).
// Structure officielle : 5 blocs de compétences, 11 compétences, 10 modules de formation, 4 périodes de stage, AFGSU 2.
// Ces données pilotent la navigation (Bloc → Module).

export const COMPETENCES = [
  { n: 1, bloc: 1, titre: "Accompagner les personnes dans les actes essentiels de la vie quotidienne et de la vie sociale, en personnalisant l'accompagnement" },
  { n: 2, bloc: 1, titre: "Identifier les situations à risque, mettre en œuvre les actions de prévention et les évaluer" },
  { n: 3, bloc: 2, titre: "Évaluer l'état clinique d'une personne à tout âge de la vie pour adapter sa prise en soins" },
  { n: 4, bloc: 2, titre: "Mettre en œuvre des soins adaptés à l'état clinique de la personne" },
  { n: 5, bloc: 2, titre: "Accompagner la personne dans son installation et ses déplacements en utilisant les techniques de mobilisation" },
  { n: 6, bloc: 3, titre: "Établir une communication adaptée pour informer et accompagner la personne et son entourage" },
  { n: 7, bloc: 3, titre: "Informer et former les pairs, les personnes en formation et les autres professionnels" },
  { n: 8, bloc: 4, titre: "Utiliser des techniques d'entretien des locaux et du matériel en prévenant le risque infectieux" },
  { n: 9, bloc: 4, titre: "Repérer et traiter les anomalies et dysfonctionnements liés à l'entretien des locaux et du matériel" },
  { n: 10, bloc: 5, titre: "Rechercher, traiter et transmettre les données pour assurer la continuité et la traçabilité des soins" },
  { n: 11, bloc: 5, titre: "Organiser son activité, coopérer en équipe et améliorer sa pratique dans une démarche qualité et gestion des risques" },
];

export const BLOCS = [
  { n: 1, titre: "Accompagnement et soins de la personne dans les activités de sa vie quotidienne et de sa vie sociale", modules: ["1", "2"], couleur: "ue-4", icon: "🤝" },
  { n: 2, titre: "Évaluation de l'état clinique et mise en œuvre de soins adaptés en collaboration", modules: ["3", "4", "5"], couleur: "ue-2", icon: "🩺" },
  { n: 3, titre: "Information et accompagnement des personnes, des professionnels et des apprenants", modules: ["6", "7"], couleur: "ue-1", icon: "💬" },
  { n: 4, titre: "Entretien de l'environnement de la personne et des matériels", modules: ["8"], couleur: "ue-6", icon: "🧼" },
  { n: 5, titre: "Travail en équipe pluriprofessionnelle, traitement des informations, qualité et gestion des risques", modules: ["9", "10"], couleur: "ue-5", icon: "📋" },
];

// id : identifiant pack ("1" → pack "mod_1").
export const MODULES = [
  { id: "1", bloc: 1, titre: "Accompagnement d'une personne dans les activités de sa vie quotidienne et de sa vie sociale", heures: 147, comp: [1] },
  { id: "2", bloc: 1, titre: "Repérage et prévention des situations à risque", heures: 21, comp: [2] },
  { id: "3", bloc: 2, titre: "Évaluation de l'état clinique d'une personne", heures: 77, comp: [3] },
  { id: "4", bloc: 2, titre: "Mise en œuvre des soins adaptés, évaluation et réajustement", heures: 182, comp: [4] },
  { id: "5", bloc: 2, titre: "Accompagnement de la mobilité de la personne aidée", heures: 35, comp: [5] },
  { id: "6", bloc: 3, titre: "Relation et communication avec les personnes et leur entourage", heures: 70, comp: [6] },
  { id: "7", bloc: 3, titre: "Accompagnement des personnes en formation et communication avec les pairs", heures: 21, comp: [7] },
  { id: "8", bloc: 4, titre: "Entretien des locaux et des matériels et prévention des risques associés", heures: 35, comp: [8, 9] },
  { id: "9", bloc: 5, titre: "Traitement des informations", heures: 35, comp: [10] },
  { id: "10", bloc: 5, titre: "Travail en équipe pluriprofessionnelle, qualité et gestion des risques", heures: 70, comp: [11] },
];

export const STAGES = [
  { id: "p1", titre: "Période 1 (5 sem.)", desc: "Premier stage d'immersion et de découverte du métier.", icon: "🏥" },
  { id: "p2", titre: "Période 2 (5 sem.)", desc: "Approfondissement des soins et de l'accompagnement.", icon: "🛏️" },
  { id: "p3", titre: "Période 3 (5 sem.)", desc: "Diversité des publics (dont handicap obligatoire).", icon: "♿" },
  { id: "p4", titre: "Période 4 (7 sem.)", desc: "Stage intégratif de consolidation des compétences.", icon: "🎯" },
];

export const FORMATION = {
  total: 1540, theorie: 770, stage: 770, semaines: 44,
  note: "770 h d'enseignement (10 modules) + 770 h de stage (22 semaines, 4 périodes). AFGSU 2 obligatoire (21 h, validité 4 ans).",
};

export function modById(id) { return MODULES.find((m) => m.id === id) || null; }
export function modulesByBloc(n) { return MODULES.filter((m) => m.bloc === n); }
export function packId(modId) { return "mod_" + modId; }
export function blocById(n) { return BLOCS.find((b) => b.n === n) || null; }
export function blocCouleur(n) { return blocById(n)?.couleur || "ue-4"; }
