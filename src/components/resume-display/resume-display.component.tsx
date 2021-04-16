import React from 'react';
import { Resume } from '../../models/interfaces';
import ModernCorp from '../resume-templates/modern-corp/modern-corp-main.component';
import './resume-display.scss';
import { FontIcon } from '@fluentui/react/lib/Icon';

type ResumeDisplayProps = {
  resume: Resume | undefined;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ resume }: ResumeDisplayProps) => {
  return (
    <div className="resume-display-main">
      { resume &&
        (<>
            <FontIcon aria-label="Print" iconName="Print" className="print-button" onClick={() => window.print()}/>
            <div className="resume-template">
              <ModernCorp resume={resume}></ModernCorp>
            </div>
        </>)
      }
    </div>);
};

export default ResumeDisplay;