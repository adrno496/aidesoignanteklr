export const fiches = [
  { id: "fx_mod_4_plus_toilette_change", mod: "4", type: "cours",
    titre: "Toilette au lit et change : sécurité, pudeur et observation",
    resume: "Méthode, ordre des soins et points de vigilance de la toilette au lit et du change chez la personne dépendante.",
    tags: ["toilette", "change", "hygiene", "pudeur"],
    html: `<h3>Préparer le soin</h3>
<ul>
<li>Vérifier la <strong>prescription du soin</strong> et le degré d'autonomie (toilette stimulante vs toilette complète au lit).</li>
<li>Regrouper le matériel : 2 gants et 2 serviettes (haut/bas), savon doux, linge propre, sac à linge sale, sac DASRI si besoin.</li>
<li>Respecter la <span class="key" data-term="pudeur">pudeur</span> : fermer la porte, prévenir la personne, découvrir uniquement la zone lavée.</li>
<li>Régler la température de la pièce et de l'eau (eau confortable, vérifiée sur l'avant-bras).</li>
<li>Monter le lit à bonne hauteur pour préserver le dos du soignant (prévention TMS).</li>
</ul>
<h3>Ordre de la toilette (du plus propre au plus sale)</h3>
<table class="tbl">
<tr><th>Étape</th><th>Repère pratique</th></tr>
<tr><td>Visage</td><td>Yeux du coin interne vers l'externe, sans savon sur l'œil</td></tr>
<tr><td>Cou, oreilles, tronc, bras</td><td>Sécher les plis, espaces interdigitaux</td></tr>
<tr><td>Dos</td><td>Profiter pour observer les points d'appui (sacrum)</td></tr>
<tr><td>Jambes, pieds</td><td>Sécher entre les orteils (mycoses)</td></tr>
<tr><td>Région génito-anale</td><td>En dernier, gant dédié, d'avant en arrière</td></tr>
</table>
<div class="callout"><div class="callout-t">Sens du nettoyage périnéal</div>Toujours d'avant en arrière (vulve/méat vers l'anus) pour éviter de ramener des germes digestifs vers l'urètre et limiter le risque d'infection urinaire.</div>
<h3>Le change</h3>
<ul>
<li>Observer l'état cutané à chaque change : <strong>rougeur, macération, lésion</strong>.</li>
<li>Nettoyer, rincer, <strong>bien sécher</strong> avant de reposer une protection (la macération favorise la dermite et l'escarre).</li>
<li>Ne pas serrer la protection à l'excès ; vérifier la taille adaptée.</li>
<li>Tracer la qualité et la quantité des urines/selles dans les transmissions.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Du PROPRE vers le SALE » : visage d'abord, périnée en dernier, et on change de gant pour la zone intime.</div>
<div class="callout"><div class="callout-t">Observation = rôle clé AS</div>La toilette est un temps privilégié d'observation : état de la peau, douleur, mobilité, humeur, autonomie. Ces éléments sont transmis à l'IDE.</div>`,
    refs: ["Référentiel DEAS bloc 1 (arrêté du 10 juin 2021)", "Recommandations soins d'hygiène"] },

  { id: "fx_mod_4_plus_escarre_prevention", mod: "4", type: "cours",
    titre: "Prévention de l'escarre : repérer, soulager, mobiliser",
    resume: "Facteurs de risque, zones à risque et actions AS de prévention de l'escarre.",
    tags: ["escarre", "prevention", "appui", "mobilisation"],
    html: `<h3>Qu'est-ce qu'une escarre ?</h3>
<p>Une <span class="key" data-term="escarre">escarre</span> est une lésion cutanée d'origine ischémique liée à une <strong>pression prolongée</strong> des tissus entre l'os et le plan d'appui. Trois facteurs aggravent : la <strong>pression</strong>, le <strong>cisaillement</strong> et le <strong>frottement</strong>, majorés par l'humidité.</p>
<h3>Zones à risque selon la position</h3>
<table class="tbl">
<tr><th>Position</th><th>Zones d'appui principales</th></tr>
<tr><td>Décubitus dorsal</td><td>Sacrum, talons, occiput, coudes</td></tr>
<tr><td>Décubitus latéral</td><td>Trochanter, malléole, oreille, épaule</td></tr>
<tr><td>Position assise</td><td>Ischions, sacrum, talons</td></tr>
</table>
<h3>Repérer le risque</h3>
<ul>
<li>Outils d'évaluation utilisés dans le service (ex. échelle de <strong>Braden</strong> ou de Norton) : l'AS participe au repérage, l'évaluation relève de l'équipe.</li>
<li>Signe d'alerte : <strong>rougeur qui ne blanchit pas</strong> à la pression du doigt = stade 1, à signaler immédiatement.</li>
</ul>
<h3>Actions de prévention par l'AS</h3>
<ul>
<li><strong>Changer de position</strong> régulièrement selon le protocole (souvent toutes les 2 à 3 h), en alternant les appuis.</li>
<li>Utiliser les aides : matelas/coussin adaptés, cale-positionnement ; <strong>décharger les talons</strong>.</li>
<li>Mobiliser sans frotter ni traîner : soulever plutôt que glisser pour éviter le cisaillement.</li>
<li>Garder une peau <strong>propre, sèche et hydratée</strong> ; éviter la macération.</li>
<li>Veiller à l'<strong>hydratation et à l'alimentation</strong> (la dénutrition est un facteur majeur).</li>
<li>Ne <strong>jamais masser</strong> une rougeur ni utiliser de glaçons/sèche-cheveux (pratiques abandonnées).</li>
</ul>
<div class="callout"><div class="callout-t">Limite de rôle</div>Le pansement et le traitement d'une escarre constituée relèvent de l'IDE. L'AS prévient, observe, signale et participe aux mobilisations.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« P-C-F + H » : Pression, Cisaillement, Frottement, aggravés par l'Humidité = les ennemis de la peau.</div>`,
    refs: ["Recommandations prévention escarre HAS", "Référentiel DEAS bloc 1"] },

  { id: "fx_mod_4_plus_repas_elimination", mod: "4", type: "cours",
    titre: "Aide au repas et élimination : confort, sécurité, dignité",
    resume: "Installation, prévention des fausses routes, surveillance des éliminations et réfection de lit.",
    tags: ["repas", "fausse-route", "elimination", "lit"],
    html: `<h3>Aide au repas</h3>
<ul>
<li>Installer la personne <strong>assise, tête légèrement fléchie en avant</strong> (menton vers la poitrine), jamais en décubitus.</li>
<li>Adapter la <strong>texture</strong> selon la prescription (normal, haché, mixé, liquides épaissis).</li>
<li>Donner de petites quantités, respecter le rythme, vérifier la déglutition entre deux bouchées.</li>
<li>Maintenir la position assise au moins 20 à 30 min après le repas.</li>
</ul>
<div class="callout"><div class="callout-t">Fausse route</div>En cas de <span class="key" data-term="fausse route">fausse route</span> avec toux efficace : encourager à tousser. Si obstruction grave (pas d'air, pas de toux) : appliquer les gestes d'urgence (claques dorsales, compressions abdominales) et alerter. Tracer et transmettre tout épisode.</div>
<h3>Surveillance de l'élimination</h3>
<table class="tbl">
<tr><th>À observer</th><th>Exemples de signalement</th></tr>
<tr><td>Urines</td><td>Quantité, couleur, odeur, présence de sang, brûlures</td></tr>
<tr><td>Selles</td><td>Fréquence, consistance (échelle de Bristol), sang, absence prolongée</td></tr>
</table>
<ul>
<li>Respecter l'intimité : aide au bassin/urinal, accompagnement aux toilettes.</li>
<li>Surveiller la <strong>constipation</strong> (transit, douleurs) et la <strong>rétention urinaire</strong> (globe, agitation) ; signaler à l'IDE.</li>
<li>Pour la sonde urinaire : l'AS assure l'<strong>hygiène et la surveillance du sac</strong> (poche sous le niveau de la vessie, non posée au sol) ; la pose relève de l'IDE.</li>
</ul>
<h3>Réfection du lit</h3>
<ul>
<li>Lit <strong>inoccupé</strong> : refaire à plat, draps tendus sans pli (un pli = point de pression).</li>
<li>Lit <strong>occupé</strong> : travailler à deux si possible, par retournement latéral, en maintenant la sécurité et le confort.</li>
<li>Respecter le circuit du linge : linge sale dans le sac dédié, jamais posé au sol ni sur un autre lit.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Repas en sécurité = « ASSIS, MENTON, LENTEMENT, et on RESTE assis après ».</div>`,
    refs: ["Référentiel DEAS bloc 1", "Recommandations prévention fausses routes"] },
];

export const qcm = [
  { mod: "4", q: "Dans quel ordre réalise-t-on une toilette au lit ?", options: ["De la zone génitale vers le visage", "Du plus propre au plus sale, visage d'abord et région génito-anale en dernier", "Dans n'importe quel ordre", "Toujours les pieds en premier"], correct: 1,
    explication: "On lave du plus propre au plus sale pour éviter de contaminer les zones propres : visage en premier, région génito-anale en dernier avec un gant dédié.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Pour la toilette périnéale, le nettoyage se fait :", options: ["D'arrière en avant", "D'avant en arrière", "Par mouvements circulaires", "Indifféremment"], correct: 1,
    explication: "D'avant en arrière (du méat/vulve vers l'anus) pour ne pas ramener les germes digestifs vers l'urètre et limiter le risque d'infection urinaire.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Une escarre est principalement causée par :", options: ["Une infection virale", "Une pression prolongée des tissus entre l'os et le plan d'appui", "Une carence en vitamine C uniquement", "Une allergie cutanée"], correct: 1,
    explication: "L'escarre est une lésion ischémique due à une pression prolongée, aggravée par le cisaillement, le frottement et l'humidité.", ref: "Recommandations HAS escarre", diff: 1 },

  { mod: "4", q: "En décubitus dorsal, quelles zones sont les plus à risque d'escarre ?", options: ["Trochanters et malléoles", "Sacrum, talons et occiput", "Ischions uniquement", "Genoux et tibias"], correct: 1,
    explication: "En décubitus dorsal, les appuis principaux sont le sacrum, les talons, l'occiput et les coudes. Les trochanters et malléoles concernent le décubitus latéral.", ref: "Recommandations HAS escarre", diff: 2 },

  { mod: "4", q: "Face à une rougeur cutanée qui ne blanchit pas à la pression, l'AS doit :", options: ["La masser énergiquement", "Appliquer un glaçon", "La signaler immédiatement et soulager l'appui", "L'ignorer si la personne ne se plaint pas"], correct: 2,
    explication: "Une rougeur qui ne blanchit pas est un stade 1 d'escarre. Il faut soulager l'appui et signaler. Masser ou appliquer du froid sont des pratiques abandonnées et délétères.", ref: "Recommandations HAS escarre", diff: 2 },

  { mod: "4", q: "Quelle pratique est aujourd'hui DÉCONSEILLÉE pour prévenir l'escarre ?", options: ["Changer régulièrement de position", "Masser les points d'appui rougis", "Décharger les talons", "Garder la peau sèche"], correct: 1,
    explication: "Le massage des zones à risque ou rougies est abandonné car il peut aggraver les lésions tissulaires. On change de position, on décharge les appuis et on garde la peau sèche.", ref: "Recommandations HAS escarre", diff: 2 },

  { mod: "4", q: "Quelle position adopter pour aider une personne à manger afin de prévenir les fausses routes ?", options: ["Allongée à plat", "Assise, tête légèrement fléchie en avant", "Assise, tête en hyperextension vers l'arrière", "Couchée sur le côté"], correct: 1,
    explication: "La personne doit être assise, menton légèrement vers la poitrine. La tête en arrière ouvre les voies aériennes et augmente le risque de fausse route.", ref: "Recommandations fausses routes", diff: 1 },

  { mod: "4", q: "Après le repas d'une personne à risque de fausse route, il est recommandé de :", options: ["L'allonger aussitôt", "La maintenir assise au moins 20 à 30 minutes", "La faire marcher immédiatement", "La coucher sur le ventre"], correct: 1,
    explication: "Maintenir la position assise après le repas limite les reflux et les fausses routes retardées.", ref: "Recommandations fausses routes", diff: 1 },

  { mod: "4", q: "En cas de fausse route avec toux efficace, l'AS doit :", options: ["Donner à boire de grandes gorgées", "Frapper fort dans le dos immédiatement", "Encourager la personne à tousser et surveiller", "Allonger la personne"], correct: 2,
    explication: "Si la toux est efficace (la personne respire et tousse), on l'encourage à tousser sans interférer. Les manœuvres ne s'appliquent qu'en cas d'obstruction grave.", ref: "Gestes d'urgence DEAS", diff: 2 },

  { mod: "4", q: "Concernant la sonde urinaire, quel est le rôle de l'aide-soignant ?", options: ["Poser la sonde", "Assurer l'hygiène et surveiller le sac collecteur", "Changer le ballonnet", "Prescrire son retrait"], correct: 1,
    explication: "La pose et le retrait de la sonde relèvent de l'IDE. L'AS assure l'hygiène, surveille le débit et veille à ce que la poche reste sous le niveau de la vessie, sans toucher le sol.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Pour vider une poche à urine, on veille à ce que celle-ci soit :", options: ["Posée au sol pour la stabilité", "Au-dessus du niveau de la vessie", "Sous le niveau de la vessie et sans contact avec le sol", "Accrochée à la barrière côté tête"], correct: 2,
    explication: "La poche doit rester sous le niveau de la vessie pour éviter le reflux d'urine (risque infectieux) et ne jamais toucher le sol.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Pourquoi faut-il bien sécher la peau lors du change ?", options: ["Pour gagner du temps", "Parce que la macération favorise dermite et escarre", "Pour économiser le linge", "Cela n'a pas d'importance"], correct: 1,
    explication: "L'humidité prolongée (macération) fragilise la peau, favorise la dermite associée à l'incontinence et augmente le risque d'escarre.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Quel facteur général aggrave le plus le risque d'escarre ?", options: ["Une bonne hydratation", "La dénutrition", "L'activité physique régulière", "Un sommeil de qualité"], correct: 1,
    explication: "La dénutrition fragilise les tissus et retarde la cicatrisation : c'est un facteur de risque majeur d'escarre. L'AS surveille l'alimentation et l'hydratation.", ref: "Recommandations HAS escarre", diff: 2 },

  { mod: "4", q: "Lors de la mobilisation d'un patient au lit, pour éviter le cisaillement, il faut :", options: ["Le tirer en le glissant sur le drap", "Le soulever plutôt que le faire glisser", "Le tracter par un seul bras", "Relever fortement la tête de lit en permanence"], correct: 1,
    explication: "Glisser ou tirer le patient crée un cisaillement des tissus. On le soulève (drap de glisse, à deux) pour limiter les forces de cisaillement et de frottement.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Quelle est la bonne pratique pour le linge sale lors de la réfection du lit ?", options: ["Le poser au sol le temps du soin", "Le déposer sur le lit voisin", "Le mettre directement dans le sac à linge sale dédié", "Le secouer dans la chambre"], correct: 2,
    explication: "Le linge sale va directement dans le sac dédié, sans contact avec le sol ni un autre lit, et sans être secoué (dispersion de germes). C'est une règle d'hygiène de base.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Pourquoi tend-on soigneusement les draps lors de la réfection du lit ?", options: ["Pour l'esthétique uniquement", "Parce qu'un pli crée un point de pression favorisant l'escarre", "Pour rigidifier le matelas", "Cela n'a aucun intérêt clinique"], correct: 1,
    explication: "Un pli ou une miette sous le patient crée une zone de surpression localisée, facteur favorisant d'escarre. D'où l'importance de draps tendus et propres.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Lors du nettoyage du visage, comment essuie-t-on les yeux ?", options: ["De l'angle externe vers l'angle interne", "De l'angle interne vers l'angle externe, sans savon", "Avec le même coin de gant pour les deux yeux", "Avec du savon antiseptique"], correct: 1,
    explication: "On nettoie l'œil du coin interne vers le coin externe, sans savon, avec une zone propre du gant pour chaque œil afin d'éviter une contamination croisée.", ref: "Référentiel DEAS bloc 1", diff: 2 },

  { mod: "4", q: "Quel élément observé pendant la toilette l'AS doit-il transmettre à l'IDE ?", options: ["Uniquement la couleur des draps", "L'état cutané, la douleur, l'autonomie et l'humeur", "Rien, ce n'est pas son rôle", "Seulement la température de l'eau"], correct: 1,
    explication: "La toilette est un temps d'observation privilégié : état de la peau, douleur, mobilité, autonomie, comportement. Ces observations sont transmises pour adapter la prise en charge.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Pour décrire la consistance des selles dans les transmissions, quel outil est utilisé ?", options: ["L'échelle de Braden", "L'échelle de Bristol", "L'échelle de Glasgow", "L'échelle de Norton"], correct: 1,
    explication: "L'échelle de Bristol classe les selles selon leur consistance. Braden et Norton évaluent le risque d'escarre, Glasgow l'état de conscience.", ref: "Référentiel DEAS bloc 1", diff: 3 },

  { mod: "4", q: "Quand l'AS lave-t-il la région génito-anale lors de la toilette complète ?", options: ["En premier", "Au milieu du soin", "En dernier, avec un gant dédié", "Jamais, c'est à l'IDE"], correct: 2,
    explication: "La région génito-anale, zone la plus contaminée, se lave en dernier avec un gant et une serviette dédiés pour respecter l'ordre du plus propre au plus sale.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "Quelle attitude respecte la pudeur pendant la toilette ?", options: ["Découvrir entièrement la personne dès le début", "Laisser la porte ouverte pour la lumière", "Ne découvrir que la zone en cours de lavage", "Faire le soin sans prévenir"], correct: 2,
    explication: "Respecter la pudeur passe par prévenir la personne, fermer la porte et ne découvrir que la partie du corps en cours de toilette, en la recouvrant ensuite.", ref: "Référentiel DEAS bloc 1", diff: 1 },

  { mod: "4", q: "À quelle hauteur régler le lit avant de réaliser une toilette au lit ?", options: ["Le plus bas possible", "À hauteur confortable pour le dos du soignant", "Toujours en position déclive", "Peu importe la hauteur"], correct: 1,
    explication: "Régler le lit à bonne hauteur prévient les troubles musculo-squelettiques du soignant. On le remet en position basse et sécurisée après le soin.", ref: "Référentiel DEAS bloc 1", diff: 2 },
];

export const flashcards = [
  { mod: "4", recto: "Dans quel ordre lave-t-on lors d'une toilette au lit ?", verso: "Du plus propre au plus sale : visage d'abord, région génito-anale en dernier avec un gant dédié." },
  { mod: "4", recto: "Sens du nettoyage périnéal ?", verso: "Toujours d'avant en arrière, pour éviter de ramener les germes digestifs vers l'urètre." },
  { mod: "4", recto: "Définition de l'escarre ?", verso: "Lésion ischémique liée à une pression prolongée des tissus entre l'os et le plan d'appui." },
  { mod: "4", recto: "Trois forces favorisant l'escarre (+ un aggravant) ?", verso: "Pression, cisaillement, frottement, aggravés par l'humidité." },
  { mod: "4", recto: "Zones à risque d'escarre en décubitus dorsal ?", verso: "Sacrum, talons, occiput, coudes." },
  { mod: "4", recto: "Que signifie une rougeur qui ne blanchit pas à la pression ?", verso: "Escarre stade 1 : soulager l'appui et signaler immédiatement." },
  { mod: "4", recto: "Pratiques à NE PLUS faire sur une zone à risque d'escarre ?", verso: "Masser, appliquer du froid (glaçons) ou du chaud (sèche-cheveux)." },
  { mod: "4", recto: "Position pour aider à manger et prévenir les fausses routes ?", verso: "Assis, tête légèrement fléchie en avant (menton vers la poitrine), rester assis 20-30 min après." },
  { mod: "4", recto: "Conduite en cas de fausse route avec toux efficace ?", verso: "Encourager à tousser et surveiller, sans interférer." },
  { mod: "4", recto: "Rôle de l'AS vis-à-vis de la sonde urinaire ?", verso: "Hygiène et surveillance du sac (sous le niveau de la vessie, jamais au sol) ; la pose relève de l'IDE." },
  { mod: "4", recto: "Pourquoi bien sécher la peau lors du change ?", verso: "La macération favorise dermite et escarre." },
  { mod: "4", recto: "Pourquoi tendre les draps lors de la réfection du lit ?", verso: "Un pli crée un point de pression favorisant l'escarre." },
  { mod: "4", recto: "Échelle décrivant la consistance des selles ?", verso: "L'échelle de Bristol." },
  { mod: "4", recto: "Comment essuyer les yeux pendant la toilette ?", verso: "Du coin interne vers le coin externe, sans savon, zone propre du gant pour chaque œil." },
  { mod: "4", recto: "Pourquoi soulever plutôt que glisser le patient au lit ?", verso: "Pour éviter le cisaillement des tissus, facteur d'escarre." },
];
