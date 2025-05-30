import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import fa from './locales/fa/translation.json';
import ckb from './locales/ckb/translation.json';
import ku from './locales/ku/translation.json';
import fr from './locales/fr/translation.json';
import de from './locales/de/translation.json';
import zh from './locales/zh/translation.json';
import ru from './locales/ru/translation.json';
import hi from './locales/hi/translation.json';
import ur from './locales/ur/translation.json';
import ar from './locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
      ckb: { translation: ckb },
      ku: { translation: ku },
      fr: { translation: fr },
      de: { translation: de },
      zh: { translation: zh },
      ru: { translation: ru },
      hi: { translation: hi },
      ur: { translation: ur },
      ar: { translation: ar },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;