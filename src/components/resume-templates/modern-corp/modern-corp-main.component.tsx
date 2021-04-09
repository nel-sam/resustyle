import React from 'react';
import { useTranslation } from 'react-i18next';
import { Resume } from '../../../models/interfaces';
import CircleImage from '../shared/circle-image/circle-image.component';
import ModernCorpWork from './work/modern-corp-work.component';
import './modern-corp.scss';

type ModernCorpProps = {
  resume: Resume
};

const ModernCorp: React.FC<ModernCorpProps> = ({ resume }: ModernCorpProps) => {
  const isPreviewMode = true;
  const { t } = useTranslation();

  return (<div className={isPreviewMode ? 'modern-corp-main preview-mode' : 'modern-corp-main'}>
    <aside className="left">
      <div className="circle-image">
        <CircleImage url={resume.basics.picture}></CircleImage>
      </div>
      <div className="name">
        <span>{resume.basics.name}</span>
      </div>
      <p className="summary">
        {resume.basics.summary}
      </p>
    </aside>
    <article className="right">
      <ModernCorpWork headerText={t('experience')} jobs={resume.work}></ModernCorpWork>
    </article>
  </div>);
};

export default ModernCorp;