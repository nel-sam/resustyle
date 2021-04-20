import React from 'react';
import { Work } from '../../../models/interfaces';
import './traditional-pro.scss';

type TraditionalProWorkProps = {
  jobs: Work[];
};

const TraditionalProWork: React.FC<TraditionalProWorkProps> = ({ jobs }: TraditionalProWorkProps) => {
  return (
    <section className="tp-job">
      {jobs.map(job => {
        // TODO: a smarter way to display dates based on language
        const startDate = (new Date(job.startDate)).toLocaleDateString();
        const endDate = (new Date(job.endDate)).toLocaleDateString();

        return (
          <div className="tp-job-section" key={`${job.company}${job.startDate}`}>
            <div className="tp-job-header">
              <span className="tp-position-company">{job.position}, {job.company}</span>
              {/* <span className="location">{job.location}</span> */}
            </div>

            <span className="tp-date">{startDate} - {endDate}</span>
            <p className="tp-summary">{job.summary}</p>
            <ul>
              {job.highlights?.map(h => (<li key={h}>{h}</li>))}
            </ul>
          </div>);
      })}
    </section>);
};

export default TraditionalProWork;