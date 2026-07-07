// Module « Ma VAE » — accompagnement à la Validation des Acquis de l'Expérience pour le DEAS.
// Parcours pas-à-pas + grille des 11 compétences + assistant de description de situation.
// Rappel : les modalités VAE évoluent (France VAE). Toujours vérifier sur france-vae.gouv.fr
// et avec son accompagnateur / son point relais conseil.

export const VAE_STEPS = [
  {
    id: "comprendre", titre: "1. Comprendre la VAE DEAS", icon: "🧭",
    objectif: "Saisir le principe : prouver ses compétences par l'expérience, bloc par bloc.",
    cours: `<p>La VAE permet d'obtenir le <strong>Diplôme d'État d'Aide-Soignant·e</strong> à partir de son <strong>expérience</strong>, sans repasser par la formation initiale. Le parcours passe aujourd'hui par le portail <strong>France VAE</strong> :</p>
      <ul><li><strong>Recevabilité</strong> (dossier de faisabilité) : vérifier que l'expérience correspond au diplôme visé.</li><li><strong>Dossier de validation</strong> : décrire des situations de travail réelles qui prouvent chaque compétence.</li><li><strong>Jury</strong> : présentation orale + échange, à partir du dossier.</li></ul>
      <div class="callout"><div class="callout-t">Bloc par bloc</div>Le DEAS se valide par <strong>blocs de compétences</strong> (5 blocs, 11 compétences). Le jury peut valider tout, ou une partie : les blocs manquants se complètent ensuite.</div>`,
    exemple: "Une auxiliaire de vie avec 3 ans d'expérience en EHPAD vise le DEAS par VAE : elle appuiera son dossier sur des situations vécues de toilette, de repérage de risques, de transmissions…",
    conseils: ["Fais-toi accompagner (France VAE propose un accompagnement financé).", "Vérifie ta recevabilité AVANT de rédiger le dossier.", "Rassemble tes preuves d'expérience (contrats, fiches de poste, attestations)."],
    pieges: ["Se lancer dans le dossier sans recevabilité.", "Confondre 'raconter son métier' et 'prouver une compétence précise'."],
    placeholder: "Note ici où tu en es : recevabilité, expérience, accompagnement envisagé…",
    checklist: ["Je connais les 5 blocs et 11 compétences du DEAS", "J'ai identifié mon expérience utile (postes, durées)", "Je me renseigne sur l'accompagnement France VAE", "J'ai vérifié / lancé ma recevabilité"],
  },
  {
    id: "positionnement", titre: "2. Auto-positionnement", icon: "📊",
    objectif: "Repérer, compétence par compétence, ce que je maîtrise déjà et ce qui est à consolider.",
    cours: `<p>Avant de rédiger, fais le point sur les <strong>11 compétences</strong> : pour chacune, demande-toi « ai-je une expérience concrète qui le prouve ? ». Utilise la <strong>grille des compétences</strong> de ce module pour t'auto-positionner (maîtrisé / à consolider / pas encore).</p>
      <p>Ce repérage te dit <strong>où tu es solide</strong> (situations faciles à décrire) et <strong>où il te manque des preuves</strong> (compétences à travailler ou expériences à aller chercher).</p>`,
    exemple: "« Compétence 3 (évaluer l'état clinique) : je prends les constantes tous les jours et j'ai déjà repéré une aggravation → maîtrisé. Compétence 7 (former des pairs) : jamais encadré de stagiaire → à consolider. »",
    conseils: ["Sois honnête : un jury repère vite une compétence 'gonflée'.", "Une compétence non prouvée n'est pas éliminatoire : on peut valider partiellement."],
    pieges: ["Se sur-noter partout.", "Oublier les compétences 'invisibles' (traçabilité, qualité, travail en équipe)."],
    placeholder: "Bilan de mon positionnement sur les 11 compétences…",
    checklist: ["J'ai passé en revue les 11 compétences", "J'ai marqué mon niveau pour chacune", "J'ai repéré mes points forts", "J'ai repéré les compétences à travailler"],
  },
  {
    id: "situations", titre: "3. Choisir mes situations", icon: "🗂️",
    objectif: "Sélectionner 4 à 6 situations de travail riches, qui couvrent l'ensemble des compétences.",
    cours: `<p>Le dossier repose sur des <strong>situations de travail concrètes et vécues</strong>. Choisis-en quelques-unes, <strong>variées</strong>, qui te permettent de prouver le plus de compétences possible.</p>
      <ul><li>Des situations que tu maîtrises et que tu peux raconter en détail.</li><li>Assez riches pour mobiliser plusieurs compétences à la fois.</li><li>Représentatives de ton activité réelle.</li></ul>
      <div class="callout"><div class="callout-t">Astuce couverture</div>Vérifie qu'entre toutes tes situations, <strong>les 11 compétences</strong> sont couvertes au moins une fois.</div>`,
    exemple: "« Accompagnement de la toilette d'une résidente désorientée qui refuse » couvre les compétences 1, 2, 3, 6 et 10.",
    conseils: ["Note plusieurs situations candidates avant de trancher.", "Préfère des situations où TU as agi (pas 'l'équipe a fait')."],
    pieges: ["Une seule situation pour tout : trop pauvre.", "Des situations hors du champ AS."],
    placeholder: "Liste de mes situations candidates (titre + compétences visées)…",
    checklist: ["J'ai listé 4 à 6 situations", "Elles sont variées et vécues", "Ensemble, elles couvrent les 11 compétences", "Ce sont MES actions qui ressortent"],
  },
  {
    id: "decrire", titre: "4. Décrire mes situations", icon: "✍️",
    objectif: "Rédiger chaque situation avec méthode : contexte, actions concrètes, résultat.",
    cours: `<p>Pour chaque situation, décris-la avec une méthode simple (utilise l'<strong>assistant de situation</strong> de ce module) :</p>
      <ol><li><strong>Contexte</strong> : où, quel service, quel public.</li><li><strong>La personne</strong> accompagnée (anonymisée) et sa situation.</li><li><strong>Ma mission</strong> : ce qui m'était demandé.</li><li><strong>Ce que j'ai fait</strong> concrètement, étape par étape.</li><li><strong>Difficultés / imprévus</strong> et comment j'ai réagi.</li><li><strong>Résultat</strong> et ce que ça a apporté.</li></ol>
      <div class="callout warn"><div class="callout-t">Anonymat</div>Jamais de nom de résident, de collègue ou d'établissement. Utilise « Mme B. », « le service », « l'établissement ».</div>`,
    exemple: "« Dans le service, Mme B., désorientée, refuse sa toilette. J'ai pris le temps de m'asseoir, je l'ai rassurée, j'ai annoncé chaque geste… → toilette réalisée sans contrainte, trace dans les transmissions. »",
    conseils: ["Écris au 'je' : le jury évalue TON action.", "Détaille les gestes : c'est là que la compétence se voit.", "Explique POURQUOI tu as agi ainsi (le raisonnement)."],
    pieges: ["Rester général ('je fais des toilettes').", "Décrire la théorie au lieu de ton vécu."],
    placeholder: "Rédige ici tes situations (ou utilise l'assistant ci-dessous)…",
    checklist: ["Chaque situation suit la trame (contexte → actions → résultat)", "J'écris au 'je' et je détaille mes gestes", "J'explique mon raisonnement", "L'anonymat est respecté partout"],
  },
  {
    id: "relier", titre: "5. Relier situations et compétences", icon: "🔗",
    objectif: "Montrer explicitement quelle compétence chaque situation prouve.",
    cours: `<p>Le jury doit voir <strong>sans effort</strong> quelle compétence tu prouves et où. Pour chaque compétence, indique la ou les situations qui la démontrent, et <strong>en quoi</strong>.</p>
      <p>Sers-toi de la <strong>grille des compétences</strong> : coche chaque compétence dès qu'elle est illustrée par une situation concrète. Objectif : <strong>aucune compétence orpheline</strong>.</p>`,
    exemple: "« Compétence 2 (prévention des risques) : dans la situation de Mme B., j'ai repéré un risque de chute et installé les protections → preuve directe. »",
    conseils: ["Relie explicitement : 'Cette situation prouve la compétence X parce que…'.", "Une même situation peut prouver plusieurs compétences."],
    pieges: ["Laisser le jury deviner le lien.", "Une compétence sans aucune situation en face."],
    placeholder: "Tableau de correspondance situations ↔ compétences…",
    checklist: ["Chaque compétence est reliée à au moins une situation", "Le lien est explicite (en quoi c'est prouvé)", "Aucune compétence n'est laissée de côté"],
  },
  {
    id: "dossier", titre: "6. Rédiger le dossier de validation", icon: "📁",
    objectif: "Assembler un dossier clair, complet et anonymisé, prêt à déposer.",
    cours: `<p>Le dossier de validation regroupe tes situations et met en évidence tes compétences. Soigne :</p>
      <ul><li>La <strong>clarté</strong> : titres, structure, lisibilité.</li><li>La <strong>complétude</strong> : les 11 compétences couvertes.</li><li>L'<strong>anonymat</strong> et l'orthographe.</li><li>Les <strong>pièces jointes</strong> demandées (selon France VAE).</li></ul>
      <div class="callout"><div class="callout-t">Relecture</div>Fais relire ton dossier par ton accompagnateur ou un tiers : un regard extérieur repère les manques.</div>`,
    exemple: "Un dossier structuré par situations, chacune reliée aux compétences, avec une introduction sur ton parcours.",
    conseils: ["Relis-toi à voix haute.", "Vérifie la cohérence entre situations et compétences.", "Respecte le format attendu par France VAE."],
    pieges: ["Déposer sans relecture.", "Oublier des pièces justificatives."],
    placeholder: "Notes de mise au propre, plan du dossier, points à vérifier…",
    checklist: ["Les 11 compétences sont couvertes", "Structure claire et lisible", "Anonymat + orthographe vérifiés", "Pièces jointes rassemblées", "Dossier relu par un tiers"],
  },
  {
    id: "oral", titre: "7. Préparer l'oral (jury)", icon: "🎤",
    objectif: "Anticiper l'entretien avec le jury et savoir présenter ses situations.",
    cours: `<p>Devant le jury, tu présentes ton parcours et tes situations, puis tu réponds à ses questions. On évalue ta capacité à <strong>expliquer ce que tu fais et pourquoi</strong>, à prendre du recul et à te situer dans le champ de l'aide-soignant·e.</p>
      <h4>Prépare</h4>
      <ol><li>Une présentation courte de ton parcours.</li><li>2-3 situations que tu peux raconter en détail.</li><li>Des réponses aux questions probables (voir le simulateur de jury).</li></ol>
      <div class="callout"><div class="callout-t">Champ AS</div>Sache dire ce qui relève de l'AS et ce qui relève de l'IDE (rôle sur prescription, collaboration).</div>`,
    exemple: "« Le jury me demande comment j'ai repéré une aggravation : je décris les signes observés, ma prise de constantes, et ma transmission à l'IDE. »",
    conseils: ["Entraîne-toi à voix haute avec le simulateur.", "Assume ce que tu ne sais pas : reste dans ton champ.", "Appuie-toi sur du concret, du vécu."],
    pieges: ["Réciter la théorie.", "Sortir du champ AS.", "Se braquer face à une question."],
    placeholder: "Plan de ma présentation orale + questions probables du jury…",
    checklist: ["J'ai préparé ma présentation de parcours", "Je sais raconter 2-3 situations en détail", "Je me suis entraîné·e à l'oral", "Je sais situer le rôle AS vs IDE"],
  },
];

// Rétroplanning (semaines avant le passage devant le jury) + aide IA ciblée par étape.
export const VAE_STEP_META = {
  comprendre:     { semAvantJury: 24, motsCible: 120, aide: { label: "M'expliquer la VAE DEAS", type: "comprendre" } },
  positionnement: { semAvantJury: 22, motsCible: 200, aide: { label: "M'aider à m'auto-positionner", type: "positionnement" } },
  situations:     { semAvantJury: 20, motsCible: 200, aide: { label: "M'aider à choisir mes situations", type: "situations" } },
  decrire:        { semAvantJury: 14, motsCible: 800, aide: { label: "Relire / améliorer ma situation", type: "decrire" } },
  relier:         { semAvantJury: 8,  motsCible: 250, aide: { label: "Vérifier mes compétences couvertes", type: "relier" } },
  dossier:        { semAvantJury: 4,  motsCible: 400, aide: { label: "Relire mon dossier", type: "dossier" } },
  oral:           { semAvantJury: 1,  motsCible: 250, aide: { label: "Me préparer au jury", type: "oral" } },
};

// Attendus du jury pour chacune des 11 compétences (aligné sur le référentiel du 10 juin 2021).
export const COMP_ATTENDUS = {
  1: "Montrer comment tu adaptes l'accompagnement des actes essentiels (toilette, repas, habillage, élimination) aux habitudes, à l'autonomie, à l'intimité et à la dignité de la personne.",
  2: "Repérer les situations à risque (chute, escarre, dénutrition, déshydratation, fausse route), mettre en place des actions de prévention et les évaluer.",
  3: "Mesurer et interpréter les paramètres vitaux, observer les signes, repérer une aggravation de l'état clinique et la transmettre.",
  4: "Réaliser des soins d'hygiène et de confort adaptés, participer à la surveillance et à la prise médicamenteuse dans le champ AS, en collaboration avec l'IDE.",
  5: "Installer et mobiliser la personne en sécurité (transferts, aides techniques), en prévenant les risques pour elle et pour toi.",
  6: "Établir une communication adaptée avec la personne et son entourage : écoute, information, gestion d'un refus ou d'une situation difficile.",
  7: "Accueillir et accompagner un stagiaire ou un pair, transmettre un savoir-faire, communiquer dans l'équipe.",
  8: "Entretenir les locaux et le matériel en respectant les circuits propre/sale, les précautions standard et la prévention du risque infectieux.",
  9: "Repérer une anomalie ou un dysfonctionnement lié à l'entretien, alerter et tracer.",
  10: "Rechercher, traiter et transmettre les informations utiles (transmissions ciblées, dossier de soins) pour assurer continuité et traçabilité.",
  11: "Organiser ton activité, coopérer en équipe pluriprofessionnelle et participer à la démarche qualité et à la gestion des risques.",
};

// Assistant de description de situation : champs guidés (méthode contexte → actions → résultat).
export const SITUATION_CHAMPS = [
  { key: "titre", label: "Titre de la situation", placeholder: "Ex. : Accompagnement de la toilette d'une résidente qui refuse" },
  { key: "contexte", label: "Contexte", placeholder: "Où ? Quel service ? Quel public ? Quand ?" },
  { key: "personne", label: "La personne accompagnée (anonymisée)", placeholder: "Ex. : Mme B., 84 ans, désorientée, autonomie réduite" },
  { key: "mission", label: "Ma mission", placeholder: "Ce qui m'était demandé, mon rôle" },
  { key: "actions", label: "Ce que j'ai fait concrètement", placeholder: "Mes actions, étape par étape, avec mes gestes" },
  { key: "difficultes", label: "Difficultés / imprévus", placeholder: "Ce qui a compliqué la situation et comment j'ai réagi" },
  { key: "resultat", label: "Résultat", placeholder: "Ce que ça a apporté, ce que j'en retiens" },
];

export const VAE_GLOSSAIRE = [
  { terme: "VAE", def: "Validation des Acquis de l'Expérience : obtenir un diplôme à partir de son expérience." },
  { terme: "France VAE", def: "Portail public unique qui centralise les démarches de VAE (france-vae.gouv.fr)." },
  { terme: "Recevabilité", def: "Étape qui vérifie que ton expérience correspond au diplôme visé (dossier de faisabilité)." },
  { terme: "Dossier de validation", def: "Le dossier où tu décris tes situations de travail prouvant les compétences (ex-Livret 2)." },
  { terme: "Bloc de compétences", def: "Ensemble cohérent de compétences ; le DEAS en compte 5. La VAE peut valider bloc par bloc." },
  { terme: "Validation partielle", def: "Le jury valide une partie des blocs ; les autres se complètent ensuite (formation, nouvelle expérience)." },
  { terme: "Accompagnement VAE", def: "Aide (souvent financée) pour construire ton dossier et préparer le jury." },
  { terme: "Jury VAE", def: "Instance qui évalue ton dossier et t'interroge à l'oral pour décider de la validation." },
];

export const VAE_DOSSIER_CHECKLIST = [
  "Recevabilité obtenue",
  "4 à 6 situations de travail décrites",
  "Les 11 compétences sont couvertes au moins une fois",
  "Chaque compétence est reliée à une situation concrète",
  "Écriture au 'je', gestes et raisonnement détaillés",
  "Anonymat respecté (personnes, collègues, établissement)",
  "Orthographe et lisibilité vérifiées",
  "Pièces justificatives rassemblées (contrats, fiches de poste, attestations)",
  "Dossier relu par l'accompagnateur ou un tiers",
  "Format et délais France VAE respectés",
];

export const VAE_JURY_QUESTIONS = [
  "Pouvez-vous nous présenter votre parcours et ce qui vous amène à la VAE ?",
  "Décrivez une situation où vous avez repéré une aggravation de l'état clinique. Qu'avez-vous fait ?",
  "Comment adaptez-vous un soin d'hygiène à une personne qui refuse ?",
  "Comment assurez-vous la traçabilité et la continuité des soins ?",
  "Comment prévenez-vous les risques (chute, escarre, fausse route) ?",
  "Qu'est-ce qui relève de votre rôle d'AS et qu'est-ce qui relève de l'IDE ?",
  "Comment travaillez-vous en équipe pluriprofessionnelle ?",
  "Une situation difficile avec un résident ou une famille : comment l'avez-vous gérée ?",
  "Comment participez-vous à la prévention du risque infectieux ?",
  "Si c'était à refaire, que changeriez-vous dans l'une de vos situations ?",
];

export const VAE_RESSOURCES = [
  { nom: "France VAE — portail officiel", url: "https://vae.gouv.fr/" },
  { nom: "Service-Public — la VAE", url: "https://www.service-public.fr/particuliers/vosdroits/F2401" },
  { nom: "Mon Compte Formation (CPF)", url: "https://www.moncompteformation.gouv.fr/" },
  { nom: "Référentiel DEAS (arrêté du 10 juin 2021) — Légifrance", url: "https://www.legifrance.gouv.fr/" },
];
