// Glossaire médical / abréviations. Recherche tolérante (accents, casse, alias).
import { EXTRA } from "./glossaire-extra.js";
const BASE = [
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
  { terme: "HTA", def: "Hypertension artérielle : pression artérielle ≥ 140/90 mmHg." },
  { terme: "Hypotension", def: "Pression artérielle anormalement basse (< 90/60 mmHg)." },
  { terme: "Hyperglycémie", def: "Taux de glucose sanguin trop élevé." },
  { terme: "Hypoglycémie", def: "Taux de glucose sanguin trop bas (< 0,60 g/L) — urgence si symptômes." },
  { terme: "Globe vésical", def: "Distension de la vessie par rétention aiguë d'urine." },
  { terme: "Rétention urinaire", def: "Impossibilité d'évacuer les urines présentes dans la vessie." },
  { terme: "Fécalome", def: "Accumulation de selles dures bloquées dans le rectum." },
  { terme: "Déshydratation", def: "Perte excessive d'eau de l'organisme (pli cutané, muqueuses sèches…)." },
  { terme: "Dénutrition", def: "État de carence en énergie et/ou protéines avec retentissement." },
  { terme: "Ictère", def: "Coloration jaune de la peau et des muqueuses (bilirubine élevée)." },
  { terme: "Érythème", def: "Rougeur de la peau s'effaçant à la pression." },
  { terme: "Phlyctène", def: "Cloque, ampoule (décollement cutané avec liquide)." },
  { terme: "Décubitus", def: "Position allongée (dorsal, ventral, latéral)." },
  { terme: "PLS", def: "Position Latérale de Sécurité (personne inconsciente qui respire)." },
  { terme: "Antalgique", def: "Médicament qui combat la douleur (= analgésique)." },
  { terme: "Antipyrétique", def: "Médicament qui fait baisser la fièvre." },
  { terme: "Antiémétique", def: "Médicament contre les nausées et vomissements." },
  { terme: "Posologie", def: "Dose et rythme d'administration d'un médicament." },
  { terme: "Per os", def: "Par la bouche (voie orale)." },
  { terme: "Parentérale", def: "Voie d'administration par injection (IV, IM, SC)." },
  { terme: "Cathéter", def: "Tube fin introduit dans un vaisseau ou une cavité." },
  { terme: "Sonde nasogastrique", def: "Sonde du nez à l'estomac (alimentation, aspiration)." },
  { terme: "Anamnèse", def: "Histoire de la maladie recueillie auprès du patient." },
  { terme: "Étiologie", def: "Cause d'une maladie ou d'un symptôme." },
  { terme: "Symptôme", def: "Manifestation ressentie ou observée d'une maladie." },
  { terme: "Syndrome", def: "Ensemble de signes et symptômes caractéristiques." },
  { terme: "Nosocomial", def: "Contracté lors d'une prise en charge dans un établissement de soins." },
  { terme: "Prophylaxie", def: "Ensemble des mesures de prévention d'une maladie." },
  { terme: "Contention", def: "Maintien/immobilisation (physique ou médicamenteuse), encadrée." },
  { terme: "Bradypnée", def: "Fréquence respiratoire anormalement basse (< 12 /min)." },
  { terme: "Polyurie", def: "Production excessive d'urine (> 3 L/24 h)." },
  { terme: "EHPAD", def: "Établissement d'Hébergement pour Personnes Âgées Dépendantes." },
  { terme: "HAD", def: "Hospitalisation À Domicile." },
  { terme: "SSR", def: "Soins de Suite et de Réadaptation." },
  { terme: "BHRe", def: "Bactérie Hautement Résistante émergente." },
];

export const GLOSSAIRE = [...BASE, ...EXTRA];

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

// Tokenise un texte et renvoie les termes du glossaire qui y apparaissent (pour le lexique progressif).
function tokens(text) { return " " + norm(text).replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim() + " "; }
export function findTermsInText(text) {
  if (!text) return [];
  const hay = tokens(text);
  const found = [];
  for (const g of GLOSSAIRE) {
    const t = norm(g.terme).replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
    if (t.length < 2) continue;
    if (hay.includes(" " + t + " ")) found.push(g.terme);
  }
  return found;
}
