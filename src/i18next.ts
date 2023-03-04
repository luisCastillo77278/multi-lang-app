import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18NextHttpBackend from 'i18next-http-backend';

const getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:5173' : 'LINK TO PROD';

i18next
  .use(initReactI18next)
  .use(i18NextHttpBackend)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
  });

export default i18next;
