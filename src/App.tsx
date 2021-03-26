import React, { Suspense } from 'react';
import './App.scss';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const translationsEn = { welcome: 'Welcome' };
const translationsEs = { welcome: 'Bienvenido' };

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      es: { translation: translationsEs },
    },
    lng: 'en',
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
  });

const onChangeLanguage = (event: React.FormEvent<HTMLSelectElement>): void => {
  i18n.changeLanguage(event.currentTarget.value);
}

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <header className="App-header">
          <select name="language" onChange={onChangeLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <span>{t('welcome')}</span>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
