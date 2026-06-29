// Pack MODULE 8 — Entretien des locaux et des matériels et prévention des risques associés
// (hygiène, bionettoyage, déchets) — Bloc 4, 35 h. DEAS arrêté du 10 juin 2021.

export const fiches = [
  {
    id: "f_8_chaine_infection", mod: "8", type: "cours",
    titre: "La chaîne de transmission des infections",
    resume: "Comprendre comment se transmettent les micro-organismes pour mieux rompre la chaîne.",
    tags: ["infection", "transmission", "IAS", "réservoir", "prévention"],
    html: `
      <p>Une <span class="key" data-term="infection associée aux soins">infection associée aux soins (IAS)</span> est une infection contractée au cours ou au décours d'une prise en charge, qui n'était ni présente ni en incubation au début des soins. La prévention repose sur la <strong>rupture de la chaîne de transmission</strong>.</p>
      <h3>Les 6 maillons de la chaîne</h3>
      <ul>
        <li><strong>Agent infectieux</strong> : bactérie, virus, champignon, parasite.</li>
        <li><strong>Réservoir</strong> : où vit le germe (humain, matériel, eau, surfaces, air).</li>
        <li><strong>Porte de sortie</strong> : sang, selles, urines, sécrétions, gouttelettes.</li>
        <li><strong>Mode de transmission</strong> : contact (direct/indirect), gouttelettes, air.</li>
        <li><strong>Porte d'entrée</strong> : plaie, cathéter, sonde, muqueuse, voies respiratoires.</li>
        <li><strong>Hôte réceptif</strong> : personne fragilisée (âge, immunodépression, dénutrition).</li>
      </ul>
      <div class="callout"><div class="callout-t">Rôle de l'AS</div>Le maillon le plus facile à rompre est le <strong>mode de transmission</strong> : hygiène des mains, bionettoyage, gestion des déchets et du linge. C'est le cœur du module 8.</div>
      <h3>Vocabulaire utile</h3>
      <table class="tbl">
        <tr><td><strong>Flore commensale</strong></td><td>Germes naturellement présents sur la peau/muqueuses, utiles et non pathogènes.</td></tr>
        <tr><td><strong>Flore transitoire</strong></td><td>Germes déposés sur les mains lors des soins : c'est elle qu'on élimine par l'hygiène des mains.</td></tr>
        <tr><td><strong>Transmission croisée</strong></td><td>Passage d'un germe d'une personne (ou surface) à une autre, souvent par les mains du soignant.</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« A-R-S-T-E-H » : Agent, Réservoir, Sortie, Transmission, Entrée, Hôte. Casser un seul maillon stoppe l'infection.</div>
    `,
    refs: ["Module 8"],
  },
  {
    id: "f_8_bionettoyage", mod: "8", type: "geste",
    titre: "Le bionettoyage des locaux et surfaces",
    resume: "Nettoyer puis désinfecter, du plus propre au plus sale, sans recontaminer.",
    tags: ["bionettoyage", "nettoyage", "désinfection", "surfaces", "détergent"],
    html: `
      <p>Le <span class="key" data-term="bionettoyage">bionettoyage</span> est l'ensemble des opérations destinées à réduire la contamination biologique des surfaces. Il associe <strong>nettoyage</strong> (élimination des salissures) et <strong>désinfection</strong> (réduction des micro-organismes).</p>
      <h3>Les notions clés à ne pas confondre</h3>
      <table class="tbl">
        <tr><td><strong>Détergent</strong></td><td>Produit qui <strong>nettoie</strong> (décolle les salissures). Ne tue pas les germes.</td></tr>
        <tr><td><strong>Désinfectant</strong></td><td>Produit qui <strong>réduit les micro-organismes</strong> sur une surface (action chimique).</td></tr>
        <tr><td><strong>Détergent-désinfectant</strong></td><td>Produit « 2 en 1 », le plus utilisé en bionettoyage de routine.</td></tr>
        <tr><td><strong>Antiseptique</strong></td><td>Pour la <strong>peau et les muqueuses</strong> (tissu vivant), pas pour les surfaces.</td></tr>
      </table>
      <h3>Les 4 principes d'or</h3>
      <ul>
        <li><strong>Du plus propre vers le plus sale</strong> (et du haut vers le bas).</li>
        <li><strong>Du moins contaminé vers le plus contaminé</strong> : la chambre avant les sanitaires.</li>
        <li><strong>Ne jamais revenir</strong> sur une zone déjà nettoyée.</li>
        <li><strong>Un support par zone</strong> : changer la lavette / la gaze selon le code couleur.</li>
      </ul>
      <div class="callout"><div class="callout-t">Respecter le temps de contact</div>Un détergent-désinfectant n'agit que si on respecte le <strong>temps de contact</strong> et la <strong>dilution</strong> indiqués par le fabricant. Essuyer trop vite = surface non désinfectée.</div>
      <h3>Le balayage et le lavage des sols</h3>
      <ul>
        <li><strong>Balayage humide</strong> uniquement (jamais à sec : remet les poussières en suspension dans l'air).</li>
        <li>Lavage à plat avec la méthode du <strong>« 8 »</strong>, en reculant vers la sortie.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« On NE-DÉ » : on Nettoie d'abord (détergent), puis on Désinfecte. On ne désinfecte jamais une surface sale.</div>
    `,
    refs: ["Module 8"],
  },
  {
    id: "f_8_precautions", mod: "8", type: "cours",
    titre: "Précautions standard et précautions complémentaires",
    resume: "La base de toute prévention : appliquer les précautions standard pour tous, tout le temps.",
    tags: ["précautions standard", "EPI", "isolement", "AES", "complémentaires"],
    html: `
      <p>Les <span class="key" data-term="précautions standard">précautions standard</span> s'appliquent à <strong>tous les patients</strong>, en permanence, quel que soit leur statut infectieux connu ou non.</p>
      <h3>Les précautions standard</h3>
      <ul>
        <li><strong>Hygiène des mains</strong> : friction hydro-alcoolique de référence, lavage si mains souillées.</li>
        <li><strong>Port de gants</strong> : si risque de contact avec sang, liquides biologiques, muqueuses, peau lésée. Une paire = un soin = un patient.</li>
        <li><strong>Tablier / surblouse</strong> : si risque de projection ou de souillure de la tenue.</li>
        <li><strong>Masque + lunettes</strong> : si risque de projection au visage.</li>
        <li><strong>Gestion du matériel</strong> souillé, du linge, des déchets, des surfaces.</li>
        <li><strong>Prévention des AES</strong> (accidents d'exposition au sang) : ne jamais recapuchonner une aiguille, collecteur OPCT à portée.</li>
      </ul>
      <h3>Les précautions complémentaires (en plus, pas à la place)</h3>
      <table class="tbl">
        <tr><th>Type</th><th>Sigle</th><th>Exemples</th><th>Mesure phare</th></tr>
        <tr><td>Contact</td><td>PCC / « C »</td><td>BMR, gale, C. difficile</td><td>Gants + tablier, matériel dédié</td></tr>
        <tr><td>Gouttelettes</td><td>PCG / « G »</td><td>Grippe, méningite</td><td>Masque chirurgical &lt; 1 à 2 m</td></tr>
        <tr><td>Air</td><td>PCA / « A »</td><td>Tuberculose, rougeole, varicelle</td><td>Masque FFP2, chambre porte fermée</td></tr>
      </table>
      <div class="callout"><div class="callout-t">En cas d'AES</div>Ne pas faire saigner, nettoyer à l'eau et au savon, rincer, puis antisepsie par trempage (Dakin® ou eau de Javel diluée, à défaut alcool à 70°) en respectant le temps de contact. Ensuite <strong>alerter immédiatement</strong> et consulter un médecin (ou les urgences) dans l'heure pour évaluer la prophylaxie. L'AS prévient sans délai l'IDE et le cadre, et la déclaration d'accident du travail est faite dans les 24-48 h.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Standard pour TOUS, Complémentaires en PLUS. » C-G-A = Contact, Gouttelettes, Air, du masque le plus simple au plus protecteur.</div>
    `,
    refs: ["Module 8"],
  },
  {
    id: "f_8_dechets_linge", mod: "8", type: "cours",
    titre: "Gestion des déchets et circuit du linge",
    resume: "Trier les déchets à la source et respecter la marche en avant propre/sale.",
    tags: ["déchets", "DASRI", "DAOM", "linge", "circuit", "marche en avant"],
    html: `
      <p>Le tri des déchets se fait <strong>à la source</strong>, au moment du soin, par la personne qui les produit. Une erreur de tri ne se rattrape pas.</p>
      <h3>Les deux grandes filières</h3>
      <table class="tbl">
        <tr><th>Filière</th><th>Sigle</th><th>Contenant</th><th>Contenu</th></tr>
        <tr><td>Déchets à risque infectieux</td><td><span class="key" data-term="DASRI">DASRI</span></td><td>Sac / fût jaune</td><td>Souillés de sang/liquides bio, pansements, gants souillés</td></tr>
        <tr><td>Déchets assimilés ménagers</td><td><span class="key" data-term="DAOM">DAOM</span></td><td>Sac noir / gris</td><td>Déchets ordinaires non souillés, emballages</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Les OPCT</div>Les objets piquants, coupants, tranchants (aiguilles, lames) vont dans un <strong>collecteur rigide jaune à couvercle</strong>, jamais dans un sac. On ne dépasse pas la <strong>ligne de remplissage maximal</strong>.</div>
      <h3>Règles de tri</h3>
      <ul>
        <li>Sac rempli aux <strong>3/4</strong> maximum, fermé hermétiquement, jamais transvasé.</li>
        <li>Ne jamais tasser un sac avec la main (risque d'AES).</li>
        <li>En cas de doute → filière <strong>la plus sécurisée</strong> (DASRI).</li>
      </ul>
      <h3>Le circuit du linge — la marche en avant</h3>
      <ul>
        <li><strong>Linge propre</strong> et <strong>linge sale</strong> ne se croisent jamais (circuits séparés).</li>
        <li>Le linge sale est mis directement dans le sac dédié <strong>dans la chambre</strong>, jamais posé au sol ni transporté à bout de bras contre la tenue.</li>
        <li>Sac à linge fermé, transporté sans recontaminer le propre.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Jaune = danger » (DASRI), « le propre ne croise jamais le sale » (marche en avant), « dans le doute, jaune ».</div>
    `,
    refs: ["Module 8"],
  },
];

export const qcm = [
  {
    mod: "8", q: "Quelle est la mesure la plus efficace pour prévenir la transmission croisée des micro-organismes ?",
    options: ["Le port systématique de gants", "L'hygiène des mains", "Le port d'un masque FFP2", "La désinfection des sols"],
    correct: 1,
    explication: "L'hygiène des mains (friction hydro-alcoolique de référence, ou lavage si mains souillées) est reconnue comme la mesure n°1 de prévention des infections associées aux soins. Le port de gants ne remplace jamais l'hygiène des mains.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Une infection associée aux soins (IAS) est une infection :",
    options: ["Présente avant l'admission du patient", "Contractée au cours ou au décours d'une prise en charge, absente au début des soins", "Toujours d'origine virale", "Qui ne concerne que les services de réanimation"],
    correct: 1,
    explication: "L'IAS est contractée pendant ou après une prise en charge ; elle n'était ni présente ni en incubation au début des soins. Elle peut survenir dans tout lieu de soins (hôpital, EHPAD, domicile).",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Dans le bionettoyage, dans quel ordre réalise-t-on les opérations ?",
    options: ["Désinfection puis nettoyage", "Nettoyage puis désinfection", "Désinfection seule suffit", "Antisepsie puis nettoyage"],
    correct: 1,
    explication: "On nettoie d'abord (le détergent décolle les salissures), puis on désinfecte. On ne désinfecte jamais une surface sale : les salissures protègent les germes du désinfectant.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Quelle est la différence entre un détergent et un désinfectant ?",
    options: ["Aucune, ce sont des synonymes", "Le détergent nettoie (décolle les salissures), le désinfectant réduit les micro-organismes", "Le détergent s'utilise sur la peau, le désinfectant sur les surfaces", "Le désinfectant nettoie, le détergent tue les germes"],
    correct: 1,
    explication: "Le détergent élimine les salissures mais ne tue pas les germes ; le désinfectant réduit les micro-organismes présents sur une surface. Le détergent-désinfectant combine les deux actions.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Un antiseptique se distingue d'un désinfectant car il s'applique :",
    options: ["Sur les surfaces et le sol", "Sur la peau et les muqueuses (tissu vivant)", "Uniquement sur le matériel métallique", "Dans l'air ambiant"],
    correct: 1,
    explication: "L'antiseptique s'applique sur les tissus vivants (peau, muqueuses), le désinfectant sur les surfaces et matériels inertes. Ne jamais confondre les deux usages.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Lors du nettoyage d'une chambre, dans quel sens faut-il progresser ?",
    options: ["Du plus sale vers le plus propre", "Du plus propre vers le plus sale, et du haut vers le bas", "Peu importe, l'essentiel est de tout nettoyer", "Des sanitaires vers la zone de couchage"],
    correct: 1,
    explication: "On va toujours du plus propre vers le plus sale et du haut vers le bas, pour éviter de recontaminer une zone déjà nettoyée. Les sanitaires (zone la plus contaminée) se font en dernier.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Pourquoi le balayage à sec est-il interdit en milieu de soins ?",
    options: ["Il est trop fatigant", "Il remet les poussières et micro-organismes en suspension dans l'air", "Il abîme le revêtement de sol", "Il consomme trop de produit"],
    correct: 1,
    explication: "Le balayage à sec disperse les poussières (et les germes qu'elles transportent) dans l'air. On utilise le balayage humide, qui capte les salissures sans les remettre en suspension.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Pour que le détergent-désinfectant soit efficace, il faut impérativement respecter :",
    options: ["La couleur de la lavette uniquement", "La dilution et le temps de contact indiqués par le fabricant", "La température de la pièce", "L'heure de la journée"],
    correct: 1,
    explication: "Un produit n'agit que s'il est utilisé à la bonne dilution et laissé en contact le temps prescrit. Essuyer immédiatement la surface annule la désinfection.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Les précautions standard s'appliquent :",
    options: ["Seulement aux patients porteurs d'une BMR connue", "À tous les patients, en permanence, quel que soit leur statut infectieux", "Uniquement au bloc opératoire", "Seulement quand le patient est en isolement"],
    correct: 1,
    explication: "Les précautions standard concernent tous les patients, tout le temps, car le statut infectieux n'est pas toujours connu. Les précautions complémentaires s'ajoutent, sans les remplacer.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Quand l'aide-soignant·e doit-il porter des gants à usage unique ?",
    options: ["Pour tous les soins sans exception", "En cas de risque de contact avec du sang, des liquides biologiques, des muqueuses ou une peau lésée", "Uniquement pour la toilette complète", "Jamais, les gants sont réservés à l'IDE"],
    correct: 1,
    explication: "Les gants se portent dès qu'il y a risque de contact avec des liquides biologiques, des muqueuses ou une peau lésée. Une paire = un soin = un patient. Les gants ne dispensent pas de l'hygiène des mains.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Un patient est placé en précautions complémentaires de type « Air » (ex. tuberculose). Quel équipement l'AS porte-t-il pour entrer dans la chambre ?",
    options: ["Un masque chirurgical", "Un masque FFP2", "Aucun masque, juste des gants", "Des lunettes de protection seules"],
    correct: 1,
    explication: "La transmission par voie aérienne (tuberculose, rougeole, varicelle) impose le masque FFP2, qui filtre les particules fines, et le maintien de la porte fermée. Le masque chirurgical suffit pour les gouttelettes.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Les précautions complémentaires de type « Gouttelettes » (ex. grippe) imposent surtout :",
    options: ["Un masque FFP2 en permanence", "Le port d'un masque chirurgical à proximité du patient", "Une chambre à pression négative", "L'arrêt de toute visite"],
    correct: 1,
    explication: "La transmission par gouttelettes (grippe, méningite) se prévient avec un masque chirurgical lorsqu'on est à courte distance (moins d'1 à 2 m) du patient. Le FFP2 est réservé à la voie aérienne.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Dans quel contenant jette-t-on un pansement souillé de sang ?",
    options: ["Sac noir (DAOM)", "Sac jaune (DASRI)", "Collecteur OPCT", "Sac à linge sale"],
    correct: 1,
    explication: "Les déchets souillés de sang ou de liquides biologiques sont des DASRI (déchets d'activités de soins à risques infectieux) : sac/fût jaune. En cas de doute, on choisit toujours la filière la plus sécurisée.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "Où jette-t-on une aiguille ou une lame (objet piquant/coupant/tranchant) ?",
    options: ["Dans le sac jaune DASRI", "Dans le collecteur rigide jaune à couvercle (OPCT)", "Dans le sac noir DAOM", "Dans l'évier après rinçage"],
    correct: 1,
    explication: "Les OPCT vont obligatoirement dans un collecteur rigide à couvercle, jamais dans un sac (risque de piqûre et d'AES). On ne dépasse pas la ligne de remplissage maximal et on ne recapuchonne jamais une aiguille.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "À quel niveau de remplissage doit-on fermer un sac à déchets ?",
    options: ["Quand il déborde", "Aux trois quarts maximum", "Complètement plein et tassé", "À la moitié seulement"],
    correct: 1,
    explication: "On ferme le sac aux 3/4 au maximum pour pouvoir le fermer hermétiquement sans risque de débordement. On ne tasse jamais un sac avec la main (risque d'AES) et on ne le transvase pas.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Le principe de la « marche en avant » appliqué au circuit du linge signifie que :",
    options: ["Le linge propre et le linge sale ne se croisent jamais", "On lave toujours le linge en marchant", "Le linge sale passe avant le propre dans la même machine", "On traite d'abord le linge le plus propre"],
    correct: 0,
    explication: "La marche en avant impose des circuits séparés : le linge (ou le matériel) propre ne croise jamais le sale, pour éviter toute recontamination. C'est un principe fondamental de l'hygiène hospitalière.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Comment l'AS doit-il gérer le linge sale dans une chambre ?",
    options: ["Le poser au sol en attendant", "Le mettre directement dans le sac dédié dans la chambre, sans le plaquer contre sa tenue", "Le transporter à bout de bras jusqu'à la lingerie", "Le secouer pour le défroisser avant de le ranger"],
    correct: 1,
    explication: "Le linge sale est évacué directement dans le sac prévu, au plus près du soin, sans contact avec la tenue ni avec le sol, et sans le secouer (dispersion de germes). Le sac est fermé avant transport.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Quelle est la conduite à tenir IMMÉDIATE en cas d'accident d'exposition au sang (AES) par piqûre ?",
    options: ["Faire saigner abondamment la plaie", "Ne pas faire saigner, laver à l'eau et au savon, appliquer un antiseptique, puis alerter", "Recapuchonner l'aiguille et continuer le soin", "Attendre la fin du service pour en parler"],
    correct: 1,
    explication: "On ne fait pas saigner (risque de diffusion), on nettoie à l'eau et au savon puis on réalise une antisepsie par trempage (Dakin® ou eau de Javel diluée, à défaut alcool à 70°) en respectant le temps de contact. On alerte immédiatement l'IDE et le cadre et on consulte un médecin dans l'heure pour évaluer la prophylaxie.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Pourquoi ne faut-il jamais recapuchonner une aiguille usagée ?",
    options: ["Pour gagner du temps", "Parce que le geste de recapuchonnage est la principale cause de piqûre accidentelle (AES)", "Parce que le capuchon est trop petit", "Pour économiser le matériel"],
    correct: 1,
    explication: "Le recapuchonnage est l'un des gestes les plus à risque de piqûre accidentelle. L'aiguille usagée va directement dans le collecteur OPCT, sans manipulation supplémentaire.",
    ref: "Module 8", diff: 1,
  },
  {
    mod: "8", q: "La friction hydro-alcoolique est la méthode de référence d'hygiène des mains SAUF si :",
    options: ["Les mains sont sèches", "Les mains sont visiblement souillées ou après contact avec certains germes (ex. C. difficile)", "On vient de retirer ses gants", "On va entrer dans une chambre"],
    correct: 1,
    explication: "La friction hydro-alcoolique ne s'utilise que sur des mains propres et sèches. Si les mains sont visiblement souillées, ou en présence de germes résistants comme C. difficile, on procède à un lavage à l'eau et au savon.",
    ref: "Module 8", diff: 2,
  },
  {
    mod: "8", q: "Le code couleur des lavettes/supports en bionettoyage sert principalement à :",
    options: ["Décorer le chariot d'entretien", "Éviter de transporter les germes d'une zone à une autre (ex. sanitaires / chambre)", "Distinguer les équipes de jour et de nuit", "Indiquer la dilution du produit"],
    correct: 1,
    explication: "Le code couleur attribue un support à chaque type de zone (sanitaires, surfaces, mobilier...) pour empêcher la transmission croisée d'une zone contaminée vers une zone propre. On change de support selon la zone.",
    ref: "Module 8", diff: 2,
  },
];

export const flashcards = [
  { mod: "8", recto: "Quelle est la mesure n°1 de prévention des infections ?", verso: "L'hygiène des mains (friction hydro-alcoolique de référence, lavage si mains souillées)." },
  { mod: "8", recto: "Que signifie IAS ?", verso: "Infection associée aux soins : contractée pendant ou après une prise en charge, absente au début des soins." },
  { mod: "8", recto: "Définis le bionettoyage.", verso: "Ensemble des opérations réduisant la contamination biologique des surfaces : nettoyage (détergent) PUIS désinfection." },
  { mod: "8", recto: "Détergent ou désinfectant : lequel nettoie ?", verso: "Le détergent nettoie (décolle les salissures) ; le désinfectant réduit les micro-organismes." },
  { mod: "8", recto: "Antiseptique : sur quoi l'applique-t-on ?", verso: "Sur la peau et les muqueuses (tissu vivant). Jamais sur les surfaces (c'est le rôle du désinfectant)." },
  { mod: "8", recto: "Dans quel sens nettoyer une chambre ?", verso: "Du plus propre vers le plus sale, et du haut vers le bas. Sanitaires en dernier." },
  { mod: "8", recto: "Pourquoi pas de balayage à sec ?", verso: "Il remet les poussières et les germes en suspension dans l'air. On fait du balayage humide." },
  { mod: "8", recto: "À qui s'appliquent les précautions standard ?", verso: "À tous les patients, en permanence, quel que soit leur statut infectieux." },
  { mod: "8", recto: "Précautions complémentaires : les 3 types ?", verso: "Contact (C), Gouttelettes (G : masque chirurgical), Air (A : masque FFP2). Elles s'ajoutent aux standard." },
  { mod: "8", recto: "Sac jaune : pour quels déchets ?", verso: "DASRI : déchets souillés de sang/liquides biologiques, pansements, gants souillés." },
  { mod: "8", recto: "Où jette-t-on une aiguille usagée ?", verso: "Dans le collecteur rigide jaune à couvercle (OPCT). Jamais dans un sac, jamais recapuchonnée." },
  { mod: "8", recto: "À quel remplissage ferme-t-on un sac à déchets ?", verso: "Aux 3/4 maximum, sans tasser à la main, fermeture hermétique." },
  { mod: "8", recto: "Que veut dire la « marche en avant » ?", verso: "Le linge/matériel propre ne croise jamais le sale : circuits séparés pour éviter la recontamination." },
  { mod: "8", recto: "Conduite immédiate en cas d'AES (piqûre) ?", verso: "Ne pas faire saigner, nettoyer eau + savon, antisepsie par trempage (Dakin®/Javel diluée), alerter l'IDE et le cadre, consulter un médecin dans l'heure." },
  { mod: "8", recto: "FHA : sur quelles mains ?", verso: "Mains propres et SÈCHES. Si souillées ou C. difficile → lavage eau + savon." },
  { mod: "8", recto: "À quoi sert le code couleur des lavettes ?", verso: "Un support par zone, pour éviter la transmission croisée des germes (ex. sanitaires → chambre)." },
  { mod: "8", recto: "Que faire en cas de doute sur la filière déchets ?", verso: "Choisir la filière la plus sécurisée : le DASRI (sac jaune)." },
];
