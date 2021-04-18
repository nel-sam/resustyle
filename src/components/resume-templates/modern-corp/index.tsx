import React from 'react';
import { useTranslation } from 'react-i18next';
import { Resume, ResumeTemplateProps } from '../../../models/interfaces';
import CircleImage from '../shared/circle-image/circle-image.component';
import ModernCorpWork from './work/modern-corp-work.component';
import './modern-corp.scss';

const ModernCorp: React.FC<ResumeTemplateProps> = ({ resume }: ResumeTemplateProps) => {
  const { t } = useTranslation();

  return (<div className='modern-corp-main'>
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