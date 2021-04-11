import { MessageBar, MessageBarType, TextField } from '@fluentui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ValidationErrorTypes } from '../../enums';
import { Resume, ResumeValidationResult } from '../../models/interfaces';
import ResumeService from '../../services/resume.service';
import SchemaDisplay from '../schema-display/schema-display.component';

interface ImporterProps {
  onResumeSet(resume: Resume): void;
}

const Importer: React.FC<ImporterProps> = ({ onResumeSet }: ImporterProps) => {
  const resumeService = new ResumeService();
  const { t } = useTranslation();
  const [validationResults, setValidationResults] = useState<ResumeValidationResult>();

  const onJsonEntry = (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>,
    newValue: string | undefined
  ): void => {
    if (newValue === undefined) {
      return;
    }

    const parseResult = resumeService.parseResume(newValue);

    if (!parseResult.validationResult.isValid) {
      setValidationResults(parseResult.validationResult); 
      return;
    }

    onResumeSet(parseResult.resume);
  };

  const onDismiss = (): void => {
    setValidationResults(undefined);
  };

  const getValidationErrorMessage = (valRes: ResumeValidationResult): string => {
    if(valRes.errorType === ValidationErrorTypes.MissingRequiredProperty) {
      return `${t('missing-required-property')}: ${valRes.errorDetails}`;
    }
    
    if(valRes.errorType === ValidationErrorTypes.UnexpectedPropertyFound) {
      return `${t('unexpected-property-found')}: ${valRes.errorDetails}`;
    }
    return '';
  };

  return (
    <div>
      <SchemaDisplay></SchemaDisplay>
      {validationResults &&   
      !validationResults?.isValid && 
      validationResults?.errorType !== ValidationErrorTypes.None &&
        <MessageBar 
          className="err"
          messageBarType={MessageBarType.error}
          isMultiline={false}
          dismissButtonAriaLabel="Close"
          onDismiss={onDismiss}
        >
         {getValidationErrorMessage(validationResults)}
        </MessageBar>}
      <TextField
        label={t('enterJson')}
        multiline rows={20}
        placeholder="{}"
        onChange={onJsonEntry}
      />
    </div>
  );
};

export default Importer;