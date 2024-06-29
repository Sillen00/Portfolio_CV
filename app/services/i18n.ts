import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import sv from "../locales/sv.json";

const resources = {
  en: {
    translation: en,
  },
  sv: {
    translation: sv,
  },
};

// Function to detect browser language
// const detectLanguage = () => {
//   if (typeof window !== "undefined" && window.navigator.language) {
//     const language = window.navigator.language;
//     // Return only the language code (e.g., "en" instead of "en-US")
//     return language.split("-")[0];
//   }
//   return "en"; // Default to English if detection fails
// };

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    // lng: detectLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
