// Pack MODULE 2 (complément) — Repérage et prévention des risques
// Chutes, escarres, fausses routes, dénutrition, déshydratation, maltraitance, risque infectieux.
// Bloc 1. DEAS, référentiel arrêté du 10 juin 2021 (modifié). Champ AS uniquement.
export const fiches = [
  {
    id: "fx_mod_2_plus_chutes_escarres", mod: "2", type: "cours",
    titre: "Prévenir les chutes et les escarres au quotidien",
    resume: "Repérer les facteurs de risque de chute et d'escarre et appliquer les mesures de prévention relevant de l'aide-soignant·e.",
    tags: ["chutes", "escarres", "prévention", "mobilisation", "appui"],
    html: `<h3>La chute : un risque majeur et multifactoriel</h3>
<p>La <span class="key" data-term="chute">chute</span> est rarement due à une seule cause. L'AS contribue au repérage des <strong>facteurs de risque</strong> et signale toute aggravation dans les <span class="key" data-term="transmissions">transmissions</span>.</p>
<table class="tbl">
<tr><th>Facteurs intrinsèques (liés à la personne)</th><th>Facteurs extrinsèques (liés à l'environnement)</th></tr>
<tr><td>Troubles de l'équilibre et de la marche, faiblesse musculaire, déficit visuel, troubles cognitifs, hypotension, certains traitements (à signaler à l'IDE).</td><td>Sol glissant ou encombré, mauvais éclairage, chaussures inadaptées, lit trop haut, absence de barre d'appui, tapis.</td></tr>
</table>
<div class="callout"><div class="callout-t">Mesures AS de prévention des chutes</div><ul>
<li>Sécuriser l'environnement : sol sec, chemin dégagé, éclairage, sonnette et effets personnels à portée de main.</li>
<li>Faire porter des <strong>chaussures fermées antidérapantes</strong>, vérifier les lunettes et les aides techniques (déambulateur, canne).</li>
<li>Régler le lit à la bonne hauteur, frein enclenché ; accompagner les premiers levers (risque d'<span class="key" data-term="hypotension orthostatique">hypotension orthostatique</span> : se lever en deux temps).</li>
<li>Proposer régulièrement d'aller aux toilettes (les déplacements pressés sont une cause fréquente).</li>
</ul></div>
<div class="callout"><div class="callout-t">La contention n'est pas une solution</div>La <span class="key" data-term="contention">contention</span> physique relève d'une <strong>prescription médicale</strong>, est une mesure d'exception, dangereuse, et ne dispense jamais de la surveillance. Les <strong>barrières de lit</strong> peuvent aggraver les blessures en cas d'enjambement : elles ne sont pas un moyen anti-chute systématique.</div>
<h3>L'escarre : une lésion d'appui évitable</h3>
<p>L'<span class="key" data-term="escarre">escarre</span> est une lésion de la peau et des tissus due à une <strong>pression prolongée</strong> sur une zone d'appui, qui prive les tissus d'oxygène. Elle survient surtout chez la personne alitée ou en fauteuil, dénutrie ou peu mobile.</p>
<table class="tbl">
<tr><th>Stade</th><th>Aspect</th></tr>
<tr><td>Stade 1</td><td>Rougeur qui ne blanchit pas à la pression (peau intacte) — signal d'alarme à transmettre.</td></tr>
<tr><td>Stade 2</td><td>Atteinte superficielle : phlyctène (cloque) ou désépidermisation.</td></tr>
<tr><td>Stade 3</td><td>Atteinte profonde du tissu sous-cutané (cratère).</td></tr>
<tr><td>Stade 4</td><td>Atteinte des muscles, tendons ou os.</td></tr>
</table>
<div class="callout"><div class="callout-t">Mesures AS de prévention des escarres</div><ul>
<li><strong>Changements de position</strong> réguliers selon le protocole / planning, en évitant le cisaillement (ne pas tirer mais soulever la personne).</li>
<li><strong>Observer la peau</strong> à chaque toilette, surtout aux points d'appui (sacrum, talons, trochanters, occiput, oreilles, coudes).</li>
<li>Garder une peau <strong>propre et sèche</strong> ; sécher en tamponnant, changer le linge souillé sans délai.</li>
<li><strong>Effleurage</strong> doux possible sur peau saine ; ne jamais masser ni frictionner une rougeur (cela aggrave la lésion).</li>
<li>Décharger les talons (coussin sous les mollets), utiliser le matelas / support adapté, draps tendus sans pli ni miette.</li>
<li>Maintenir une bonne hydratation et un bon apport alimentaire (lien escarre / dénutrition).</li>
</ul></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 4 piliers de la prévention d'escarre : <strong>« P.A.M.O. »</strong> — <strong>P</strong>ression (mobiliser/décharger), <strong>A</strong>limentation et hydratation, <strong>M</strong>obilité, <strong>O</strong>bservation de la peau.</div>`,
    refs: ["Module 2", "HAS — Prévention des escarres", "HAS — Prévention des chutes"]
  },
  {
    id: "fx_mod_2_plus_fausse_route_nutrition", mod: "2", type: "cours",
    titre: "Fausses routes, dénutrition et déshydratation",
    resume: "Repérer les risques liés à l'alimentation et à l'hydratation et appliquer les bonnes pratiques d'aide au repas.",
    tags: ["fausse route", "dénutrition", "déshydratation", "repas", "hydratation"],
    html: `<h3>La fausse route : prévenir l'inhalation</h3>
<p>La <span class="key" data-term="fausse route">fausse route</span> survient quand un aliment ou un liquide passe dans les voies respiratoires au lieu de l'œsophage. Elle est favorisée par les <span class="key" data-term="troubles de la déglutition">troubles de la déglutition</span> (dysphagie), fréquents chez la personne âgée, après un AVC ou en cas de troubles neurologiques.</p>
<div class="callout"><div class="callout-t">Aide au repas : les bons réflexes AS</div><ul>
<li><strong>Installation</strong> assise, tronc droit, tête légèrement penchée en avant (menton vers la poitrine) — jamais la tête en arrière.</li>
<li>Environnement <strong>calme</strong>, sans précipitation ; la personne ne parle pas la bouche pleine.</li>
<li>Petites bouchées, rythme adapté, vérifier que la bouche est vide avant la suivante.</li>
<li>Respecter les <strong>textures prescrites</strong> (haché, mixé) et l'<strong>épaississement des liquides</strong> décidés par l'IDE / le médecin / la diététicienne.</li>
<li>Vérifier l'état de la bouche et la pose des <strong>prothèses dentaires</strong>.</li>
<li>Rester <strong>présent·e</strong> pendant le repas d'une personne à risque ; maintenir la position assise un moment après le repas.</li>
</ul></div>
<div class="callout"><div class="callout-t">Conduite à tenir en cas de fausse route</div>Si la personne <strong>tousse et respire</strong> (obstruction partielle) : l'encourager à tousser, ne pas taper dans le dos, rester près d'elle. Si elle <strong>ne peut plus parler, tousser ni respirer</strong> (obstruction totale, signe de la main à la gorge) : alerter immédiatement et débuter les <strong>5 claques dans le dos puis 5 compressions abdominales (Heimlich)</strong> en alternance, appeler à l'aide. Toujours transmettre l'épisode.</div>
<h3>La dénutrition : un risque silencieux</h3>
<p>La <span class="key" data-term="dénutrition">dénutrition</span> est un déséquilibre entre les apports et les besoins de l'organisme. Elle fragilise (escarres, infections, chutes, perte d'autonomie). Le diagnostic relève du médecin, mais l'AS est en première ligne pour le <strong>repérage</strong>.</p>
<ul>
<li><strong>Signes d'alerte</strong> : perte de poids, vêtements/prothèses devenus trop larges, fonte musculaire, fatigue, plateaux non terminés, perte d'appétit.</li>
<li><strong>Surveillance AS</strong> : peser selon le protocole, surveiller et noter les <strong>quantités réellement consommées</strong>, transmettre toute baisse de prise alimentaire.</li>
<li><strong>Aide</strong> : enrichir l'environnement du repas (présentation, convivialité), respecter les goûts et le rythme, fractionner, aider à découper/ouvrir, proposer les compléments nutritionnels oraux (CNO) prescrits.</li>
</ul>
<h3>La déshydratation : surveiller les apports en eau</h3>
<p>La <span class="key" data-term="déshydratation">déshydratation</span> est un déficit en eau de l'organisme. La personne âgée y est très exposée car la <strong>sensation de soif diminue</strong> avec l'âge. Les épisodes de chaleur, la fièvre, les diarrhées et les vomissements aggravent le risque.</p>
<table class="tbl">
<tr><th>Signes à repérer et transmettre</th></tr>
<tr><td>Bouche et langue sèches, lèvres gercées, soif, pli cutané qui persiste (peau qui reste plissée), urines rares et foncées, somnolence, confusion, perte de poids rapide.</td></tr>
</table>
<div class="callout"><div class="callout-t">Mesures AS</div>Proposer activement à boire tout au long de la journée (ne pas attendre la soif), varier les boissons, mettre le verre à portée, aider à boire, respecter l'épaississement si dysphagie, surveiller la diurèse et signaler. La perfusion ou l'hypodermoclyse relèvent de l'IDE.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Fausse route, retenir la position : <strong>« Assis, menton baissé, bouche vide, jamais pressé. »</strong></div>`,
    refs: ["Module 2", "HAS — Dénutrition de la personne âgée", "Module 4 — Aide à l'alimentation"]
  },
  {
    id: "fx_mod_2_plus_maltraitance_infectieux", mod: "2", type: "cours",
    titre: "Repérer la maltraitance et prévenir le risque infectieux",
    resume: "Reconnaître les signes de maltraitance, agir par la bientraitance, et appliquer les précautions standard d'hygiène.",
    tags: ["maltraitance", "bientraitance", "risque infectieux", "précautions standard", "hygiène"],
    html: `<h3>Maltraitance et bientraitance</h3>
<p>La <span class="key" data-term="maltraitance">maltraitance</span> est tout acte ou absence d'acte qui porte atteinte à la dignité, à l'intégrité ou aux droits d'une personne. Elle peut être <strong>active</strong> (geste brutal, insulte) ou <strong>passive</strong> (négligence, oubli de soin).</p>
<table class="tbl">
<tr><th>Formes de maltraitance</th><th>Exemples</th></tr>
<tr><td>Physique</td><td>Coups, brutalité, contention abusive.</td></tr>
<tr><td>Psychologique / morale</td><td>Humiliation, menace, infantilisation, tutoiement non souhaité, chantage.</td></tr>
<tr><td>Négligence</td><td>Soins non faits, appel sans réponse, change tardif, dénutrition non repérée.</td></tr>
<tr><td>Financière / matérielle</td><td>Vol, abus de confiance, détournement.</td></tr>
<tr><td>Civique / sexuelle</td><td>Privation de droits, atteinte à l'intimité, abus sexuel.</td></tr>
</table>
<div class="callout"><div class="callout-t">Signes d'alerte chez la personne</div>Hématomes inexpliqués, peur, repli, anxiété à l'arrivée d'une personne, perte de poids, hygiène négligée, changement brutal de comportement. Ces signes s'<strong>observent</strong> et se <strong>transmettent</strong> ; l'AS ne pose pas de diagnostic.</div>
<div class="callout"><div class="callout-t">Obligation de signalement</div>Tout professionnel a le <strong>devoir de signaler</strong> une situation de maltraitance (le secret professionnel ne fait pas obstacle au signalement d'un danger). On en réfère à l'IDE / au cadre, on trace les faits de façon objective. Le <strong>3977</strong> est le numéro national d'écoute contre la maltraitance des personnes âgées et handicapées.</div>
<p>La <span class="key" data-term="bientraitance">bientraitance</span> est la démarche opposée : respect du rythme, des choix, de l'intimité et de la dignité ; frapper avant d'entrer, expliquer les gestes, recueillir le consentement, vouvoyer sauf accord, faire <strong>avec</strong> la personne.</p>
<h3>Prévenir le risque infectieux</h3>
<p>Le <span class="key" data-term="risque infectieux">risque infectieux</span> est le risque de transmettre des micro-organismes. Les <span class="key" data-term="infections associées aux soins">infections associées aux soins (IAS)</span> sont en grande partie évitables par l'hygiène. La principale voie de transmission est le <strong>contact manuel</strong>.</p>
<div class="callout"><div class="callout-t">Les précautions standard (pour TOUS, en permanence)</div><ul>
<li><strong>Hygiène des mains</strong> : friction hydro-alcoolique (FHA) ou lavage, avant et après chaque contact/soin, après retrait des gants.</li>
<li>Mains sans bijou, ongles courts sans vernis, manches courtes (« tenue mains nues »).</li>
<li><strong>Gants</strong> en cas de contact avec liquides biologiques, muqueuses, peau lésée ; un soin = une paire ; les gants ne remplacent pas l'hygiène des mains.</li>
<li>Tablier/surblouse, masque et lunettes si risque de projection.</li>
<li>Gestion des excreta et du linge sale sans le secouer ; tri des déchets (DASRI).</li>
<li><strong>Bionettoyage</strong> du « propre vers le sale », du « haut vers le bas », matériel et surfaces.</li>
</ul></div>
<table class="tbl">
<tr><th>Précautions complémentaires (en plus des standard, sur prescription)</th></tr>
<tr><td><strong>Contact (C)</strong> : ex. bactéries multirésistantes — gants et tablier. <strong>Gouttelettes (G)</strong> : ex. grippe — masque chirurgical. <strong>Air (A)</strong> : ex. tuberculose — masque FFP2.</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Pour la transmission croisée, l'hygiène des mains avant tout : <strong>« Les mains lavées sauvent des vies. »</strong> Et pour les précautions complémentaires : <strong>« C.G.A. = Contact, Gouttelettes, Air. »</strong></div>`,
    refs: ["Module 2", "Module 3 — Hygiène", "SF2H — Précautions standard"]
  }
];
export const qcm = [
  {
    mod: "2", q: "Parmi ces éléments, lequel est un facteur de risque de chute EXTRINSÈQUE ?",
    options: ["Les troubles de l'équilibre", "Un sol glissant et encombré", "Un déficit visuel", "Une faiblesse musculaire"],
    correct: 1,
    explication: "Un facteur extrinsèque est lié à l'environnement (sol, éclairage, chaussures, mobilier). Les troubles de l'équilibre, le déficit visuel et la faiblesse musculaire sont des facteurs intrinsèques, liés à la personne.",
    ref: "Module 2 — Chutes", diff: 1
  },
  {
    mod: "2", q: "Une rougeur qui ne disparaît pas à la pression au niveau du sacrum correspond à :",
    options: ["Un simple érythème sans gravité", "Une escarre de stade 1", "Une escarre de stade 3", "Une mycose"],
    correct: 1,
    explication: "Une rougeur persistante (qui ne blanchit pas à la pression) sur une zone d'appui est le premier signe d'escarre, soit le stade 1. C'est un signal d'alarme à transmettre immédiatement pour intensifier la prévention.",
    ref: "Module 2 — Escarres", diff: 1
  },
  {
    mod: "2", q: "Devant une rougeur d'appui débutante, l'aide-soignant·e doit :",
    options: ["Masser énergiquement la zone pour relancer la circulation", "Appliquer de l'alcool sur la rougeur", "Supprimer l'appui sur la zone et transmettre", "Percer la rougeur"],
    correct: 2,
    explication: "Il ne faut JAMAIS masser ni frictionner une rougeur : cela aggrave la lésion des tissus. La bonne conduite est de décharger la zone (changement de position) et de transmettre. Le massage et l'alcool sont des pratiques abandonnées.",
    ref: "Module 2 — Escarres", diff: 2
  },
  {
    mod: "2", q: "Quelles sont les zones d'appui à surveiller en priorité chez une personne alitée sur le dos ?",
    options: ["Le ventre et les genoux", "Le sacrum, les talons et l'occiput", "Les paumes des mains", "Le visage uniquement"],
    correct: 1,
    explication: "En décubitus dorsal, les principaux points d'appui sont le sacrum, les talons, l'occiput (arrière du crâne) et les coudes. Ces zones doivent être observées à chaque toilette et déchargées.",
    ref: "Module 2 — Escarres", diff: 2
  },
  {
    mod: "2", q: "Pour aider une personne à manger en prévenant la fausse route, la position correcte est :",
    options: ["Allongée à plat", "Assise, tête penchée en arrière", "Assise, tronc droit, menton légèrement baissé vers la poitrine", "Demi-assise, tête sur le côté"],
    correct: 2,
    explication: "La position assise, tronc droit, avec le menton légèrement fléchi vers la poitrine, protège les voies aériennes lors de la déglutition. La tête en arrière ouvre les voies respiratoires et favorise la fausse route.",
    ref: "Module 2 — Fausse route", diff: 1
  },
  {
    mod: "2", q: "Une personne s'étouffe pendant le repas : elle tousse fortement et arrive encore à respirer. Que faire ?",
    options: ["Donner immédiatement la manœuvre de Heimlich", "L'encourager à tousser et rester près d'elle", "Lui donner à boire un grand verre d'eau", "La coucher à plat"],
    correct: 1,
    explication: "Tant que la personne tousse et respire, l'obstruction est partielle : la toux est le mécanisme le plus efficace, il faut l'encourager et surveiller. Heimlich et les claques dans le dos ne s'appliquent qu'en cas d'obstruction TOTALE (la personne ne peut plus tousser, parler ni respirer).",
    ref: "Module 2 — Fausse route", diff: 3
  },
  {
    mod: "2", q: "En cas d'obstruction TOTALE des voies aériennes chez l'adulte conscient, on réalise :",
    options: ["Seulement un appel des secours sans geste", "5 claques dans le dos puis 5 compressions abdominales en alternance", "Un bouche-à-bouche immédiat", "Une mise en position latérale de sécurité"],
    correct: 1,
    explication: "Face à une obstruction totale chez l'adulte conscient, on alterne 5 claques vigoureuses entre les omoplates et 5 compressions abdominales (manœuvre de Heimlich), tout en alertant. La PLS et le bouche-à-bouche ne sont pas adaptés ici.",
    ref: "Module 2 — Urgence", diff: 3
  },
  {
    mod: "2", q: "Quel signe doit faire suspecter une déshydratation chez une personne âgée ?",
    options: ["Une peau bien hydratée et souple", "Un pli cutané qui persiste et des urines rares et foncées", "Une diurèse abondante et claire", "Une prise de poids rapide"],
    correct: 1,
    explication: "Le pli cutané persistant, la sécheresse buccale, des urines rares et foncées, et une confusion d'apparition récente évoquent une déshydratation. La personne âgée ressent moins la soif, d'où l'importance de proposer à boire régulièrement.",
    ref: "Module 2 — Déshydratation", diff: 2
  },
  {
    mod: "2", q: "Concernant l'hydratation de la personne âgée, l'attitude la plus adaptée est :",
    options: ["Attendre qu'elle réclame à boire", "Lui proposer activement à boire tout au long de la journée", "Limiter les boissons pour éviter les fuites urinaires", "Ne donner de l'eau qu'aux repas"],
    correct: 1,
    explication: "La sensation de soif diminuant avec l'âge, il ne faut pas attendre la demande : on propose à boire régulièrement, on varie les boissons et on met le verre à portée. Restreindre les boissons aggrave le risque de déshydratation et d'infection urinaire.",
    ref: "Module 2 — Déshydratation", diff: 1
  },
  {
    mod: "2", q: "Quel signe peut alerter sur une dénutrition que l'AS doit transmettre ?",
    options: ["Des vêtements et prothèses devenus trop larges", "Un bon appétit", "Une prise de poids", "Des plateaux toujours terminés"],
    correct: 0,
    explication: "La perte de poids se traduit souvent par des vêtements et des prothèses dentaires devenus trop larges, une fonte musculaire et des plateaux non finis. L'AS surveille et transmet les quantités réellement consommées ; le diagnostic relève du médecin.",
    ref: "Module 2 — Dénutrition", diff: 2
  },
  {
    mod: "2", q: "Le rôle de l'aide-soignant·e dans le repérage de la dénutrition consiste à :",
    options: ["Prescrire des compléments nutritionnels", "Calculer les besoins caloriques", "Peser selon le protocole et noter les quantités consommées", "Poser une sonde de nutrition"],
    correct: 2,
    explication: "L'AS pèse selon le protocole, observe l'appétit et trace ce qui est réellement mangé, puis transmet. La prescription des compléments, le calcul des besoins et la pose de sonde relèvent du médecin, de la diététicienne ou de l'IDE.",
    ref: "Module 2 — Dénutrition", diff: 2
  },
  {
    mod: "2", q: "Laisser volontairement une sonnette hors de portée d'une personne dépendante relève de :",
    options: ["Une organisation normale du service", "Une maltraitance par négligence", "Une mesure de sécurité", "Une décision médicale"],
    correct: 1,
    explication: "Priver une personne de son moyen d'appel est une maltraitance passive (négligence) : elle ne peut plus alerter en cas de besoin. La bientraitance impose au contraire de laisser sonnette et effets à portée de main.",
    ref: "Module 2 — Maltraitance", diff: 2
  },
  {
    mod: "2", q: "Face à des hématomes inexpliqués et un repli anxieux chez une personne accueillie, l'AS doit :",
    options: ["Poser le diagnostic de maltraitance et confronter la famille", "Garder l'information pour elle", "Observer objectivement, tracer les faits et alerter l'IDE/le cadre", "Ne rien noter pour ne pas accuser à tort"],
    correct: 2,
    explication: "L'AS ne diagnostique pas et ne mène pas l'enquête, mais elle a le devoir d'observer, de tracer les faits de manière factuelle et de signaler à l'IDE ou au cadre. Le secret professionnel ne fait pas obstacle au signalement d'un danger.",
    ref: "Module 2 — Maltraitance", diff: 3
  },
  {
    mod: "2", q: "Le 3977 est :",
    options: ["Le numéro des urgences médicales", "Le numéro national d'écoute contre la maltraitance des personnes âgées et handicapées", "Le numéro du SAMU", "Un numéro interne d'hôpital"],
    correct: 1,
    explication: "Le 3977 est le numéro national dédié à l'écoute et au signalement des situations de maltraitance envers les personnes âgées et les adultes en situation de handicap.",
    ref: "Module 2 — Maltraitance", diff: 1
  },
  {
    mod: "2", q: "Quelle action illustre la bientraitance au quotidien ?",
    options: ["Entrer dans la chambre sans frapper pour gagner du temps", "Tutoyer systématiquement la personne", "Frapper, se présenter et expliquer le soin avant de le réaliser", "Faire le soin à la place de la personne pour aller plus vite"],
    correct: 2,
    explication: "La bientraitance, c'est respecter l'intimité et la dignité : frapper avant d'entrer, se présenter, expliquer et recueillir le consentement, faire AVEC la personne. Le tutoiement imposé et l'absence de respect de l'intimité relèvent de la maltraitance ordinaire.",
    ref: "Module 2 — Bientraitance", diff: 1
  },
  {
    mod: "2", q: "Les précautions standard d'hygiène s'appliquent :",
    options: ["Uniquement aux patients porteurs d'une infection connue", "Pour tous les patients, en permanence, par tous les soignants", "Seulement au bloc opératoire", "Uniquement quand il y a du sang visible"],
    correct: 1,
    explication: "Les précautions standard s'appliquent à TOUS les patients en permanence, qu'un risque infectieux soit connu ou non, car un patient peut être porteur sans le savoir. Elles sont la base de la prévention des infections associées aux soins.",
    ref: "Module 2 — Risque infectieux", diff: 1
  },
  {
    mod: "2", q: "Le geste le plus efficace pour prévenir la transmission croisée des micro-organismes est :",
    options: ["Le port systématique de gants", "L'hygiène des mains (friction hydro-alcoolique ou lavage)", "Le port d'un masque", "La désinfection du sol"],
    correct: 1,
    explication: "L'hygiène des mains est le geste de prévention numéro un, car le contact manuel est la principale voie de transmission. Les gants ne remplacent pas l'hygiène des mains : on se désinfecte les mains après les avoir retirés.",
    ref: "Module 2 — Risque infectieux", diff: 1
  },
  {
    mod: "2", q: "Concernant le port de gants lors des soins, quelle affirmation est exacte ?",
    options: ["Une même paire peut servir pour plusieurs patients", "Les gants dispensent de l'hygiène des mains", "On met des gants au contact de liquides biologiques, muqueuses ou peau lésée, un soin = une paire", "Les gants doivent être portés en permanence"],
    correct: 2,
    explication: "Les gants se portent en cas de contact avec des liquides biologiques, des muqueuses ou une peau lésée, à raison d'une paire par soin et par patient. Ils ne remplacent jamais l'hygiène des mains, qui doit être faite après leur retrait.",
    ref: "Module 2 — Risque infectieux", diff: 2
  },
  {
    mod: "2", q: "Pour un patient nécessitant des précautions complémentaires de type 'Air' (ex. tuberculose), le soignant porte :",
    options: ["Un masque chirurgical", "Un masque FFP2", "Seulement des gants", "Aucune protection particulière"],
    correct: 1,
    explication: "Les précautions 'Air' imposent un masque de protection respiratoire FFP2 pour le soignant. Le masque chirurgical correspond aux précautions 'Gouttelettes' (ex. grippe), et le tablier/gants aux précautions 'Contact'.",
    ref: "Module 2 — Précautions complémentaires", diff: 3
  },
  {
    mod: "2", q: "La règle de base du bionettoyage d'une chambre est de procéder :",
    options: ["Du sale vers le propre et du bas vers le haut", "Du propre vers le sale et du haut vers le bas", "Dans n'importe quel ordre", "Uniquement avec de l'eau claire"],
    correct: 1,
    explication: "Le bionettoyage se fait toujours du plus propre vers le plus sale et du haut vers le bas, pour éviter de recontaminer une surface déjà nettoyée. On respecte les produits et le temps de contact préconisés.",
    ref: "Module 2 — Bionettoyage", diff: 2
  },
  {
    mod: "2", q: "La mise en place d'une contention physique chez une personne à risque de chute :",
    options: ["Peut être décidée librement par l'AS", "Relève d'une prescription médicale et reste une mesure d'exception", "Est un moyen de prévention recommandé en routine", "Dispense de toute surveillance"],
    correct: 1,
    explication: "La contention physique nécessite une prescription médicale, est une mesure d'exception, et n'est jamais un moyen de prévention systématique des chutes (elle est même dangereuse). Elle impose une surveillance renforcée et ne se décide jamais seule.",
    ref: "Module 2 — Chutes / Contention", diff: 3
  }
];
export const flashcards = [
  { mod: "2", recto: "Différence entre facteur de chute intrinsèque et extrinsèque ?", verso: "Intrinsèque = lié à la personne (équilibre, vue, force, traitements). Extrinsèque = lié à l'environnement (sol, éclairage, chaussures, mobilier)." },
  { mod: "2", recto: "Que faire devant une rougeur d'appui qui ne blanchit pas ?", verso: "Ne jamais masser : décharger la zone (changement de position) et transmettre. C'est une escarre de stade 1." },
  { mod: "2", recto: "Cite 4 points d'appui à surveiller chez une personne alitée sur le dos.", verso: "Sacrum, talons, occiput, coudes (et trochanters en position latérale)." },
  { mod: "2", recto: "Bonne position pour aider une personne à manger et éviter la fausse route ?", verso: "Assise, tronc droit, menton légèrement baissé vers la poitrine ; jamais la tête en arrière." },
  { mod: "2", recto: "La personne tousse fort et respire encore pendant le repas : que fait l'AS ?", verso: "Obstruction partielle : encourager à tousser et rester près d'elle. Pas de Heimlich tant qu'elle tousse et respire." },
  { mod: "2", recto: "Obstruction TOTALE des voies aériennes chez l'adulte conscient : geste ?", verso: "5 claques dans le dos puis 5 compressions abdominales (Heimlich) en alternance, et alerter." },
  { mod: "2", recto: "Trois signes de déshydratation chez la personne âgée ?", verso: "Pli cutané persistant, bouche sèche, urines rares et foncées (parfois confusion, somnolence)." },
  { mod: "2", recto: "Pourquoi proposer à boire régulièrement à la personne âgée ?", verso: "Parce que la sensation de soif diminue avec l'âge : ne pas attendre la demande pour prévenir la déshydratation." },
  { mod: "2", recto: "Rôle de l'AS face à la dénutrition ?", verso: "Repérer (perte de poids, plateaux non finis), peser selon protocole, noter les quantités consommées et transmettre. Pas de prescription." },
  { mod: "2", recto: "Maltraitance active vs passive ?", verso: "Active = geste/parole nuisible (coup, humiliation). Passive = négligence/omission (soin non fait, appel sans réponse)." },
  { mod: "2", recto: "À quoi correspond le 3977 ?", verso: "Numéro national d'écoute et de signalement de la maltraitance des personnes âgées et handicapées." },
  { mod: "2", recto: "Quand appliquer les précautions standard d'hygiène ?", verso: "Pour TOUS les patients, en permanence, qu'un risque infectieux soit connu ou non." },
  { mod: "2", recto: "Geste n°1 de prévention de la transmission croisée ?", verso: "L'hygiène des mains (friction hydro-alcoolique ou lavage). Les gants ne la remplacent pas." },
  { mod: "2", recto: "Masque chirurgical ou FFP2 selon le type de précaution ?", verso: "Gouttelettes (ex. grippe) = masque chirurgical. Air (ex. tuberculose) = masque FFP2." },
  { mod: "2", recto: "Sens du bionettoyage d'une surface/chambre ?", verso: "Du propre vers le sale et du haut vers le bas, avec produit et temps de contact adaptés." }
];
