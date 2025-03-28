import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import enTranslation from "./locales/en.json"
import amTranslation from "./locales/am.json"


i18n
  .use(LanguageDetector) 
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      am: {
        translation: amTranslation
      }
    },
    lng: localStorage.getItem('i18nextLng') || "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

  export default i18n;