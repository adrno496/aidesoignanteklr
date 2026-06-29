// Glossaire médical / abréviations. Recherche tolérante (accents, casse, alias).
export const GLOSSAIRE = [
  { terme: "Dyspnée", def: "Difficulté ou gêne respiratoire ressentie par le patient." },
  { terme: "Tachycardie", def: "Fréquence cardiaque > 100 bpm au repos." },
  { terme: "Bradycardie", def: "Fréquence cardiaque < 60 bpm." },
  { terme: "Tachypnée", def: "Fréquence respiratoire > 20 /min." },
  { terme: "Apnée", def: "Arrêt transitoire de la respiration." },
  { terme: "Cyanose", def: "Coloration bleutée des téguments par manque d'oxygène." },
  { terme: "Asepsie", def: "Ensemble des mesures empêchant l'apport de micro-organismes." },
  { terme: "Antisepsie", def: "Destruction des micro-organismes sur les tissus vivants." },
  { terme: "Systole", def: "Phase de contraction et d'éjection du cœur." },
  { terme: "Diastole", def: "Phase de relâchement et de remplissage du cœur." },
  { terme: "Hématose", def: "Échanges gazeux alvéolo-capillaires (oxygénation du sang)." },
  { terme: "Biodisponibilité", def: "Fraction de la dose administrée atteignant la circulation générale (100 % en IV)." },
  { terme: "Iatrogène", def: "Conséquence néfaste liée à un acte ou un traitement médical." },
  { terme: "Escarre", def: "Lésion cutanée d'origine ischémique par pression prolongée." },
  { terme: "Œdème", def: "Accumulation anormale de liquide dans les tissus." },
  { terme: "Anurie", def: "Absence de production d'urine (< 100 mL/24 h)." },
  { terme: "Oligurie", def: "Diminution de la diurèse (< 500 mL/24 h)." },
  { terme: "Polyurie", def: "Augmentation du volume des urines (> 3 L/24 h)." },
  { terme: "Dysphagie", def: "Difficulté à avaler." },
  { terme: "Asthénie", def: "Fatigue physique et/ou psychique intense." },
  { terme: "Anorexie", def: "Perte ou diminution de l'appétit." },
  { terme: "Pyrexie", def: "Élévation de la température corporelle (fièvre)." },
  { terme: "Hypovolémie", def: "Diminution du volume sanguin circulant." },
  { terme: "Septicémie", def: "Présence et multiplication de germes dans le sang avec retentissement général (sepsis)." },
  { terme: "qSOFA", def: "Score rapide de gravité du sepsis : FR ≥ 22, PAS ≤ 100, confusion (≥ 2 = alerte)." },
  { terme: "Stomie", def: "Abouchement chirurgical d'un organe creux à la peau (colostomie, etc.)." },
  { terme: "Diurèse", def: "Volume d'urine émis sur une période donnée." },
  { terme: "Transmissions ciblées", def: "Mode de transmission écrit structuré en Données – Actions – Résultats (DAR)." },
  { terme: "Démarche clinique", def: "Processus de recueil, analyse et décision aboutissant au projet de soins." },
  { terme: "Besoins fondamentaux", def: "Les 14 besoins de Virginia Henderson, base du recueil de données." },
  { terme: "BMR", def: "Bactérie Multi-Résistante aux antibiotiques." },
  { terme: "DASRI", def: "Déchets d'Activités de Soins à Risques Infectieux." },
  { terme: "AES", def: "Accident d'Exposition au Sang (ou liquide biologique)." },
  { terme: "INR", def: "International Normalized Ratio : surveillance des AVK (cible souvent 2–3)." },
  { terme: "TIH", def: "Thrombopénie Induite par l'Héparine." },
  { terme: "EVA", def: "Échelle Visuelle Analogique d'évaluation de la douleur." },
  { terme: "RCP", def: "Réanimation Cardio-Pulmonaire." },
  { terme: "BPCO", def: "BronchoPneumopathie Chronique Obstructive." },
  { terme: "HBPM", def: "Héparine de Bas Poids Moléculaire." },
  { terme: "AVK", def: "Anti-Vitamine K (anticoagulant oral)." },
  { terme: "AOD", def: "Anticoagulant Oral Direct." },
  { terme: "TFE", def: "Travail de Fin d'Études (mémoire infirmier)." },
];

function norm(s) {
  return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

export function lookup(term) {
  const t = norm(term);
  return GLOSSAIRE.find((g) => norm(g.terme) === t)
    || GLOSSAIRE.find((g) => norm(g.terme).startsWith(t))
    || GLOSSAIRE.find((g) => norm(g.terme).includes(t))
    || null;
}
