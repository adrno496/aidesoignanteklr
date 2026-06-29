export const fiches = [
  { id: "fx_mod_8_plus_bionettoyage_principes", mod: "8", type: "cours",
    titre: "Bionettoyage : principes, étapes et règle du plus propre au plus sale",
    resume: "Maîtriser la logique du bionettoyage et les sens de progression pour ne pas recontaminer une zone déjà nettoyée.",
    tags: ["bionettoyage", "hygiène", "détergent-désinfectant"],
    html: `<h3>Qu'est-ce que le bionettoyage ?</h3>
<p>Le <span class="key" data-term="bionettoyage">bionettoyage</span> est l'ensemble des opérations destinées à réduire la contamination microbienne des surfaces. Il associe trois actions : une <strong>action mécanique</strong> (frotter, essuyer), une <strong>action chimique</strong> (le produit détergent et/ou désinfectant) et le <strong>respect d'un temps de contact</strong>. Il vise à diminuer la <span class="key" data-term="biocontamination">biocontamination</span> pour limiter le risque d'<span class="key" data-term="infection associée aux soins">infection associée aux soins</span>.</p>
<h3>Les 4 grands principes</h3>
<ul>
<li><strong>Du plus propre vers le plus sale</strong> : on commence par les zones les moins contaminées pour finir par les plus contaminées.</li>
<li><strong>Du haut vers le bas</strong> : la poussière et les salissures tombent ; on nettoie d'abord les surfaces hautes, puis le sol en dernier.</li>
<li><strong>Du plus loin vers la sortie</strong> : on recule vers la porte pour ne pas remarcher sur une surface fraîchement nettoyée.</li>
<li><strong>Un support de nettoyage par zone</strong> : ne jamais réutiliser une lavette ou une frange souillée sur une surface propre.</li>
</ul>
<div class="callout"><div class="callout-t">Détergence puis désinfection</div><p>On ne désinfecte bien que ce qui est propre : les salissures protègent les micro-organismes et neutralisent le désinfectant. D'où la logique <strong>nettoyer d'abord, désinfecter ensuite</strong>, sauf avec un produit détergent-désinfectant qui combine les deux étapes en respectant le temps de contact.</p></div>
<h3>La règle du plus propre au plus sale, concrètement</h3>
<p>Dans une chambre, on traite par exemple : <strong>adaptable et table de chevet</strong> (contact alimentaire) avant les <strong>poignées et interrupteurs</strong>, puis l'<strong>environnement du lit</strong>, le <strong>cabinet de toilette / lavabo</strong>, et enfin les <strong>WC</strong> et le <strong>sol</strong>. La cuvette des toilettes se nettoie en tout dernier, avec un matériel dédié.</p>
<table class="tbl">
<tr><th>Zone</th><th>Ordre</th><th>Pourquoi</th></tr>
<tr><td>Surfaces de contact alimentaire (adaptable)</td><td>1</td><td>Plus propre, contact avec la nourriture</td></tr>
<tr><td>Points de contact (poignées, sonnette, barrières)</td><td>2</td><td>Mains fréquentes, vecteurs croisés</td></tr>
<tr><td>Lavabo / point d'eau</td><td>3</td><td>Humide, plus contaminé</td></tr>
<tr><td>WC / sol</td><td>4</td><td>Le plus sale, matériel dédié</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>« HPL »</strong> : <strong>H</strong>aut → bas, <strong>P</strong>ropre → sale, vers la sortie (<strong>L</strong>oin → porte). Trois sens à respecter en même temps.</p></div>
<h3>Méthodes d'essuyage</h3>
<ul>
<li><strong>Essuyage humide</strong> des surfaces : capte la poussière au lieu de la disperser (jamais de balayage à sec ni de plumeau dans un lieu de soin).</li>
<li><strong>Méthode de pliage en 8 / changement de face</strong> de la lavette : on utilise une face propre par surface.</li>
<li><strong>Pré-imprégnation</strong> des franges et lavettes (système de dosage maîtrisé), de plus en plus utilisée pour garantir la bonne dilution.</li>
</ul>`,
    refs: ["Référentiel DEAS arrêté du 10 juin 2021 - Bloc 2 / Module 8", "Recommandations SF2H bionettoyage des surfaces"] },

  { id: "fx_mod_8_plus_produits_circuits", mod: "8", type: "cours",
    titre: "Produits d'entretien, détergent-désinfectant et circuits propre/sale",
    resume: "Distinguer les produits, comprendre la marche en avant et la séparation des circuits propre et sale.",
    tags: ["détergent-désinfectant", "circuits", "marche en avant"],
    html: `<h3>Distinguer les produits</h3>
<table class="tbl">
<tr><th>Produit</th><th>Action</th><th>Usage</th></tr>
<tr><td><span class="key" data-term="détergent">Détergent</span></td><td>Décolle et élimine les salissures (graisses, matières organiques)</td><td>Nettoyage, première étape</td></tr>
<tr><td><span class="key" data-term="désinfectant">Désinfectant</span></td><td>Détruit ou inactive les micro-organismes sur une surface propre</td><td>Après nettoyage, temps de contact respecté</td></tr>
<tr><td><span class="key" data-term="détergent-désinfectant">Détergent-désinfectant</span> (DD)</td><td>Combine nettoyage et désinfection en une étape</td><td>Bionettoyage courant des surfaces</td></tr>
<tr><td>Détartrant</td><td>Dissout le calcaire</td><td>Sanitaires, robinetterie</td></tr>
</table>
<div class="callout"><div class="callout-t">Règles d'or des produits</div><ul>
<li><strong>Respecter la dilution</strong> indiquée par le fabricant : un produit trop dilué est inefficace, trop concentré il est corrosif et coûteux.</li>
<li><strong>Respecter le temps de contact</strong> : le désinfectant doit rester humide sur la surface le temps prescrit.</li>
<li><strong>Ne jamais mélanger</strong> deux produits (ex. eau de Javel + détartrant acide = vapeurs toxiques de chlore).</li>
<li><strong>Conserver l'étiquetage</strong> et le pictogramme de danger ; ne jamais transvaser sans réétiqueter.</li>
</ul></div>
<h3>La marche en avant et la séparation des circuits</h3>
<p>Le principe de <span class="key" data-term="marche en avant">marche en avant</span> impose que le <strong>propre et le sale ne se croisent jamais</strong>, ni dans l'espace ni dans le temps. On distingue :</p>
<ul>
<li><strong>Circuit propre</strong> : linge propre, matériel décontaminé, repas, médicaments.</li>
<li><strong>Circuit sale</strong> : linge sale, déchets, matériel souillé, vaisselle sale.</li>
</ul>
<p>Concrètement : chariots distincts ou compartiments séparés, horaires différents, plans de travail et locaux dédiés (local propre / <span class="key" data-term="local sale">local sale (utilité sale)</span>). Quand un seul couloir existe, on sépare dans le <strong>temps</strong>.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>« Le propre ne recule jamais »</strong> : un objet qui est passé en zone sale ne revient pas en zone propre sans retraitement.</p></div>
<h3>Le chariot de ménage</h3>
<ul>
<li>Préparé et propre en début de service, rangé et nettoyé en fin de service.</li>
<li><strong>Code couleur</strong> du matériel (lavettes/franges) selon les zones : par convention fréquente <strong>rouge = sanitaires/WC</strong>, <strong>bleu = surfaces et mobilier</strong>, <strong>jaune = lavabo/point d'eau</strong>, <strong>vert = cuisine/office</strong>. Le code exact est défini par le protocole de l'établissement.</li>
<li>Un seau / un support par zone : on ne trempe pas une lavette WC dans le seau des surfaces.</li>
</ul>
<div class="callout"><div class="callout-t">Périmètre AS</div><p>L'aide-soignant·e applique les protocoles d'hygiène et de bionettoyage. Le choix des protocoles, la validation des produits et la surveillance épidémiologique relèvent de l'<strong>équipe opérationnelle d'hygiène (EOH)</strong> et de l'encadrement.</p></div>`,
    refs: ["Référentiel DEAS arrêté du 10 juin 2021 - Module 8", "Code couleur matériel - protocoles établissement"] },

  { id: "fx_mod_8_plus_dechets_linge", mod: "8", type: "cours",
    titre: "Déchets (DASRI / DAOM) et circuit du linge",
    resume: "Trier les déchets de soins, identifier les emballages et appliquer les règles du linge propre et sale.",
    tags: ["DASRI", "déchets", "linge"],
    html: `<h3>Le tri des déchets</h3>
<table class="tbl">
<tr><th>Filière</th><th>Contenu</th><th>Conditionnement</th></tr>
<tr><td><span class="key" data-term="DAOM">DAOM</span> (déchets assimilés aux ordures ménagères)</td><td>Déchets non souillés : essuie-mains, emballages, restes alimentaires</td><td>Sac noir/transparent</td></tr>
<tr><td><span class="key" data-term="DASRI">DASRI</span> (déchets d'activité de soins à risque infectieux)</td><td>Déchets souillés de sang/liquides biologiques, matériel piquant/coupant/tranchant</td><td>Sac jaune ; <strong>collecteur jaune rigide</strong> pour le piquant</td></tr>
</table>
<div class="callout"><div class="callout-t">Pourquoi trier les DASRI ?</div><p>Les DASRI présentent un <strong>risque infectieux, mécanique (piqûre/coupure) ou psycho-émotionnel</strong>. Ils suivent une filière spécifique d'élimination (incinération ou prétraitement par désinfection) tracée jusqu'à destruction. Un mauvais tri = surcoût et risque pour le personnel de collecte.</p></div>
<h3>Règles de manipulation des DASRI</h3>
<ul>
<li><strong>Éliminer au plus près du soin</strong> : le collecteur d'aiguilles se trouve à portée de main, jamais transporté à pleine main.</li>
<li><strong>Ne jamais recapuchonner</strong> une aiguille (geste IDE, mais règle valable pour tous).</li>
<li><strong>Remplir au maximum à la limite indiquée</strong> sur le collecteur, jamais au-delà ; fermeture définitive après.</li>
<li><strong>Ne pas tasser</strong> avec la main, ne jamais transvaser un sac DASRI.</li>
<li>Fermer les sacs avant qu'ils ne soient pleins (3/4) et les saisir par le haut, loin du corps.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>Jaune = danger biologique.</strong> Tout ce qui touche au sang ou pique/coupe va dans le jaune ; le reste va dans le noir.</p></div>
<h3>Le circuit du linge</h3>
<ul>
<li><strong>Linge sale</strong> : évacué immédiatement dans un sac dédié, fermé, sans tri manuel au lit du patient et sans le poser au sol. Le linge souillé de liquides biologiques peut suivre un conditionnement spécifique (sac hydrosoluble).</li>
<li><strong>Ne pas plaquer le linge sale contre la tenue</strong> : risque de contamination de la blouse.</li>
<li><strong>Linge propre</strong> : stocké dans un local propre, transporté couvert, manipulé avec des mains propres ; on ne sort que ce dont on a besoin.</li>
<li><strong>Marche en avant</strong> : le linge sale et le linge propre ne se croisent jamais (chariots et horaires distincts).</li>
</ul>
<div class="callout"><div class="callout-t">Confort et observation</div><p>Au-delà de l'hygiène, le change du linge est un temps d'<strong>observation</strong> (état cutané, souillures, douleur à la mobilisation) et de <strong>confort</strong> : drap bien tendu sans pli pour prévenir les escarres. Toute anomalie est transmise et tracée.</p></div>`,
    refs: ["Référentiel DEAS arrêté du 10 juin 2021 - Module 8", "Réglementation DASRI - filière d'élimination"] },
];

export const qcm = [
  { mod: "8", q: "Quel est le sens correct de progression lors du bionettoyage d'une chambre ?", options: ["Du sale vers le propre", "Du plus propre vers le plus sale", "Du bas vers le haut", "En partant de la porte vers le fond"], correct: 1,
    explication: "On nettoie toujours du plus propre vers le plus sale, du haut vers le bas, et en reculant vers la sortie, pour ne pas recontaminer une zone déjà traitée.", ref: "Module 8 - bionettoyage", diff: 1 },

  { mod: "8", q: "Pourquoi nettoie-t-on (détergence) avant de désinfecter ?", options: ["Pour gagner du temps", "Parce que les salissures protègent les microbes et neutralisent le désinfectant", "Parce que le désinfectant abîme les surfaces propres", "C'est sans importance, l'ordre est libre"], correct: 1,
    explication: "On ne désinfecte bien que ce qui est propre : les matières organiques font écran et inactivent le désinfectant. D'où détergence puis désinfection (ou un détergent-désinfectant respectant le temps de contact).", ref: "Module 8 - produits", diff: 1 },

  { mod: "8", q: "Quels sont les trois éléments indispensables à l'efficacité d'un bionettoyage ?", options: ["Eau chaude, savon, séchage", "Action mécanique, action chimique, temps de contact", "Gants, masque, tablier", "Vitesse, force, parfum"], correct: 1,
    explication: "Le bionettoyage repose sur l'action mécanique (frotter), l'action chimique (le produit) et le respect du temps de contact prescrit par le fabricant.", ref: "Module 8 - bionettoyage", diff: 2 },

  { mod: "8", q: "Dans quel récipient élimine-t-on une aiguille usagée ?", options: ["Sac noir DAOM", "Sac jaune souple", "Collecteur jaune rigide pour objets piquants/coupants/tranchants", "Poubelle de la chambre"], correct: 2,
    explication: "Le matériel piquant, coupant ou tranchant va dans un collecteur rigide jaune (OPCT), éliminé en DASRI, pour prévenir les accidents d'exposition au sang.", ref: "Module 8 - DASRI", diff: 1 },

  { mod: "8", q: "Que signifie l'acronyme DASRI ?", options: ["Déchets assimilés sans risque industriel", "Déchets d'activité de soins à risque infectieux", "Dispositifs antiseptiques de soins ré-utilisables individuels", "Désinfection automatique des surfaces et révision instrumentale"], correct: 1,
    explication: "DASRI = Déchets d'Activité de Soins à Risque Infectieux : déchets souillés de sang/liquides biologiques ou piquants/coupants, conditionnés en jaune et suivant une filière d'élimination spécifique.", ref: "Module 8 - déchets", diff: 1 },

  { mod: "8", q: "Un essuie-mains en papier non souillé jeté après un lavage de mains va dans :", options: ["Le sac jaune DASRI", "Le collecteur rigide", "Le sac DAOM (ordures ménagères)", "Le bac à linge sale"], correct: 2,
    explication: "Non souillé de produit biologique, il ne présente pas de risque infectieux : il suit la filière des déchets assimilés aux ordures ménagères (DAOM). Sur-trier en DASRI engendre un surcoût inutile.", ref: "Module 8 - tri des déchets", diff: 2 },

  { mod: "8", q: "Le principe de la marche en avant signifie que :", options: ["On marche toujours vers l'avant en nettoyant", "Le propre et le sale ne se croisent jamais, dans l'espace ou dans le temps", "On avance le chariot sans s'arrêter", "On nettoie d'abord les couloirs"], correct: 1,
    explication: "La marche en avant garantit la non-rencontre des circuits propre et sale. À défaut de locaux séparés, on les sépare dans le temps (horaires différents).", ref: "Module 8 - circuits", diff: 2 },

  { mod: "8", q: "Pourquoi ne faut-il jamais mélanger l'eau de Javel avec un détartrant acide ?", options: ["Cela diminue le parfum", "Cela produit des vapeurs toxiques de chlore", "Cela rend les surfaces collantes", "Cela n'a aucun effet"], correct: 1,
    explication: "Le mélange Javel + acide libère du dichlore, un gaz irritant et toxique pour les voies respiratoires. On ne mélange jamais deux produits d'entretien.", ref: "Module 8 - produits", diff: 2 },

  { mod: "8", q: "Lors du change, le linge sale doit être :", options: ["Posé au sol en attendant", "Plaqué contre la blouse pour le transporter", "Trié manuellement dans la chambre", "Évacué immédiatement dans un sac dédié fermé, sans le plaquer contre soi"], correct: 3,
    explication: "Le linge sale est évacué directement dans un sac dédié, fermé, tenu à distance du corps. On ne le pose pas au sol et on ne le trie pas manuellement au lit du patient.", ref: "Module 8 - linge", diff: 1 },

  { mod: "8", q: "Quel geste est INTERDIT avec une aiguille usagée ?", options: ["L'éliminer immédiatement au plus près du soin", "La recapuchonner avant de la jeter", "La déposer dans le collecteur rigide", "La déposer sans la toucher"], correct: 1,
    explication: "Le recapuchonnage est interdit : c'est la principale cause d'accident d'exposition au sang par piqûre. L'aiguille est éliminée d'emblée dans le collecteur rigide.", ref: "Module 8 - DASRI", diff: 1 },

  { mod: "8", q: "Pourquoi privilégie-t-on l'essuyage humide plutôt que le balayage à sec ?", options: ["C'est plus rapide", "L'humide capte la poussière au lieu de la disperser dans l'air", "Le sec abîme le sol", "Pour économiser l'eau"], correct: 1,
    explication: "Le balayage à sec ou le plumeau remettent en suspension poussières et micro-organismes. L'essuyage humide les capte, ce qui est essentiel en lieu de soin.", ref: "Module 8 - méthodes", diff: 2 },

  { mod: "8", q: "Dans une chambre, dans quel ordre nettoyer ces éléments ?", options: ["WC, puis lavabo, puis adaptable", "Adaptable, puis lavabo, puis WC", "Sol d'abord, puis mobilier", "Peu importe l'ordre"], correct: 1,
    explication: "Du plus propre au plus sale : adaptable (contact alimentaire) → lavabo → WC en dernier, avec un matériel dédié pour les sanitaires.", ref: "Module 8 - bionettoyage", diff: 2 },

  { mod: "8", q: "Le code couleur des lavettes/franges sert à :", options: ["Décorer le chariot", "Éviter d'utiliser un même support sur des zones de propreté différentes", "Indiquer le jour de la semaine", "Repérer le service de rattachement"], correct: 1,
    explication: "Le code couleur (selon le protocole de l'établissement) dédie un matériel à chaque type de zone (sanitaires, mobilier, point d'eau...) pour éviter le transfert de contamination.", ref: "Module 8 - matériel", diff: 2 },

  { mod: "8", q: "Que faut-il respecter impérativement pour qu'un désinfectant agisse ?", options: ["Le faire mousser abondamment", "Le rincer aussitôt", "Le laisser agir pendant le temps de contact indiqué par le fabricant", "L'utiliser à l'eau froide uniquement"], correct: 2,
    explication: "L'efficacité dépend du temps de contact : la surface doit rester humide de produit le temps prescrit. Rincer ou essuyer trop tôt annule l'action désinfectante.", ref: "Module 8 - produits", diff: 1 },

  { mod: "8", q: "Un détergent-désinfectant (DD) permet :", options: ["Uniquement de détartrer", "De nettoyer et désinfecter en une seule étape", "De parfumer les locaux", "De remplacer le lavage des mains"], correct: 1,
    explication: "Le détergent-désinfectant combine détergence et désinfection en une opération, sous réserve de respecter dilution et temps de contact. Il est très utilisé pour le bionettoyage courant.", ref: "Module 8 - produits", diff: 1 },

  { mod: "8", q: "Le linge propre doit être :", options: ["Stocké au sol du couloir", "Transporté à découvert", "Stocké dans un local propre et transporté couvert, manipulé mains propres", "Mélangé au linge sale pour gagner de la place"], correct: 2,
    explication: "Le linge propre relève du circuit propre : local propre, transport couvert, mains propres, et on ne sort que le nécessaire. Il ne croise jamais le linge sale.", ref: "Module 8 - linge", diff: 1 },

  { mod: "8", q: "Lors du remplissage d'un collecteur d'objets piquants, il faut :", options: ["Le remplir au-delà de la limite pour économiser", "Tasser le contenu avec la main", "S'arrêter à la limite de remplissage indiquée puis le fermer définitivement", "Le vider et le réutiliser"], correct: 2,
    explication: "On ne dépasse jamais le trait de remplissage et on ne tasse jamais à la main. Une fois la limite atteinte, le collecteur est fermé définitivement, sans être rouvert.", ref: "Module 8 - DASRI", diff: 2 },

  { mod: "8", q: "Pourquoi tend-on bien le drap, sans pli, lors de la réfection du lit ?", options: ["Pour l'esthétique uniquement", "Pour prévenir les escarres et améliorer le confort", "Pour utiliser moins de linge", "Cela n'a pas d'importance"], correct: 1,
    explication: "Un drap plissé crée des points de pression et de cisaillement favorisant les escarres. Un drap tendu améliore le confort et participe à la prévention cutanée.", ref: "Module 8 - confort / linge", diff: 2 },

  { mod: "8", q: "À qui revient la définition des protocoles de bionettoyage et le choix des produits validés ?", options: ["À chaque AS individuellement", "À l'équipe opérationnelle d'hygiène (EOH) et à l'encadrement", "Au patient", "Au service technique de plomberie"], correct: 1,
    explication: "L'AS applique les protocoles ; leur élaboration, la validation des produits et la surveillance relèvent de l'EOH et de l'encadrement. C'est un travail d'équipe.", ref: "Module 8 - organisation", diff: 3 },

  { mod: "8", q: "Le change du linge est aussi un moment privilégié pour :", options: ["Discuter de sa pause", "Observer l'état cutané et les souillures, puis transmettre les anomalies", "Désinfecter ses mains une seule fois par jour", "Stocker du matériel"], correct: 1,
    explication: "Au-delà de l'hygiène, ce soin permet l'observation (peau, souillures, douleur) ; toute anomalie est transmise oralement et tracée dans le dossier de soins.", ref: "Module 8 - observation / transmissions", diff: 2 },

  { mod: "8", q: "Que faire d'une lavette ayant servi à nettoyer les WC ?", options: ["La réutiliser sur l'adaptable", "La remettre telle quelle sur le chariot propre", "Ne pas la réutiliser sur une autre surface ; la mettre au sale / traitement", "La rincer à l'eau et continuer partout"], correct: 2,
    explication: "Une lavette souillée par les sanitaires ne doit jamais repasser sur une surface plus propre. Elle part au circuit sale (lavage en blanchisserie) ou est jetée si à usage unique.", ref: "Module 8 - matériel", diff: 1 },
];

export const flashcards = [
  { mod: "8", recto: "Bionettoyage : quels 3 éléments le rendent efficace ?", verso: "Action mécanique (frotter) + action chimique (produit) + respect du temps de contact." },
  { mod: "8", recto: "Dans quel sens nettoyer une pièce ?", verso: "Du plus propre au plus sale, du haut vers le bas, en reculant vers la sortie." },
  { mod: "8", recto: "Pourquoi nettoyer avant de désinfecter ?", verso: "Les salissures protègent les microbes et neutralisent le désinfectant : on ne désinfecte bien que ce qui est propre." },
  { mod: "8", recto: "Que signifie DASRI ?", verso: "Déchets d'Activité de Soins à Risque Infectieux : souillés de sang/liquides biologiques ou piquants-coupants. Filière jaune spécifique." },
  { mod: "8", recto: "Que signifie DAOM ?", verso: "Déchets Assimilés aux Ordures Ménagères : déchets non souillés (emballages, essuie-mains). Sac noir." },
  { mod: "8", recto: "Où jeter une aiguille usagée ?", verso: "Dans le collecteur rigide jaune (OPCT), au plus près du soin, sans recapuchonner ni tasser." },
  { mod: "8", recto: "Geste interdit avec une aiguille ?", verso: "La recapuchonner : principale cause d'accident d'exposition au sang." },
  { mod: "8", recto: "Principe de la marche en avant ?", verso: "Le propre et le sale ne se croisent jamais, ni dans l'espace ni dans le temps." },
  { mod: "8", recto: "Différence détergent / désinfectant ?", verso: "Le détergent élimine les salissures ; le désinfectant détruit les microbes sur une surface propre. Le détergent-désinfectant fait les deux." },
  { mod: "8", recto: "Pourquoi ne jamais mélanger deux produits d'entretien ?", verso: "Risque de réaction toxique (ex. Javel + acide = vapeurs de chlore)." },
  { mod: "8", recto: "Essuyage humide ou balayage à sec ?", verso: "Humide : il capte la poussière. Le sec la disperse dans l'air, interdit en lieu de soin." },
  { mod: "8", recto: "Comment gérer le linge sale au change ?", verso: "Sac dédié fermé, tenu loin du corps, jamais au sol ni plaqué contre la blouse, pas de tri manuel au lit." },
  { mod: "8", recto: "À quoi sert le code couleur des lavettes ?", verso: "Dédier un matériel par type de zone pour éviter le transfert de contamination (selon protocole établissement)." },
  { mod: "8", recto: "Pourquoi un drap bien tendu ?", verso: "Pour prévenir les escarres (pas de plis = pas de points de pression) et améliorer le confort." },
  { mod: "8", recto: "Qui définit les protocoles de bionettoyage ?", verso: "L'EOH (équipe opérationnelle d'hygiène) et l'encadrement ; l'AS les applique." },
];
