export const fiches = [
  { id: "f_6_bases_communication", mod: "6", type: "cours",
    titre: "Les bases de la communication soignant-soigné",
    resume: "La communication est un échange verbal et non verbal au cœur de la relation de soin.",
    tags: ["communication", "verbal", "non-verbal", "relation"],
    html: `<h3>Définition</h3>
<p>La <span class="key" data-term="communication">communication</span> est un processus d'échange d'informations, d'émotions et de sens entre un émetteur et un récepteur, via un message et un canal. En soin, elle est l'outil central de la <strong>relation d'aide</strong>.</p>
<h3>Les deux grands registres</h3>
<ul>
<li><strong>Communication verbale</strong> : les mots, le contenu du discours, le vocabulaire adapté à la personne.</li>
<li><strong>Communication non verbale</strong> : regard, posture, gestes, expressions du visage, distance, toucher, silence, intonation. Elle représente une très grande part du message perçu.</li>
<li><strong>Communication para-verbale</strong> : le ton, le débit, le volume de la voix.</li>
</ul>
<h3>Le schéma de la communication</h3>
<table class="tbl">
<tr><th>Élément</th><th>Description</th></tr>
<tr><td>Émetteur</td><td>Celui qui envoie le message</td></tr>
<tr><td>Message</td><td>L'information transmise</td></tr>
<tr><td>Canal</td><td>Le moyen (parole, écrit, geste)</td></tr>
<tr><td>Récepteur</td><td>Celui qui reçoit et décode</td></tr>
<tr><td>Feed-back</td><td>Le retour qui confirme la compréhension</td></tr>
</table>
<div class="callout"><div class="callout-t">Attention aux interférences</div><p>Le bruit, la douleur, la fatigue, la peur, un trouble sensoriel (surdité, mauvaise vue) ou une barrière de langue altèrent la transmission du message. L'AS doit s'adapter.</p></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : le visage qui parle</div><p>Le corps parle autant que les mots : surveille toujours ta posture, ton regard et ton ton de voix, et veille à ce qu'ils soient cohérents avec ce que tu dis. Quand le message verbal et non verbal se contredisent, la personne se fie surtout au non-verbal.</p></div>`,
    refs: ["Module 6"] },

  { id: "f_6_relation_aide_ecoute", mod: "6", type: "cours",
    titre: "Relation d'aide et écoute active",
    resume: "L'écoute active et l'empathie permettent une relation d'aide soutenante et bienveillante.",
    tags: ["relation d'aide", "écoute active", "empathie", "reformulation"],
    html: `<h3>La relation d'aide</h3>
<p>La <span class="key" data-term="relation d'aide">relation d'aide</span> est une relation soignante visant à soutenir la personne, l'accompagner à exprimer ses besoins, ses émotions, et à mobiliser ses ressources. Elle s'appuie sur des attitudes professionnelles.</p>
<h3>Les attitudes facilitantes (inspirées de Carl Rogers)</h3>
<ul>
<li><strong>Empathie</strong> : comprendre ce que vit l'autre <em>sans se substituer à lui</em> ni juger.</li>
<li><strong>Authenticité (congruence)</strong> : être vrai, en accord avec soi.</li>
<li><strong>Considération positive inconditionnelle</strong> : accepter la personne telle qu'elle est, sans jugement.</li>
</ul>
<h3>L'écoute active</h3>
<p>L'<span class="key" data-term="écoute active">écoute active</span> consiste à être pleinement disponible et à montrer qu'on écoute :</p>
<ul>
<li>Regarder la personne, adopter une posture ouverte.</li>
<li>Laisser parler sans couper, respecter les <strong>silences</strong>.</li>
<li><strong>Reformuler</strong> pour vérifier la compréhension (« Si je comprends bien, vous… »).</li>
<li>Poser des questions ouvertes (« Comment vous sentez-vous ? »).</li>
<li>Accuser réception des émotions (« Je vois que cela vous inquiète »).</li>
</ul>
<div class="callout"><div class="callout-t">Empathie ≠ sympathie</div><p>L'<strong>empathie</strong> est comprendre l'émotion de l'autre en restant à sa juste place de soignant. La <strong>sympathie</strong> (partager l'émotion, prendre parti) peut nuire à la distance professionnelle.</p></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : R.E.S.P.E.C.T.</div><p><strong>R</strong>egarder, <strong>E</strong>couter, <strong>S</strong>ilence, <strong>P</strong>résence, <strong>E</strong>mpathie, <strong>C</strong>larifier, <strong>T</strong>onalité douce.</p></div>`,
    refs: ["Module 6"] },

  { id: "f_6_communication_difficile", mod: "6", type: "cours",
    titre: "Communiquer avec des personnes en situation difficile",
    resume: "Adapter sa communication selon les troubles sensoriels, cognitifs, l'agressivité ou la fin de vie.",
    tags: ["adaptation", "troubles", "agressivité", "fin de vie", "handicap"],
    html: `<h3>Personne malentendante</h3>
<ul>
<li>Se placer face à elle, à sa hauteur, bien éclairé pour permettre la lecture labiale.</li>
<li>Parler clairement, sans crier, sans masquer sa bouche.</li>
<li>Vérifier l'appareil auditif ; utiliser l'écrit ou les gestes si besoin.</li>
</ul>
<h3>Personne malvoyante ou aveugle</h3>
<ul>
<li>Se présenter en arrivant et prévenir quand on part.</li>
<li>Annoncer ses gestes avant de toucher la personne.</li>
<li>Décrire l'environnement, guider la main.</li>
</ul>
<h3>Personne désorientée ou atteinte de troubles cognitifs (ex. démence)</h3>
<ul>
<li>Phrases courtes et simples, une consigne à la fois.</li>
<li>Rester calme, rassurant, ne pas contredire brutalement.</li>
<li>Privilégier le toucher relationnel et le sourire.</li>
</ul>
<h3>Personne agressive</h3>
<ul>
<li>Garder son calme, voix posée, distance de sécurité.</li>
<li>Ne pas répondre à l'agressivité par l'agressivité.</li>
<li>Chercher la cause (douleur, peur, frustration), reformuler, et transmettre à l'équipe / IDE.</li>
</ul>
<h3>Personne en fin de vie et son entourage</h3>
<ul>
<li>Privilégier la <strong>présence</strong>, le silence, le toucher ; l'écoute prime sur les mots.</li>
<li>Respecter les émotions de la famille, ne pas fuir.</li>
<li>Ne jamais annoncer un diagnostic ou un pronostic : cela relève du médecin.</li>
</ul>
<div class="callout"><div class="callout-t">Rôle de l'AS et limites</div><p>L'AS écoute et soutient. Toute question médicale (diagnostic, traitement, pronostic) doit être orientée vers l'<strong>IDE ou le médecin</strong>. L'AS transmet ce qu'il observe.</p></div>`,
    refs: ["Module 6"] },

  { id: "f_6_entourage_secret", mod: "6", type: "cours",
    titre: "Relation avec l'entourage, secret professionnel et juste distance",
    resume: "Accompagner les familles dans le respect du secret professionnel et de la juste distance.",
    tags: ["entourage", "famille", "secret professionnel", "juste distance", "confidentialité"],
    html: `<h3>La relation avec l'entourage</h3>
<p>La famille et les proches sont des <strong>partenaires du soin</strong>. Ils apportent des informations utiles, du réconfort à la personne, mais peuvent aussi exprimer angoisse, culpabilité ou agressivité.</p>
<ul>
<li>Les accueillir avec respect, les informer dans la limite de son rôle.</li>
<li>Les associer aux soins quand c'est possible et souhaité.</li>
<li>Orienter vers l'IDE ou le médecin pour les questions médicales.</li>
</ul>
<h3>Le secret professionnel</h3>
<p>Le <span class="key" data-term="secret professionnel">secret professionnel</span> s'impose à tout soignant. Il protège l'intimité et la confidentialité des informations concernant la personne soignée.</p>
<ul>
<li>Ne pas divulguer d'informations, même à la famille, sans accord et sans cadre.</li>
<li>Ne pas parler des patients dans les lieux publics (couloirs, ascenseurs, transports).</li>
<li>Le <strong>secret partagé</strong> : on ne partage entre soignants que ce qui est utile au soin.</li>
</ul>
<h3>La juste distance professionnelle</h3>
<p>La <span class="key" data-term="juste distance">juste distance</span> est l'équilibre entre proximité chaleureuse et recul professionnel. Elle protège le soignant et la personne soignée.</p>
<table class="tbl">
<tr><th>Trop de distance</th><th>Juste distance</th><th>Trop de proximité</th></tr>
<tr><td>Froideur, indifférence</td><td>Bienveillance + recul professionnel</td><td>Fusion, projection, épuisement</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : « Je me TAIS »</div><p><strong>T</strong>aire les infos confidentielles, <strong>A</strong>ccueillir la famille, <strong>I</strong>nformer dans mon rôle, <strong>S</strong>'en tenir au secret partagé utile.</p></div>`,
    refs: ["Module 6"] },
];

export const qcm = [
  { mod: "6", q: "Que désigne la communication non verbale ?", options: ["Le contenu des mots employés", "Le regard, la posture, les gestes et les expressions du visage", "Le débit et le ton de la voix uniquement", "Les écrits transmis à l'équipe"], correct: 1,
    explication: "La communication non verbale regroupe tout ce qui passe par le corps : regard, posture, gestes, mimiques, distance, toucher. Le ton et le débit relèvent du para-verbal ; les mots du verbal.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Dans le schéma de la communication, qu'est-ce que le feed-back ?", options: ["Le message envoyé par l'émetteur", "Le canal de transmission", "Le retour du récepteur qui confirme la compréhension", "Le bruit qui perturbe l'échange"], correct: 2,
    explication: "Le feed-back est la rétroaction : le retour du récepteur (verbal ou non) qui permet à l'émetteur de vérifier que son message a bien été compris.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Quelle attitude correspond à l'empathie ?", options: ["Partager et ressentir l'émotion comme la personne", "Comprendre ce que vit la personne sans se substituer à elle ni juger", "Donner des conseils pour la consoler", "Garder une distance froide pour rester objectif"], correct: 1,
    explication: "L'empathie est la capacité à comprendre l'émotion de l'autre tout en restant à sa juste place de soignant. Partager l'émotion relève de la sympathie, qui peut nuire à la distance professionnelle.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Qu'est-ce que la reformulation en écoute active ?", options: ["Répéter mot pour mot ce que dit la personne", "Redire avec ses propres mots pour vérifier la compréhension", "Donner son avis sur ce qui a été dit", "Changer de sujet pour détendre l'échange"], correct: 1,
    explication: "Reformuler consiste à redire l'essentiel du message avec ses propres mots (« Si je comprends bien… ») afin de vérifier qu'on a bien compris et de montrer qu'on écoute.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Face à une personne malentendante, quelle attitude est adaptée ?", options: ["Crier le plus fort possible", "Se placer face à elle, bien éclairé, parler clairement sans masquer sa bouche", "Lui tourner le dos pour ne pas la gêner", "Parler très vite pour aller à l'essentiel"], correct: 1,
    explication: "Il faut se placer face à la personne, à sa hauteur, dans un bon éclairage pour faciliter la lecture labiale, parler clairement sans crier ni cacher sa bouche, et utiliser l'écrit si besoin.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Avec une personne aveugle, l'AS doit en priorité :", options: ["Toucher la personne sans prévenir pour la rassurer", "Se présenter en arrivant et annoncer ses gestes avant de toucher", "Rester silencieux pour ne pas la déranger", "Lui demander de deviner qui parle"], correct: 1,
    explication: "Avec une personne aveugle ou malvoyante, on se présente en arrivant, on prévient quand on part, et on annonce chaque geste avant de toucher pour éviter de surprendre.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Une personne soignée devient agressive. Quelle est la bonne conduite de l'AS ?", options: ["Répondre fermement sur le même ton", "Garder son calme, voix posée, chercher la cause et transmettre à l'équipe", "Quitter la pièce définitivement sans rien dire", "Contenir physiquement la personne immédiatement"], correct: 1,
    explication: "Face à l'agressivité, l'AS garde son calme, adopte une voix posée, maintient une distance de sécurité, cherche la cause (douleur, peur, frustration) et transmet à l'équipe et à l'IDE. Répondre par l'agressivité aggrave la situation.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Avec une personne désorientée atteinte de troubles cognitifs, il est recommandé de :", options: ["Donner plusieurs consignes à la fois pour gagner du temps", "Utiliser des phrases courtes, une consigne à la fois, rester rassurant", "La contredire fermement à chaque erreur", "Parler vite avec un vocabulaire complexe"], correct: 1,
    explication: "Avec une personne désorientée, on privilégie des phrases courtes et simples, une seule consigne à la fois, une attitude calme et rassurante, le sourire et le toucher relationnel, sans la contredire brutalement.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Le secret professionnel impose à l'AS de :", options: ["Tout raconter à la famille pour bien l'informer", "Ne pas divulguer d'informations confidentielles, y compris dans les couloirs ou ascenseurs", "Partager les dossiers avec tout le personnel de l'établissement", "Publier les évolutions du patient sur les réseaux sociaux"], correct: 1,
    explication: "Le secret professionnel protège la confidentialité des informations concernant la personne soignée. On ne les divulgue pas, on évite d'en parler dans les lieux publics, et entre soignants on ne partage que ce qui est utile au soin (secret partagé).", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Qu'est-ce que le « secret partagé » ?", options: ["Le droit de tout dire à la famille", "Le partage entre soignants des seules informations utiles à la prise en charge", "Un secret qu'on garde pour soi sans le transmettre", "Le secret réservé au seul médecin"], correct: 1,
    explication: "Le secret partagé permet aux soignants d'une même équipe d'échanger uniquement les informations nécessaires à la continuité et à la qualité des soins, dans l'intérêt de la personne.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "La « juste distance » professionnelle correspond à :", options: ["Une froideur totale envers le patient", "Une fusion affective avec la personne soignée", "Un équilibre entre proximité bienveillante et recul professionnel", "Le fait d'éviter tout contact avec les patients"], correct: 2,
    explication: "La juste distance est l'équilibre entre une proximité chaleureuse et un recul professionnel. Trop de distance crée de la froideur ; trop de proximité conduit à la projection et à l'épuisement du soignant.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Une famille demande à l'AS quel est le diagnostic de leur proche. Que fait l'AS ?", options: ["Il donne le diagnostic qu'il a lu dans le dossier", "Il invente une réponse rassurante", "Il oriente la famille vers le médecin ou l'IDE", "Il refuse de leur parler"], correct: 2,
    explication: "L'annonce d'un diagnostic ou d'un pronostic ne relève pas de l'AS. Il accueille la famille avec respect et oriente les questions médicales vers le médecin ou l'IDE.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Quelle est la meilleure attitude auprès d'une personne en fin de vie ?", options: ["Éviter d'entrer dans la chambre pour ne pas la déranger", "Privilégier la présence, le silence et le toucher, plus que les mots", "Lui annoncer son pronostic pour qu'elle soit préparée", "Parler beaucoup pour combler le silence"], correct: 1,
    explication: "En fin de vie, la présence, le silence apaisant et le toucher relationnel comptent souvent plus que les paroles. L'écoute prime. L'annonce du pronostic relève du médecin.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Parmi ces éléments, lequel est une interférence (un « bruit ») qui perturbe la communication ?", options: ["Le feed-back du récepteur", "La reformulation du soignant", "La douleur, la peur ou un trouble auditif", "Le sourire bienveillant"], correct: 2,
    explication: "Les interférences ou « bruits » sont tout ce qui altère la transmission : bruit ambiant, douleur, fatigue, peur, trouble sensoriel ou barrière de langue. L'AS doit en tenir compte et s'adapter.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Une question « ouverte » se caractérise par :", options: ["Une réponse possible uniquement par oui ou non", "Une réponse qui invite la personne à s'exprimer librement", "Une question fermée déguisée", "Une question qui impose une réponse au patient"], correct: 1,
    explication: "Une question ouverte (« Comment vous sentez-vous ? ») invite la personne à développer, contrairement à la question fermée qui appelle un simple oui/non. Elle favorise l'expression.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Quelle attitude relève des principes de la relation d'aide selon Carl Rogers ?", options: ["Le jugement systématique de la personne", "La considération positive inconditionnelle", "L'indifférence professionnelle", "La directivité autoritaire"], correct: 1,
    explication: "Carl Rogers décrit trois attitudes facilitantes : l'empathie, l'authenticité (congruence) et la considération positive inconditionnelle, c'est-à-dire accepter la personne telle qu'elle est sans la juger.", ref: "Module 6", diff: 3 },

  { mod: "6", q: "Pourquoi respecter les silences lors d'un entretien d'écoute ?", options: ["Parce qu'ils gênent toujours la personne", "Parce qu'ils laissent à la personne le temps de réfléchir et d'exprimer ses émotions", "Parce qu'il faut combler le vide à tout prix", "Parce que le silence montre un désintérêt"], correct: 1,
    explication: "Le silence est un outil de l'écoute active : il laisse à la personne le temps de penser, de ressentir et de mettre des mots sur ses émotions. Le respecter témoigne d'une présence attentive.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Le toucher relationnel dans le soin sert principalement à :", options: ["Réaliser un acte technique infirmier", "Établir un contact rassurant et soutenant avec la personne", "Remplacer la communication verbale en toutes circonstances", "Imposer un soin contre l'avis de la personne"], correct: 1,
    explication: "Le toucher relationnel est un contact bienveillant (main sur l'épaule, prendre la main) qui rassure, apaise et soutient, en particulier auprès des personnes désorientées ou en fin de vie. Il complète la parole.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Quel rôle joue le non-verbal et le para-verbal dans la communication ?", options: ["Un rôle négligeable, l'essentiel passe par les mots", "Un rôle majeur : ils renforcent ou contredisent le message verbal et pèsent fortement sur ce qui est perçu", "Aucun rôle, seuls les mots comptent", "Un rôle réservé aux personnes sourdes"], correct: 1,
    explication: "Le non-verbal et le para-verbal (posture, regard, ton, débit) pèsent fortement sur la façon dont le message est perçu, surtout pour les émotions. Quand ils contredisent les mots, la personne se fie surtout au non-verbal. D'où l'importance de la cohérence entre ce que l'on dit et ce que l'on montre.", ref: "Module 6", diff: 2 },

  { mod: "6", q: "Un collègue raconte des détails sur un patient dans l'ascenseur devant des visiteurs. Quelle attitude est juste ?", options: ["L'encourager car cela informe les visiteurs", "Lui rappeler discrètement le respect du secret professionnel", "Faire de même pour aider", "Ignorer car ce n'est pas grave"], correct: 1,
    explication: "Parler d'un patient dans un lieu public est une atteinte au secret professionnel. Il convient de rappeler avec tact à son collègue le devoir de confidentialité et de discrétion.", ref: "Module 6", diff: 1 },

  { mod: "6", q: "Quel comportement traduit une perte de la juste distance par excès de proximité ?", options: ["Garder un recul professionnel bienveillant", "Se projeter dans la situation et s'épuiser émotionnellement", "Rester froid et indifférent", "Transmettre objectivement ses observations"], correct: 1,
    explication: "Un excès de proximité (fusion, projection affective) expose le soignant à l'épuisement émotionnel et nuit à son objectivité. La juste distance protège à la fois le soignant et la personne soignée.", ref: "Module 6", diff: 3 },
];

export const flashcards = [
  { mod: "6", recto: "Quels sont les trois registres de la communication ?", verso: "Verbal (les mots), non verbal (regard, posture, gestes) et para-verbal (ton, débit, volume de la voix)." },
  { mod: "6", recto: "Qu'est-ce que le feed-back ?", verso: "La rétroaction : le retour du récepteur qui confirme à l'émetteur que le message a été compris." },
  { mod: "6", recto: "Différence entre empathie et sympathie ?", verso: "Empathie : comprendre l'émotion de l'autre en restant à sa place de soignant. Sympathie : partager l'émotion, prendre parti (risque pour la juste distance)." },
  { mod: "6", recto: "Citez les trois attitudes facilitantes de Carl Rogers.", verso: "Empathie, authenticité (congruence) et considération positive inconditionnelle." },
  { mod: "6", recto: "Qu'est-ce que la reformulation ?", verso: "Redire avec ses propres mots l'essentiel du message de la personne pour vérifier la compréhension et montrer qu'on écoute." },
  { mod: "6", recto: "Comment communiquer avec une personne malentendante ?", verso: "Se placer face à elle, bien éclairé, parler clairement sans crier ni masquer la bouche, vérifier l'appareil, écrire si besoin." },
  { mod: "6", recto: "Que faire avant de toucher une personne aveugle ?", verso: "Se présenter, annoncer son geste, prévenir avant de la toucher et quand on quitte la pièce." },
  { mod: "6", recto: "Conduite à tenir face à une personne agressive ?", verso: "Rester calme, voix posée, distance de sécurité, ne pas répondre par l'agressivité, chercher la cause et transmettre à l'équipe/IDE." },
  { mod: "6", recto: "Qu'est-ce que le secret professionnel ?", verso: "L'obligation de ne pas divulguer les informations confidentielles concernant la personne soignée, y compris dans les lieux publics." },
  { mod: "6", recto: "Qu'est-ce que le secret partagé ?", verso: "Le partage entre soignants d'une même équipe des seules informations utiles à la prise en charge de la personne." },
  { mod: "6", recto: "Qu'est-ce que la juste distance professionnelle ?", verso: "L'équilibre entre proximité bienveillante et recul professionnel, qui protège le soignant et la personne soignée." },
  { mod: "6", recto: "Une famille demande le diagnostic du patient à l'AS. Que fait-il ?", verso: "Il accueille avec respect et oriente la question médicale vers le médecin ou l'IDE : l'annonce ne relève pas de l'AS." },
  { mod: "6", recto: "Attitude auprès d'une personne en fin de vie ?", verso: "Privilégier la présence, le silence et le toucher relationnel ; l'écoute prime sur les mots. Ne pas annoncer de pronostic." },
  { mod: "6", recto: "Différence entre question ouverte et question fermée ?", verso: "Ouverte : invite à s'exprimer librement (« Comment vous sentez-vous ? »). Fermée : appelle un oui/non." },
  { mod: "6", recto: "Citez des interférences qui perturbent la communication.", verso: "Bruit ambiant, douleur, fatigue, peur, trouble sensoriel (surdité, mauvaise vue), barrière de langue." },
  { mod: "6", recto: "À quoi sert le toucher relationnel ?", verso: "À établir un contact rassurant et apaisant, surtout auprès des personnes désorientées ou en fin de vie ; il complète la parole." },
  { mod: "6", recto: "Quelle est l'importance de la cohérence entre verbal et non-verbal ?", verso: "Quand les mots et le corps (regard, posture, ton) se contredisent, la personne se fie surtout au non-verbal. Le soignant doit veiller à ce que son attitude soit cohérente avec son discours." },
  { mod: "6", recto: "Quelles questions favorisent l'expression de la personne ?", verso: "Les questions ouvertes (« Comment vous sentez-vous ? », « Qu'est-ce qui vous inquiète ? ») qui invitent à développer, plutôt que les questions fermées (oui/non)." },
  { mod: "6", recto: "L'AS peut-il annoncer un diagnostic ou un pronostic ?", verso: "Non. L'annonce relève du médecin. L'AS écoute, soutient, observe et transmet ; il oriente les questions médicales vers l'IDE ou le médecin." },
];
