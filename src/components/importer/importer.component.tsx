import { TextField } from '@fluentui/react';
import React, { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

const Importer: React.FC = () => {
  const { t } = useTranslation();

  const onJsonEntry = (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>,
    newValue: string | undefined
  ): void => {
    console.log(newValue);
  };

  return (
    <div>
      <TextField
        label={t('enterJson')}
        multiline rows={20}
        placeholder="{}"
        onChange={onJsonEntry}
      />
    </div>);
};

export default Importer;