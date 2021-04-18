import React from 'react';
import { Resume } from '../../models/interfaces';
import ModernCorp from '../resume-templates/modern-corp';
import './resume-display.scss';
import { FontIcon } from '@fluentui/react/lib/Icon';
import TraditionalPro from '../resume-templates/traditional-pro';

type ResumeDisplayProps = {
  resume: Resume | undefined;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ resume }: ResumeDisplayProps) => {
  return (
    <div className="resume-display-main">
      { resume &&
        (<>
          <FontIcon aria-label="Print" title="Print" iconName="Print" className="print-button" onClick={() => window.print()} />
          <div className="resume-template">
            <TraditionalPro resume={resume}></TraditionalPro>
          </div>
        </>)
      }
    </div>);
};

export default ResumeDisplay;