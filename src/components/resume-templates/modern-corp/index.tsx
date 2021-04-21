import React from 'react';
import { useTranslation } from 'react-i18next';
import { ResumeTemplateProps } from '../../../models/interfaces';
import CircleImage from '../shared/circle-image/circle-image.component';
import ModernCorpWork from './work/modern-corp-work.component';
import ModernCorpEducation from './education/modern-corp-education.component';
import './modern-corp.scss';
import HorizontalLine from '../shared/horizontal-line';
import ModernCorpVolunteer from './volunteer/modern-corp-volunteer.component';
import ModernCorpReference from './references/modern-corp-references.component';
import ModernCorpAward from './awards/modern-corp-awards.component';
import ModernCorpPublication from './publications/modern-corp-publications.component';

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
      <HorizontalLine thicknessPx={1} color="white"></HorizontalLine>
      <p className="summary">
        {resume.basics.summary}
      </p>
      <HorizontalLine thicknessPx={1} color="white"></HorizontalLine>
      <section className="mc-skills">
        <h3 aria-label="Professional Skills">{t('skills')}</h3>
        {resume.skills.map(s =>
          <span className="mc-skill-item" key={s.name}><b>{s.name}</b>: <p>{s.keywords.join(', ')}</p></span>)
        }
      </section>
      <HorizontalLine thicknessPx={1} color="white"></HorizontalLine>
      <section className="mc-interests">
        <h3 aria-label="Interests">{t('interests')}</h3>
        {resume.interests.map(s =>
          <span className="mc-interest-item" key={s.name}><b>{s.name}</b>: <p>{s.keywords.join(', ')}</p></span>)
        }
      </section>
      <HorizontalLine thicknessPx={1} color="white"></HorizontalLine>
      <section className="mc-contact">
        <h3 aria-label="Contact">{t('contact')}</h3>
        <p>{resume.basics.email}</p>
        <p>{resume.basics.phone}</p>
        <div>
          <span>{`${resume.basics.location.address} ${resume.basics.location.city} ${resume.basics.location.postalCode}`}</span>
        </div>
        <div>
          {resume.basics.profiles.map(p =>
            <p key={p.url}>{`${p.network}: ${p.url}`}</p>
          )}
          {resume.basics.website.length > 0 &&
            <p>{resume.basics.website}</p>
          }
        </div>
      </section>
    </aside>
    <article className="right">
      <ModernCorpWork headerText={t('experience')} jobs={resume.work}></ModernCorpWork>
      <ModernCorpEducation headerText={t('education')} schools={resume.education}></ModernCorpEducation>
      <ModernCorpVolunteer headerText={t('volunteer')} volunteer={resume.volunteer}></ModernCorpVolunteer>
      <ModernCorpAward headerText={t('awards')} awards={resume.awards}></ModernCorpAward>
      <ModernCorpPublication headerText={t('publications')} publications={resume.publications}></ModernCorpPublication>
      <ModernCorpReference headerText={t('references')} references={resume.references}></ModernCorpReference>
    </article>
  </div>);
};

export default ModernCorp;