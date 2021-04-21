import React from 'react';
import { Work } from '../../../../models/interfaces';
import './modern-corp-work.scss';

type ModernCorpWorkProps = {
  headerText: string;
  jobs: Work[];
};

const ModernCorpWork: React.FC<ModernCorpWorkProps> = ({ jobs, headerText }: ModernCorpWorkProps) => {
  return (
    <div className="modern-corp-work">
      <div className="block"></div>
      <span className="header">{headerText}</span>

      <section className="job">
        {jobs.map(job => {
          // TODO: a smarter way to display dates based on language
          const startDate = (new Date(job.startDate)).toLocaleDateString();
          const endDate = (new Date(job.endDate)).toLocaleDateString();

          return (
              <div className="jobs" key={`${job.company}${job.startDate}`}>
                <div className="date-location">
                  <span className="date">{startDate} - {endDate}</span>
                </div>
                <span className="position">{job.position}</span>
                <div>
                  <span className="company">{job.company}</span>
                  <span className="company-url">{job.website}</span>
                </div>
                <span className="summary">{job.summary}</span>
                <ul>
                  {job.highlights?.map(h => (<li key={h}>{h}</li>))}
                </ul>
            </div>
            );
        })}
      </section>
    </div>);
};

export default ModernCorpWork;