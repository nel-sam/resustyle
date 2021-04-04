import React from 'react';
import { Resume } from '../../models/interfaces';

type ResumeDisplayProps = {
  resume: Resume | undefined;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ resume }: ResumeDisplayProps) => {
  return (<div>
    { resume &&
      <div>{resume.basics.name}</div>
    }
  </div>);
};

export default ResumeDisplay;