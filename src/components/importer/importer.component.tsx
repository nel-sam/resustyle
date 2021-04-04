import { TextField } from '@fluentui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Resume } from '../../models/interfaces';
import ResumeService from '../../services/resume.service';

interface ImporterProps {
  onResumeSet(resume: Resume): void;
}

const Importer: React.FC<ImporterProps> = ({ onResumeSet }: ImporterProps) => {
  const resumeService = new ResumeService();
  const { t } = useTranslation();

  const onJsonEntry = (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>,
    newValue: string | undefined
  ): void => {
    if (newValue === undefined) {
      return;
    }

    const parseResult = resumeService.parseResume(newValue);

    if (!parseResult.validationResult.isValid) {
      alert(`${parseResult.validationResult.errorType}: ${parseResult.validationResult.errorDetails}`);
      return;
    }

    onResumeSet(parseResult.resume);
  };

  return (
    <TextField
      label={t('enterJson')}
      multiline rows={20}
      placeholder="{}"
      onChange={onJsonEntry}
    />
  );
};

export default Importer;