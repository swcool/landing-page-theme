import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,

    lng: 'zh-TW',             //預設語言
    fallbackLng: 'zh-TW',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，

    // lng: 'en',             //預設語言
    // fallbackLng: 'en',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;