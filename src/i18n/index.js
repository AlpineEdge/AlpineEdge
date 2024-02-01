import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enFile from "./resources/en";
import deFile from "./resources/de";
import alFile from "./resources/al";
import itFile from "./resources/it";
import frFile from "./resources/fr";

export const languages = [
  "en",
  "de",
  "al",
  "it",
  "fr",
];

const resources = {
  en: enFile,
  de: deFile,
  al: alFile,
  it: itFile,
  fr: frFile,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;