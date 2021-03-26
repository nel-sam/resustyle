import { TextField } from '@fluentui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Importer() {
  const { t } = useTranslation();

  return (
    <div>
      <TextField
        label={t('enterJson')}
        multiline rows={20}
        placeholder="{}"
      />
    </div>);
}

export default Importer;