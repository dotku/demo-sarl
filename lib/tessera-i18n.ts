import { locales, type Locale } from "./i18n";

type Stat = { value: string; label: string; cite: string };
type Bullet = { title: string; body: string };
type Competitor = { name: string; signal: string };
type RoadmapRow = { phase: string; target: string; timing: string };

export type TesseraDict = {
  metaTitle: string;
  metaDescription: string;
  backToDemo: string;
  statusBadge: string;
  heroTitle: string;
  heroTagline: string;
  heroLede: string;

  problemTitle: string;
  problemLede: string;
  problemBullets: Bullet[];

  marketTitle: string;
  marketLede: string;
  stats: Stat[];

  approachTitle: string;
  approachLede: string;
  approachPillars: Bullet[];

  whyNowTitle: string;
  whyNowBullets: Bullet[];

  competitionTitle: string;
  competitionLede: string;
  competitors: Competitor[];
  competitionGap: string;

  complianceTitle: string;
  complianceLede: string;
  roadmap: RoadmapRow[];
  complianceNote: string;

  stageTitle: string;
  stageBody: string;
  stageAsk: string[];

  disclaimerTitle: string;
  disclaimerBody: string;

  footerNotice: string;
};

export const tesseraDictionaries: Record<Locale, TesseraDict> = {
  en: {
    metaTitle: "Tessera — AI-native sustainment for contested operations",
    metaDescription:
      "Concept brief for an AI-native logistics and sustainment platform purpose-built for U.S. Department of Defense operations in contested environments.",
    backToDemo: "demo.sarl",
    statusBadge: "Concept brief · 2026",
    heroTitle: "Tessera",
    heroTagline: "AI-native sustainment for contested operations.",
    heroLede:
      "An agentic logistics platform designed for the way U.S. and allied forces will actually fight in the Indo-Pacific decade — degraded comms, dispersed nodes, mission-priority decisions at the edge.",

    problemTitle: "The problem",
    problemLede:
      "DoD obligates north of $50B annually on logistics through DLA alone, but the underlying decision stack was designed for a permissive theater.",
    problemBullets: [
      {
        title: "Legacy ERPs are mid-modernization",
        body: "GCSS-Army is being folded into Army Enterprise Business Systems Convergence; Navy ERP's SAP HANA core reaches end-of-life in 2027 with Navy ERP+ authority-to-proceed expected Feb 2026. Modernization windows like these only open every 15–20 years.",
      },
      {
        title: "Sustainment is now existential, not administrative",
        body: "INDOPACOM commander ADM Paparo called sustainment 'existential' at LANPAC 2025. Pacific posture assumes degraded GPS, contested LOCs, and JLOTS-style expeditionary distribution — none of which today's ERP-centric workflows are designed for.",
      },
      {
        title: "Data exists; decisions don't",
        body: "Inventory, maintenance, transportation, and demand data already flow through GCSS, NAVSUP, DPS, and GTN. What's missing is an agentic layer that turns those records into prioritized, auditable recommendations operators can act on.",
      },
      {
        title: "Edge environments break cloud assumptions",
        body: "GCSS-Army's 2025 Disconnected Operations rollout to ~15,000 motor pool users confirms what TRANSCOM and Marine Corps planners have been saying: tactical logistics must function without continuous cloud connectivity.",
      },
    ],

    marketTitle: "The market",
    marketLede:
      "DoD logistics is a Fortune-500-sized line item with a clear modernization mandate and active commercial procurement pathways.",
    stats: [
      {
        value: "$52.6B",
        label: "DLA FY2024 obligations",
        cite: "DLA Annual Report FY2024",
      },
      {
        value: "$9.5B",
        label: "USTRANSCOM annual TWCF",
        cite: "TRANSCOM Working Capital Fund",
      },
      {
        value: "$10B",
        label: "Palantir Army Enterprise Agreement (Jul 2025)",
        cite: "Public DoD contract reporting",
      },
      {
        value: "$919M",
        label: "Govini Ark GSA SCRIPTS BPA (Apr 2025)",
        cite: "Public award announcement",
      },
      {
        value: "~$500M",
        label: "Replicator Initiative FY25 request",
        cite: "CRS IF12611",
      },
      {
        value: "$13.6B",
        label: "Defense-tech venture, YTD May 2026",
        cite: "Crunchbase defense-tech tracker",
      },
    ],

    approachTitle: "Approach",
    approachLede:
      "Most platforms in this category are ERPs with ML bolted on. Tessera inverts that.",
    approachPillars: [
      {
        title: "Decision-first architecture",
        body: "Operators interact in natural language with agentic workflows; the system handles record-keeping, data plumbing, and citation. Every recommendation links back to the underlying inventory, maintenance, or movement records that produced it.",
      },
      {
        title: "Disconnected by default",
        body: "Tactical edge runtime targets DDIL (denied, degraded, intermittent, limited) bandwidth profiles. Models run locally on ruggedized hardware; cloud sync is opportunistic, not required.",
      },
      {
        title: "Open data fabric, not rip-and-replace",
        body: "Read/write adapters for GCSS-Army, NAVSUP-ERP, DPS, GTN, and emerging JADC2 data buses. Tessera augments incumbent systems instead of competing with their modernization timelines.",
      },
      {
        title: "Mission-aware planning",
        body: "Supply, maintenance, and movement plans optimize jointly against operational tempo and commander's intent — not just SLA targets. Useful in garrison; essential in contested theater.",
      },
      {
        title: "Auditable, accreditation-ready AI",
        body: "Every model output is traceable to source records and policy. Designed from day one for CMMC 2.0 Level 2, FedRAMP Moderate, and DoD Impact Level 4 inheritance.",
      },
    ],

    whyNowTitle: "Why now",
    whyNowBullets: [
      {
        title: "Foundation models cleared the bar",
        body: "Multimodal LLMs released 2024–2026 can finally reason over the messy, mixed-format, partially-classified data that DoD logistics actually generates.",
      },
      {
        title: "Contracting paths exist that didn't five years ago",
        body: "DIU's Joint Sustainment Decision Tool (launched Aug 2025 with INDOPACOM, NORTHCOM, and DLA) awarded prototype OTAs to two AI vendors in Jan 2026 — a template, not an outlier. Tradewinds and AFWERX provide parallel paths.",
      },
      {
        title: "CDAO mandate carries to USD(R&E)",
        body: "CDAO's August 2025 realignment under USD(R&E) ties AI procurement directly to capability development, shortening the path from prototype to program of record.",
      },
      {
        title: "Capital is finally tracking the thesis",
        body: "Defense-tech raised more by mid-May 2026 ($13.6B) than in all of 2025 ($8.8B). Most of that flowed to autonomy and maritime; AI-native logistics software remains under-capitalized — and that's the wedge.",
      },
    ],

    competitionTitle: "Competitive landscape",
    competitionLede:
      "The incumbents are real and well-positioned. The opening is where they aren't.",
    competitors: [
      {
        name: "Palantir Foundry / TITAN",
        signal:
          "$10B Army Enterprise Agreement (Jul 2025) consolidating 75 contracts. Strong at data integration; not architected for agentic decisioning or edge-disconnected ops.",
      },
      {
        name: "Govini Ark",
        signal:
          "$919M GSA SCRIPTS BPA (Apr 2025), Navy IL5 ATO, Army/Space Force ATOs. Strong at supply-chain analytics; primarily strategic/acquisition layer, not tactical sustainment.",
      },
      {
        name: "C3 AI",
        signal:
          "Air Force predictive maintenance contracts. Vertical depth in PdM but limited cross-service sustainment integration.",
      },
      {
        name: "Anduril Lattice",
        signal:
          "$5B Series H at $61B valuation. Lattice owns autonomy / C2; logistics adjacency is opportunistic, not core.",
      },
      {
        name: "Air Space Intelligence · Watchtower Labs",
        signal:
          "Jan 2026 DIU JSDT prototype OTAs. Closest functional peers — narrower scope per prototype phase; field-validation race underway.",
      },
    ],
    competitionGap:
      "No incumbent combines agentic, tactical-edge, accreditation-track, cross-service sustainment in one product. That is the Tessera footprint.",

    complianceTitle: "Compliance roadmap",
    complianceLede:
      "Accreditation is the moat. We're architecting backward from IL5.",
    roadmap: [
      {
        phase: "Phase 1",
        target: "NIST SP 800-171 baseline · CMMC 2.0 Level 2 readiness",
        timing: "2026 H2",
      },
      {
        phase: "Phase 2",
        target: "CMMC 2.0 Level 2 third-party assessment",
        timing: "2026 H2 – 2027 H1",
      },
      {
        phase: "Phase 3",
        target: "FedRAMP Moderate · DoD Impact Level 4",
        timing: "2027",
      },
      {
        phase: "Phase 4",
        target: "DoD Impact Level 5 (sponsored)",
        timing: "2028",
      },
    ],
    complianceNote:
      "CMMC 2.0 became enforceable Nov 10, 2025, with phased rollout through Nov 2028. Pre-accredited DevSecOps PaaS (Game Warden, Second Front, Platform One) can inherit substantial control burden, materially compressing time-to-IL4.",

    stageTitle: "Stage & ask",
    stageBody:
      "Tessera is at concept / pre-seed. This site is a thesis brief, not a product page. We are not announcing contracts, accreditations, or pilots that do not yet exist.",
    stageAsk: [
      "Two design partners inside DLA, TRANSCOM, or service-level sustainment commands",
      "Pre-seed capital to assemble a founding team with DoD acquisition and AI-systems experience",
      "Introductions to former program leads at GCSS-Army, NAVSUP-ERP, JSDT, or AFWERX",
    ],

    disclaimerTitle: "Disclosure",
    disclaimerBody:
      "Tessera is a concept brief presented on the demo.sarl demonstration domain. It is not a registered company, not an active program, and makes no claim to DoD contracts, accreditations, sponsorships, or affiliations. All third-party programs, vendors, and figures cited above are drawn from publicly reported sources. This page is provided for discussion and exploratory purposes only.",

    footerNotice:
      "Tessera concept brief — demonstration content. No DoD endorsement implied.",
  },

  fr: {
    metaTitle: "Tessera — Soutien logistique IA-natif pour opérations contestées",
    metaDescription:
      "Note de concept pour une plateforme logistique IA-native destinée aux opérations du Département de la Défense des États-Unis en environnement contesté.",
    backToDemo: "demo.sarl",
    statusBadge: "Note de concept · 2026",
    heroTitle: "Tessera",
    heroTagline: "Soutien logistique IA-natif pour opérations contestées.",
    heroLede:
      "Une plateforme logistique agentique conçue pour la manière dont les forces américaines et alliées combattront réellement dans la décennie indo-pacifique — communications dégradées, nœuds dispersés, décisions de mission à la périphérie.",

    problemTitle: "Le problème",
    problemLede:
      "Le DoD engage plus de 50 milliards $ par an en logistique via la seule DLA, mais la couche de décision sous-jacente a été pensée pour un théâtre permissif.",
    problemBullets: [
      {
        title: "Les ERP hérités sont en pleine modernisation",
        body: "GCSS-Army est intégré au programme Army Enterprise Business Systems Convergence ; le cœur SAP HANA de Navy ERP arrive en fin de vie en 2027, avec l'autorité de procéder pour Navy ERP+ attendue en février 2026. De telles fenêtres de modernisation ne s'ouvrent que tous les 15–20 ans.",
      },
      {
        title: "Le soutien logistique devient existentiel",
        body: "Le commandant de l'INDOPACOM, l'ADM Paparo, a qualifié le soutien d'« existentiel » au LANPAC 2025. La posture Pacifique suppose GPS dégradé, lignes de communication contestées, distribution expéditionnaire type JLOTS — ce que les flux ERP actuels ne prévoient pas.",
      },
      {
        title: "Les données existent ; les décisions, non",
        body: "Les données d'inventaire, maintenance, transport et demande circulent déjà dans GCSS, NAVSUP, DPS et GTN. Ce qui manque, c'est une couche agentique qui transforme ces enregistrements en recommandations priorisées et auditables.",
      },
      {
        title: "L'environnement tactique brise les hypothèses cloud",
        body: "Le déploiement 2025 du mode déconnecté (DISCOPS) de GCSS-Army à ~15 000 utilisateurs confirme ce que les planificateurs de TRANSCOM et de l'USMC répètent : la logistique tactique doit fonctionner sans connectivité continue.",
      },
    ],

    marketTitle: "Le marché",
    marketLede:
      "La logistique DoD pèse plus qu'un Fortune 500, avec un mandat clair de modernisation et des voies de marché commerciales actives.",
    stats: [
      {
        value: "52,6 Mrd $",
        label: "Engagements DLA FY2024",
        cite: "Rapport annuel DLA FY2024",
      },
      {
        value: "9,5 Mrd $",
        label: "TWCF annuel de USTRANSCOM",
        cite: "Fonds de roulement TRANSCOM",
      },
      {
        value: "10 Mrd $",
        label: "Accord Palantir – Army (juil. 2025)",
        cite: "Contrat DoD public",
      },
      {
        value: "919 M $",
        label: "BPA Govini Ark – GSA SCRIPTS (avr. 2025)",
        cite: "Annonce publique",
      },
      {
        value: "~500 M $",
        label: "Demande FY25 initiative Replicator",
        cite: "CRS IF12611",
      },
      {
        value: "13,6 Mrd $",
        label: "VC défense, cumul à mi-mai 2026",
        cite: "Crunchbase",
      },
    ],

    approachTitle: "Approche",
    approachLede:
      "La plupart des plateformes de cette catégorie sont des ERP avec une couche ML ajoutée. Tessera inverse l'équation.",
    approachPillars: [
      {
        title: "Architecture orientée décision",
        body: "Les opérateurs interagissent en langage naturel avec des workflows agentiques ; le système gère la tenue de registres, la plomberie des données et la citation des sources. Chaque recommandation est traçable jusqu'aux enregistrements d'inventaire, maintenance ou transport qui l'ont produite.",
      },
      {
        title: "Déconnecté par défaut",
        body: "Exécution en périphérie ciblant les profils DDIL (déni, dégradation, intermittence, limitation). Les modèles tournent localement sur matériel durci ; la synchronisation cloud est opportuniste, pas requise.",
      },
      {
        title: "Tissu de données ouvert, pas de remplacement",
        body: "Adaptateurs lecture/écriture pour GCSS-Army, NAVSUP-ERP, DPS, GTN et les bus de données JADC2 émergents. Tessera augmente les systèmes en place plutôt que de concurrencer leur calendrier de modernisation.",
      },
      {
        title: "Planification orientée mission",
        body: "Les plans d'approvisionnement, maintenance et mouvement s'optimisent conjointement contre le tempo opérationnel et l'intention du commandant — pas seulement des SLA. Utile en garnison ; essentiel en théâtre contesté.",
      },
      {
        title: "IA auditable, prête pour l'accréditation",
        body: "Chaque sortie du modèle est traçable aux sources et aux politiques. Conçu dès l'origine pour CMMC 2.0 niveau 2, FedRAMP Moderate et l'héritage Impact Level 4 du DoD.",
      },
    ],

    whyNowTitle: "Pourquoi maintenant",
    whyNowBullets: [
      {
        title: "Les modèles de fondation ont passé la barre",
        body: "Les LLM multimodaux 2024–2026 peuvent enfin raisonner sur les données hétérogènes, multi-formats et partiellement classifiées que produit réellement la logistique DoD.",
      },
      {
        title: "Des voies de contractualisation inédites",
        body: "L'outil JSDT du DIU (lancé en août 2025 avec INDOPACOM, NORTHCOM et DLA) a attribué des OTA prototypes à deux éditeurs IA en janvier 2026 — un modèle reproductible. Tradewinds et AFWERX offrent des chemins parallèles.",
      },
      {
        title: "Mandat CDAO étendu à USD(R&E)",
        body: "Le rattachement du CDAO à USD(R&E) en août 2025 lie l'achat d'IA directement au développement capacitaire, raccourcissant le passage du prototype au programme officiel.",
      },
      {
        title: "Les capitaux suivent enfin la thèse",
        body: "La defense-tech a levé plus à mi-mai 2026 (13,6 Mrd $) que sur toute l'année 2025 (8,8 Mrd $). L'essentiel est allé à l'autonomie et au maritime ; le logiciel logistique IA-natif reste sous-capitalisé — c'est notre angle.",
      },
    ],

    competitionTitle: "Paysage concurrentiel",
    competitionLede:
      "Les acteurs en place sont réels et bien positionnés. L'ouverture est là où ils ne sont pas.",
    competitors: [
      {
        name: "Palantir Foundry / TITAN",
        signal:
          "Accord Army de 10 Mrd $ (juil. 2025) consolidant 75 contrats. Fort en intégration de données ; pas conçu pour la décision agentique ni l'opération déconnectée.",
      },
      {
        name: "Govini Ark",
        signal:
          "BPA SCRIPTS de 919 M $ (avr. 2025), ATO Navy IL5, ATO Army/Space Force. Fort en analyse de chaîne d'approvisionnement ; surtout stratégique, pas tactique.",
      },
      {
        name: "C3 AI",
        signal:
          "Contrats de maintenance prédictive Air Force. Profondeur verticale en PdM mais intégration multi-services limitée.",
      },
      {
        name: "Anduril Lattice",
        signal:
          "Série H de 5 Mrd $ à 61 Mrd $ de valorisation. Lattice domine l'autonomie / C2 ; la logistique est adjacente, pas centrale.",
      },
      {
        name: "Air Space Intelligence · Watchtower Labs",
        signal:
          "OTA prototypes JSDT du DIU en janv. 2026. Pairs fonctionnels les plus proches — périmètre plus étroit en phase prototype ; course à la validation terrain en cours.",
      },
    ],
    competitionGap:
      "Aucun acteur en place ne combine agentique, périphérie tactique, trajectoire d'accréditation et soutien multi-services dans un seul produit. C'est l'empreinte Tessera.",

    complianceTitle: "Feuille de route conformité",
    complianceLede:
      "L'accréditation est le fossé. Nous concevons en partant de l'IL5.",
    roadmap: [
      {
        phase: "Phase 1",
        target: "Base NIST SP 800-171 · préparation CMMC 2.0 niveau 2",
        timing: "S2 2026",
      },
      {
        phase: "Phase 2",
        target: "Évaluation tierce CMMC 2.0 niveau 2",
        timing: "S2 2026 – S1 2027",
      },
      {
        phase: "Phase 3",
        target: "FedRAMP Moderate · DoD Impact Level 4",
        timing: "2027",
      },
      {
        phase: "Phase 4",
        target: "DoD Impact Level 5 (sponsorisé)",
        timing: "2028",
      },
    ],
    complianceNote:
      "CMMC 2.0 est devenu opposable le 10 novembre 2025, avec un déploiement par phases jusqu'en novembre 2028. Les PaaS DevSecOps pré-accrédités (Game Warden, Second Front, Platform One) permettent d'hériter d'une part substantielle des contrôles et de compresser le délai vers IL4.",

    stageTitle: "Stade & besoins",
    stageBody:
      "Tessera est au stade concept / pre-seed. Cette page est une note de thèse, pas une page produit. Aucune annonce de contrat, d'accréditation ou de pilote inexistant.",
    stageAsk: [
      "Deux partenaires de conception dans DLA, TRANSCOM ou un commandement de soutien de service",
      "Capital pre-seed pour assembler une équipe fondatrice avec expérience acquisition DoD et systèmes IA",
      "Introductions à d'anciens responsables programme de GCSS-Army, NAVSUP-ERP, JSDT ou AFWERX",
    ],

    disclaimerTitle: "Mention",
    disclaimerBody:
      "Tessera est une note de concept présentée sur le domaine de démonstration demo.sarl. Il ne s'agit pas d'une société enregistrée, ni d'un programme actif ; aucune revendication n'est faite quant à un contrat, une accréditation, un parrainage ou une affiliation DoD. L'ensemble des programmes, fournisseurs et chiffres tiers cités proviennent de sources publiquement publiées. Cette page est fournie à titre de discussion et d'exploration uniquement.",

    footerNotice:
      "Note de concept Tessera — contenu de démonstration. Aucun aval DoD impliqué.",
  },
};

export function getTesseraDict(locale: string): TesseraDict {
  const key = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : "en";
  return tesseraDictionaries[key];
}
