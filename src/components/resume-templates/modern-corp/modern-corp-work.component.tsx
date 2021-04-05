import React from 'react';
import { Work } from '../../../models/interfaces';

type ModernCorpWorkProps = {
  jobs: Work[]
};

const ModernCorpWork: React.FC<ModernCorpWorkProps> = ({ jobs }: ModernCorpWorkProps) => {
  return (<div>
    <span>EXPERIENCE (move to i18n)</span>
    { jobs.map(job => (
      <div key={`${job.company}${job.startDate}`}>
        {job.company}
      </div>
    ))

    }
  </div>);
};

export default ModernCorpWork;