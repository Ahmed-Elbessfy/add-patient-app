import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
import en_translation from "./locales/en/en_translation.json";
import ar_translation from "./locales/ar/ar_translation.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: en_translation,
    },
    ar: {
      translation: ar_translation,
    },
  },
});

export default i18next;
