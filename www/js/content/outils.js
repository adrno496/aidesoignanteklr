// Boîte à outils clinique : besoins de Henderson, scores, normes, démarche de soins, transmissions, précautions.

export const BESOINS = [
  { n: 1, label: "Respirer", ex: "Fréquence respiratoire, SpO₂, dyspnée, encombrement." },
  { n: 2, label: "Boire et manger", ex: "Appétit, hydratation, déglutition, régime." },
  { n: 3, label: "Éliminer", ex: "Diurèse, transit, continence, sonde, stomie." },
  { n: 4, label: "Se mouvoir, bonne posture", ex: "Mobilité, équilibre, risque de chute/escarre." },
  { n: 5, label: "Dormir, se reposer", ex: "Qualité du sommeil, fatigue, douleur nocturne." },
  { n: 6, label: "Se vêtir / se dévêtir", ex: "Autonomie à l'habillage, adaptation du vêtement." },
  { n: 7, label: "Maintenir la température", ex: "Fièvre, hypothermie, frissons." },
  { n: 8, label: "Être propre, protéger ses téguments", ex: "Hygiène, état cutané, escarres, plaies." },
  { n: 9, label: "Éviter les dangers", ex: "Sécurité, douleur, anxiété, risque infectieux." },
  { n: 10, label: "Communiquer", ex: "Langage, audition/vue, expression des émotions." },
  { n: 11, label: "Agir selon ses croyances", ex: "Culture, religion, valeurs, fin de vie." },
  { n: 12, label: "S'occuper / se réaliser", ex: "Rôle social, travail, estime de soi." },
  { n: 13, label: "Se recréer", ex: "Loisirs, détente, activités plaisantes." },
  { n: 14, label: "Apprendre", ex: "Compréhension de la maladie, éducation thérapeutique." },
];

// Normes des constantes selon l'âge.
export const CONSTANTES = [
  { groupe: "Nouveau-né", fc: "120–160", fr: "30–60", ta: "60–90 / 20–60", t: "36,5–37,5" },
  { groupe: "Nourrisson", fc: "100–150", fr: "25–40", ta: "70–100 / 50–70", t: "36,5–37,5" },
  { groupe: "Enfant", fc: "70–120", fr: "20–30", ta: "90–110 / 55–75", t: "36,5–37,5" },
  { groupe: "Adulte", fc: "60–100", fr: "12–20", ta: "≈ 120 / 80", t: "36,5–37,5" },
  { groupe: "Personne âgée", fc: "60–100", fr: "12–20", ta: "< 150 / 90", t: "36–37,5" },
];

// Scores cliniques avec barème et interprétation.
export const SCORES = [
  {
    id: "glasgow", nom: "Score de Glasgow (GCS)", icon: "🧠",
    desc: "Évaluation de l'état de conscience (3 à 15).",
    items: [
      { label: "Ouverture des yeux", options: [{ t: "Spontanée", p: 4 }, { t: "À la voix", p: 3 }, { t: "À la douleur", p: 2 }, { t: "Aucune", p: 1 }] },
      { label: "Réponse verbale", options: [{ t: "Orientée", p: 5 }, { t: "Confuse", p: 4 }, { t: "Mots inappropriés", p: 3 }, { t: "Sons incompréhensibles", p: 2 }, { t: "Aucune", p: 1 }] },
      { label: "Réponse motrice", options: [{ t: "Aux ordres", p: 6 }, { t: "Orientée à la douleur", p: 5 }, { t: "Évitement", p: 4 }, { t: "Flexion (décortication)", p: 3 }, { t: "Extension (décérébration)", p: 2 }, { t: "Aucune", p: 1 }] },
    ],
    interpret: (t) => t <= 8 ? { label: "Coma / grave (≤ 8) — protection des voies aériennes", kind: "bad" }
      : t <= 12 ? { label: "Atteinte modérée (9–12)", kind: "warn" }
      : { label: "Atteinte légère / normal (13–15)", kind: "good" },
  },
  {
    id: "norton", nom: "Échelle de Norton (escarre)", icon: "🛏️",
    desc: "Risque d'escarre (5 à 20). Risque si ≤ 14.",
    items: [
      { label: "État physique", options: [{ t: "Bon", p: 4 }, { t: "Moyen", p: 3 }, { t: "Médiocre", p: 2 }, { t: "Très mauvais", p: 1 }] },
      { label: "État mental", options: [{ t: "Alerte", p: 4 }, { t: "Apathique", p: 3 }, { t: "Confus", p: 2 }, { t: "Stuporeux", p: 1 }] },
      { label: "Activité", options: [{ t: "Marche", p: 4 }, { t: "Marche avec aide", p: 3 }, { t: "Assis (fauteuil)", p: 2 }, { t: "Alité", p: 1 }] },
      { label: "Mobilité", options: [{ t: "Totale", p: 4 }, { t: "Diminuée", p: 3 }, { t: "Très limitée", p: 2 }, { t: "Immobile", p: 1 }] },
      { label: "Incontinence", options: [{ t: "Aucune", p: 4 }, { t: "Occasionnelle", p: 3 }, { t: "Urinaire", p: 2 }, { t: "Urinaire et fécale", p: 1 }] },
    ],
    interpret: (t) => t <= 14 ? { label: "Risque d'escarre (≤ 14) — mesures de prévention", kind: "bad" } : { label: "Risque faible (> 14)", kind: "good" },
  },
];

export const PRECAUTIONS = {
  standard: [
    "Hygiène des mains (friction hydro-alcoolique de référence)",
    "Gants si contact avec liquides biologiques / muqueuses / peau lésée",
    "Tablier / surblouse, masque, lunettes selon risque de projection",
    "Gestion des excreta, du linge et des déchets (DASRI)",
    "Ne jamais recapuchonner une aiguille — collecteur OPCT immédiat",
  ],
  complementaires: [
    { type: "Contact (C)", couleur: "ue-2", exemples: "BMR/BHRe, gale, C. difficile", mesures: "Chambre seule si possible, gants + tablier, matériel dédié." },
    { type: "Gouttelettes (G)", couleur: "ue-4", exemples: "Grippe, méningocoque, coqueluche, VRS", mesures: "Masque chirurgical à < 1–2 m, chambre seule." },
    { type: "Air (A)", couleur: "ue-1", exemples: "Tuberculose, rougeole, varicelle", mesures: "Appareil FFP2, chambre seule porte fermée (pression négative idéale)." },
  ],
};

export const DEMARCHE_STEPS = [
  { titre: "1. Recueil de données", aide: "Identité, motif, antécédents, traitement, constantes, examen, 14 besoins. Données objectives ET subjectives." },
  { titre: "2. Analyse / diagnostics infirmiers", aide: "Trier les données, repérer les problèmes, formuler en PES (Problème / lié à / se manifestant par)." },
  { titre: "3. Planification", aide: "Objectifs SMART, priorisation (urgence, sécurité), choix des interventions du rôle propre et sur prescription." },
  { titre: "4. Réalisation", aide: "Mise en œuvre des soins, éducation, traçabilité, transmissions ciblées (DAR)." },
  { titre: "5. Évaluation", aide: "Objectifs atteints ? Réévaluer les constantes/la douleur, réajuster le projet de soins." },
];

export function macrocibleTemplate() {
  return [
    "M (Maladie) : motif d'hospitalisation, diagnostic principal…",
    "T (Thérapeutique) : traitements, dispositifs, surveillances…",
    "V (Vécu) : ressenti, douleur, anxiété…",
    "E (Environnement) : entourage, autonomie, domicile…",
    "D (Devenir/Développement) : projet de sortie, rééducation…",
  ].join("\n");
}

// Manutention / mobilisation : principes de prévention (gestes et postures).
export const MOBILISATION = {
  principes: [
    "Évaluer la situation et les capacités de la personne (participation active +++).",
    "Prévenir la personne et obtenir son accord ; respecter son rythme et sa pudeur.",
    "Verrouiller la colonne vertébrale (dos droit), fléchir les genoux, abaisser le centre de gravité.",
    "Écarter les pieds (polygone de sustentation large), rapprocher la charge du corps.",
    "Pousser/tirer plutôt que soulever ; utiliser le poids du corps et le transfert d'appui.",
    "Régler le lit à bonne hauteur ; travailler à deux et synchroniser (« 1, 2, 3 »).",
  ],
  aides: ["Drap ou alèse de glisse", "Disque / planche de transfert", "Ceinture de manutention", "Verticalisateur", "Lève-personne (lève-malade)", "Lit médicalisé, potence, barrières"],
  alerte: "Toute douleur, malaise ou refus → arrêter, sécuriser et transmettre.",
};

// Bionettoyage : entretien des locaux et du matériel.
export const BIONETTOYAGE = {
  principe: "Toujours aller du plus propre vers le plus sale et du haut vers le bas. Un seul sens de passage, sans repasser sur une zone déjà nettoyée.",
  etapes: [
    "Détergent : décolle et élimine les salissures.",
    "Rinçage (selon protocole / produit).",
    "Désinfectant : détruit les micro-organismes.",
    "Souvent regroupé via un détergent-désinfectant.",
  ],
  regles: [
    "Lavage / friction des mains avant et après ; port des EPI adaptés (gants, tablier).",
    "Matériel à usage unique ou dédié, changé entre les zones ; chiffonnettes par code couleur.",
    "Respecter le temps de contact et la dilution du produit.",
    "Circuits séparés : propre / sale, linge, déchets (DASRI).",
    "Traçabilité de l'entretien (fiches, plan de nettoyage).",
  ],
};
