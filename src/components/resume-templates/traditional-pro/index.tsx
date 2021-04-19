import React from 'react';
import './traditional-pro.scss';
import { ResumeTemplateProps } from '../../../models/interfaces';
import HorizontalLine from '../shared/horizontal-line';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import TraditionalProWork from './traditional-pro-work';

const TraditionalPro: React.FC<ResumeTemplateProps> = ({ resume }: ResumeTemplateProps) => {
  const { t } = useTranslation();

  return (
    <div className="tp-main">
      <h2 className="tp-name">
        {resume.basics.name}
      </h2>

      <HorizontalLine thicknessPx={2}></HorizontalLine>

      <section className="tp-contact">
        <div className="tp-address">
          <span>{resume.basics.location.address}</span>
          <span>{`${resume.basics.location.city} ${resume.basics.location.postalCode}`}</span>
        </div>
        <div className="tp-social-links">
          {resume.basics.profiles.map(p =>
            <span key={p.url}>{`${p.network}: ${p.url}`}</span>
          )}
          {resume.basics.website.length > 0 &&
            <span>{resume.basics.website}</span>
          }
        </div>
        <div className="tp-phone-email">
          <span>
            <FontAwesomeIcon className="tp-phone-icon" icon={faPhoneSquare}></FontAwesomeIcon>
            {resume.basics.phone}
          </span>
          <span>{resume.basics.email}</span>
        </div>
      </section>

      <h3 className="tp-title">{resume.basics.label}</h3>

      <HorizontalLine></HorizontalLine>

      <section className="tp-summary">
        <span className="tp-summary-inner">{resume.basics.summary}</span>
      </section>

      <h3>{t('skills')}</h3>
      <HorizontalLine></HorizontalLine>
      <section className="tp-skills">
        {resume.skills.map(s =>
          <span className="tp-skill-item" key={s.name}><b>{s.name}</b>: {s.keywords.join(', ')}</span>)
        }
      </section>

      <h3>{t('experience')}</h3>
      <HorizontalLine></HorizontalLine>
      <TraditionalProWork jobs={resume.work}></TraditionalProWork>

      <h3>{t('volunteer')}</h3>
      <HorizontalLine></HorizontalLine>

      <h3>{t('education')}</h3>
      <HorizontalLine></HorizontalLine>

    </div>
  );
};

export default TraditionalPro;