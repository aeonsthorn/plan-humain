export default function I(translationtext, lang) {
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

  const text = translations[translationtext]
    ? translations[translationtext][lang]
    : translationtext;

  return text ? text : translationtext;
}
