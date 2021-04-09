import React from 'react';
import { Resume } from '../../models/interfaces';
import ModernCorp from '../resume-templates/modern-corp/modern-corp-main.component';
import './resume-display.scss';

type ResumeDisplayProps = {
  resume: Resume | undefined;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ resume }: ResumeDisplayProps) => {
  return (
    <div>
      { resume &&
        <ModernCorp resume={resume}></ModernCorp>
      }
    </div >);
};

export default ResumeDisplay;