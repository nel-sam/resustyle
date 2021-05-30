import React, { Suspense } from 'react';
import './App.scss';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { ComboBox, IComboBox, IComboBoxOption, initializeIcons } from '@fluentui/react';
import MainContainer from './components/main-container/main-container.component';
import { FontIcon } from '@fluentui/react/lib/Icon';

import translationsEn from './translations/en.json';
import translationsEs from './translations/es.json';
import translationsFr from './translations/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      es: { translation: translationsEs },
      fr: { translation: translationsFr },
    },
    lng: translationsEn.key,
    fallbackLng: translationsEs.key,
    interpolation: { escapeValue: false },
  });

const changeLanguage = (
  event: React.FormEvent<IComboBox>,
  option?: IComboBoxOption): void => {
  i18n.changeLanguage(option?.key.toString());
};

const App: React.FC = () => {
  const { t } = useTranslation();
  initializeIcons();

  const comboBoxRef = React.useRef<IComboBox>(null);
  const comboBoxOptions: IComboBoxOption[] = [
    { key: translationsEn.key, text: translationsEn.langName },
    { key: translationsEs.key, text: translationsEs.langName },
    { key: translationsFr.key, text: translationsFr.langName },
  ];

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <header className="App-header">
          <h1 className="app-title">
            ResuStyle
          </h1>
          <div className="lang-select">
            <FontIcon className="lang-icon" aria-label="Language icon" title="Language" iconName="LocaleLanguage" />
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
};

export default App;
