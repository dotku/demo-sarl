export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

type Dict = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  whatIsTitle: string;
  whatIsBody: string;
  tldTitle: string;
  tldBody: string;
  countriesTitle: string;
  countries: string[];
  meaningTitle: string;
  meaningIntro: string;
  meaningItems: { letter: string; word: string; gloss: string }[];
  meaningNote: string;
  equivalentsTitle: string;
  equivalentsIntro: string;
  equivalentsItems: { country: string; term: string }[];
  usageTitle: string;
  usageItems: string[];
  projectsLabel: string;
  projectsTesseraTitle: string;
  projectsTesseraDesc: string;
  projectsTesseraCta: string;
  donateTitle: string;
  donateBody: string;
  donateButton: string;
  donatePoweredBy: string;
  footerNotice: string;
  langLabel: string;
};

export const dictionaries: Record<Locale, Dict> = {
  en: {
    metaTitle: "demo.sarl — Demonstration domain",
    metaDescription:
      "demo.sarl is a neutral demonstration domain used for prototypes and showcase work.",
    badge: "Demonstration domain",
    heroTitle: "demo.sarl",
    heroSubtitle:
      "A neutral demonstration domain on the .sarl gTLD — used for prototypes, proofs of concept, and showcase content.",
    whatIsTitle: "What is this site?",
    whatIsBody:
      "demo.sarl is reserved for product demos, proofs of concept, and showcase work. It is not a public service and offers no warranty. Content shown here is illustrative only.",
    tldTitle: "About the .sarl domain",
    tldBody:
      ".sarl is a generic top-level domain (gTLD) operated by Identity Digital. It is intended for companies registered under the SARL legal form (Société à Responsabilité Limitée), a limited-liability company structure used widely across the French-speaking world.",
    countriesTitle: "Where SARL is used",
    countries: [
      "France",
      "Luxembourg",
      "Switzerland (Sàrl)",
      "Monaco",
      "Belgium (legacy)",
      "Morocco · Algeria · Tunisia · Lebanon",
    ],
    meaningTitle: "What does SARL stand for?",
    meaningIntro:
      "SARL is a French acronym that breaks down letter by letter:",
    meaningItems: [
      { letter: "S", word: "Société", gloss: "Company" },
      { letter: "A", word: "à", gloss: "with" },
      { letter: "R", word: "Responsabilité", gloss: "Liability" },
      { letter: "L", word: "Limitée", gloss: "Limited" },
    ],
    meaningNote:
      "The term itself is French — introduced into French law in 1925. The underlying legal concept of a limited-liability company was first created in Germany in 1892 as GmbH.",
    equivalentsTitle: "Equivalents around the world",
    equivalentsIntro:
      "Most jurisdictions have their own term for a limited-liability company:",
    equivalentsItems: [
      { country: "France", term: "SARL" },
      { country: "Germany", term: "GmbH" },
      { country: "United Kingdom", term: "Ltd" },
      { country: "United States", term: "LLC" },
      { country: "Italy", term: "S.r.l." },
      { country: "Spain", term: "SL / SRL" },
    ],
    usageTitle: "Typical uses",
    usageItems: [
      "Product demonstrations",
      "Proofs of concept",
      "Design and UX showcases",
      "Internal previews",
    ],
    projectsLabel: "Concept brief",
    projectsTesseraTitle: "Tessera — AI-native sustainment for contested operations",
    projectsTesseraDesc:
      "An investment-stage concept brief for an AI-native logistics platform purpose-built for U.S. DoD operations in degraded and contested environments.",
    projectsTesseraCta: "Read the brief →",
    donateTitle: "Support this site",
    donateBody:
      "If demo.sarl has been useful, you can chip in to help cover hosting and domain costs. Any amount is appreciated.",
    donateButton: "Donate via Stripe",
    donatePoweredBy: "Secure payment powered by Stripe",
    footerNotice: "demo.sarl — demonstration content, no warranty.",
    langLabel: "Language",
  },
  fr: {
    metaTitle: "demo.sarl — Domaine de démonstration",
    metaDescription:
      "demo.sarl est un domaine de démonstration neutre, utilisé pour des prototypes et des vitrines.",
    badge: "Domaine de démonstration",
    heroTitle: "demo.sarl",
    heroSubtitle:
      "Un domaine de démonstration neutre sur le gTLD .sarl — pour prototypes, preuves de concept et contenus de vitrine.",
    whatIsTitle: "Qu'est-ce que ce site ?",
    whatIsBody:
      "demo.sarl est réservé aux démonstrations produit, preuves de concept et vitrines. Ce n'est pas un service public et aucune garantie n'est offerte. Les contenus présentés sont purement illustratifs.",
    tldTitle: "À propos du domaine .sarl",
    tldBody:
      ".sarl est un domaine de premier niveau générique (gTLD) opéré par Identity Digital. Il est destiné aux sociétés constituées sous la forme juridique SARL (Société à Responsabilité Limitée), largement utilisée dans le monde francophone.",
    countriesTitle: "Où la SARL est utilisée",
    countries: [
      "France",
      "Luxembourg",
      "Suisse (Sàrl)",
      "Monaco",
      "Belgique (historique)",
      "Maroc · Algérie · Tunisie · Liban",
    ],
    meaningTitle: "Que signifie SARL ?",
    meaningIntro: "SARL est un acronyme français qui se décompose ainsi :",
    meaningItems: [
      { letter: "S", word: "Société", gloss: "Entreprise" },
      { letter: "A", word: "à", gloss: "à" },
      { letter: "R", word: "Responsabilité", gloss: "Responsabilité" },
      { letter: "L", word: "Limitée", gloss: "Limitée" },
    ],
    meaningNote:
      "Le terme est français — introduit dans le droit français en 1925. Le concept juridique de société à responsabilité limitée a quant à lui été créé en Allemagne en 1892 sous le nom GmbH.",
    equivalentsTitle: "Équivalents dans le monde",
    equivalentsIntro:
      "La plupart des juridictions ont leur propre terme pour la société à responsabilité limitée :",
    equivalentsItems: [
      { country: "France", term: "SARL" },
      { country: "Allemagne", term: "GmbH" },
      { country: "Royaume-Uni", term: "Ltd" },
      { country: "États-Unis", term: "LLC" },
      { country: "Italie", term: "S.r.l." },
      { country: "Espagne", term: "SL / SRL" },
    ],
    usageTitle: "Usages typiques",
    usageItems: [
      "Démonstrations produit",
      "Preuves de concept",
      "Vitrines design et UX",
      "Aperçus internes",
    ],
    projectsLabel: "Note de concept",
    projectsTesseraTitle:
      "Tessera — Soutien logistique IA-natif pour opérations contestées",
    projectsTesseraDesc:
      "Note de concept au stade investissement pour une plateforme logistique IA-native destinée aux opérations DoD en environnement dégradé et contesté.",
    projectsTesseraCta: "Lire la note →",
    donateTitle: "Soutenir ce site",
    donateBody:
      "Si demo.sarl vous a été utile, vous pouvez contribuer aux frais d'hébergement et de domaine. Tout montant est apprécié.",
    donateButton: "Faire un don avec Stripe",
    donatePoweredBy: "Paiement sécurisé par Stripe",
    footerNotice: "demo.sarl — contenu de démonstration, sans garantie.",
    langLabel: "Langue",
  },
};

export function getDict(locale: string): Dict {
  return dictionaries[(locale as Locale) in dictionaries ? (locale as Locale) : defaultLocale];
}
