import React from 'react';
import { Resume } from '../../models/interfaces';
import ModernCorp from '../resume-templates/modern-corp/modern-corp-main.component';

type ResumeDisplayProps = {
  resume: Resume | undefined;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ resume }: ResumeDisplayProps) => {
  return (<div>
    { resume &&
      <div>
        <ModernCorp resume={resume}></ModernCorp>
      </div>
    }
  </div>);
};

export default ResumeDisplay;