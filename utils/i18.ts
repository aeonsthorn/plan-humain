const translations = {
  Accueil: {
    fr: "Accueil",
    en: "Home",
  },
  équipe: { fr: "équipe", en: "Team" },
  Prénom: { fr: "Prénom", en: "First Name" },
  Nom: { fr: "Nom", en: "Last Name" },
  Courriel: { fr: "Courriel", en: "Email" },
  Téléphone: { fr: "Téléphone", en: "Telephone" },
};

export default function i(
  textToTranslate: keyof typeof translations,
  lang: "fr" | "en"
) {
  if (!lang) {
    throw new Error("lang is required");
  }

  if (!textToTranslate) {
    throw new Error("textToTranslate is required");
  }

  return translations[textToTranslate][lang];
}
