import React, { Suspense } from 'react';
import './App.scss';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { ComboBox, IComboBox, IComboBoxOption, initializeIcons } from '@fluentui/react';
import { translationsEn } from './translations/en';
import { translationsEs } from './translations/es';
import { translationsFr } from './translations/fr';
import { translationsJp } from './translations/jp';
import MainContainer from './components/main-container/main-container.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      es: { translation: translationsEs },
      fr: { translation: translationsFr },
      jp: { translation: translationsJp },
    },
    lng: translationsEn.key,
    fallbackLng: translationsEs.key,
    interpolation: { escapeValue: false },
  });

const changeLanguage = (event: React.FormEvent<IComboBox>, option?: IComboBoxOption): void => {
  i18n.changeLanguage(option?.key.toString());
}

function App() {
  const { t } = useTranslation();
  initializeIcons();

  const comboBoxRef = React.useRef<IComboBox>(null);
  const comboBoxOptions: IComboBoxOption[] = [
    { key: translationsEn.key, text: translationsEn.langName },
    { key: translationsEs.key, text: translationsEs.langName },
    { key: translationsFr.key, text: translationsFr.langName },
    { key: translationsJp.key, text: translationsJp.langName },
  ];

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <header className="App-header">
          <h1>{t('welcome')}</h1>
          <div className="lang-select">
            <FontAwesomeIcon className="lang-icon" icon={faLanguage} />
            <ComboBox
              componentRef={comboBoxRef}
              defaultSelectedKey="en"
              label=""
              allowFreeform
              autoComplete="on"
              onChange={changeLanguage}
              options={comboBoxOptions}
            />
          </div>
        </header>
        <MainContainer></MainContainer>
      </div>
    </Suspense>
  );
}

export default App;
