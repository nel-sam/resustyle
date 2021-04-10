import React from 'react';
import { Resume } from '../../models/interfaces';
import ModernCorp from '../resume-templates/modern-corp/modern-corp-main.component';
import './resume-display.scss';

type ResumeDisplayProps = {
  resume: Resume | undefined;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ resume }: ResumeDisplayProps) => {
  return (
    <div className="resume-display-main">
      { resume &&
        (<div className="resume-template">
          <ModernCorp resume={resume}></ModernCorp>
        </div>)
      }
    </div>);
};

export default ResumeDisplay;