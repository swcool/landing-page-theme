import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './i18n/en.json';
import tw from './i18n/zh-TW.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    'en': {
      translation: en,
    },
    'zh-TW': {
      translation: tw,
    },
  };

  const options = {
    resources,

    whitelist: ["en", "zh-TW"],
    nonExplicitWhitelist: false,
    fallbackLng: {
      'en': ['en'],
      'default': ['zh-TW']  //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    },
    ng: 'zh-TW',            //預設語言

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  }

  export const locales = Object.keys(options.resources);
  export function getCurrentLocale() {
    return i18n.languages.find((lng => locales.indexOf(lng) !== -1))
  }

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(options);

  export default i18n;