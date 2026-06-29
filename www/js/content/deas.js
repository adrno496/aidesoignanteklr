// Données du parcours DEAS : certification, AFGSU, stages, rôle de l'AS, passerelles, conseils.

export const FORMATION_INFO = {
  total: "1 540 h", theorie: "770 h (10 modules)", stage: "770 h (22 semaines)",
  duree: "≈ 11 à 12 mois", note: "Formation organisée en 5 blocs de compétences (11 compétences) validés indépendamment.",
};

export const AFGSU = {
  titre: "AFGSU niveau 2",
  desc: "L'Attestation de Formation aux Gestes et Soins d'Urgence (niveau 2, 21 h) est OBLIGATOIRE pour obtenir le DEAS.",
  points: [
    "Protection, alerte, identification d'une urgence vitale",
    "Hémorragies, obstruction des voies aériennes, position d'attente",
    "Arrêt cardiaque : RCP et défibrillateur (DAE)",
    "Malaises, plaies, brûlures, traumatismes",
    "Risques collectifs et plans sanitaires",
  ],
  validite: "Valable 4 ans — recyclage (MAC, 7 h) ensuite.",
};

export const STAGES_INFO = {
  desc: "4 périodes de stage, 22 semaines (770 h) : trois périodes de 5 semaines + une période intégrative de 7 semaines.",
  obligations: [
    "Au moins un stage auprès de personnes en situation de handicap",
    "Diversité des publics et des lieux (court séjour, EHPAD, domicile…)",
    "Au moins une expérience de nuit et une de week-end / jour férié",
  ],
  suivi: "Le portfolio suit la progression des compétences ; il est rempli avec le tuteur (maître de stage) et le formateur référent.",
};

export const CERTIFICATION = {
  desc: "Le DEAS s'obtient par la validation des 5 blocs de compétences (pas de compensation entre blocs).",
  points: [
    "Chaque bloc se valide indépendamment ; les compétences acquises le restent.",
    "Évaluations en formation : études de situation, évaluations pratiques (simulation), oraux — note ≥ 10/20 par module.",
    "Évaluations en stage : grille de compétences par le tuteur + portfolio.",
    "Un jury de certification valide l'ensemble.",
    "AFGSU 2 obligatoire pour la délivrance du diplôme.",
  ],
};

export const ROLE_AS = {
  fait: [
    "Soins d'hygiène et de confort, aide à la toilette, à l'habillage",
    "Aide à l'alimentation, à l'hydratation, à l'élimination",
    "Mobilisation, installation, prévention des escarres et des chutes",
    "Mesure et surveillance des paramètres vitaux (pouls, TA, T°, FR, SpO₂, poids…)",
    "Réfection de lit, entretien de l'environnement, bionettoyage",
    "Observation, transmissions orales et écrites (dossier de soins)",
    "Accompagnement relationnel, communication, soutien des proches",
  ],
  neFaitPas: [
    "Injections (SC, IM, IV) et pose/gestion de perfusions",
    "Calcul et préparation des doses de médicaments injectables",
    "Sondage urinaire, pansements stériles complexes, prélèvements stériles",
    "Interprétation clinique / diagnostic et prescription de soins",
  ],
  note: "L'AS agit en collaboration et sous la responsabilité de l'infirmier·ère (IDE), dans le cadre de protocoles. (Des actes complémentaires sont encadrés par la réforme 2021/2026, toujours sous protocole IDE.)",
};

export const PASSERELLES = [
  "Bac Pro ASSP / SAPAT : dispenses de modules (parcours réduit).",
  "AES / DEAES : modules communs valorisés.",
  "Vers IDE : accès facilité en 2ᵉ année après expérience (selon dispositifs en vigueur).",
  "VAE : validation par blocs possible avec expérience professionnelle.",
];

export const CONSEILS = [
  { t: "Apprends par les situations", d: "Relie chaque savoir (hygiène, constantes, transmissions) à une situation de stage concrète : c'est ce qui est évalué." },
  { t: "Maîtrise les gestes de base", d: "Lavage des mains, précautions standard, prévention des escarres, manutention : ce sont les fondamentaux attendus partout." },
  { t: "Soigne tes transmissions", d: "Observations factuelles, sans jugement, datées et signées. C'est le cœur du module 9 et du rôle AS." },
  { t: "Connais tes limites", d: "Savoir ce qui relève de l'IDE et alerter au bon moment est une compétence valorisée, pas un aveu de faiblesse." },
  { t: "Prépare l'oral / les mises en situation", d: "Entraîne-toi à dérouler une conduite à tenir : sécuriser, observer, agir dans ton champ, transmettre." },
];
