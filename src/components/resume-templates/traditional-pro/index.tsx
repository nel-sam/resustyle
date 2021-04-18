import React from 'react';
import './traditional-pro.scss';
import { ResumeTemplateProps } from '../../../models/interfaces';
import HorizontalLine from '../shared/horizontal-line';

const TraditionalPro: React.FC<ResumeTemplateProps> = ({ resume }: ResumeTemplateProps) => {
  return (
    <div className="tp-main">
      <span className="tp-name">
        {resume.basics.name}
      </span>
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
      </section>
    </div>
  );
};

export default TraditionalPro;