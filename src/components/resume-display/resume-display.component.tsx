import React, { useState } from 'react';
import { Resume } from '../../models/interfaces';
import ModernCorp from '../resume-templates/modern-corp';
import './resume-display.scss';
import { FontIcon } from '@fluentui/react/lib/Icon';
import TraditionalPro from '../resume-templates/traditional-pro';
import { DefaultButton } from '@fluentui/react';
import { btnStyles } from '../resume-templates/shared/styles';

type ResumeDisplayProps = {
  resume: Resume | undefined;
}

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ resume }: ResumeDisplayProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // Increase this if a new template is added
  const templateMaxIndex = 1;

  const onPrevious = () => {
    console.log(activeIndex);
    setActiveIndex(prevState => prevState === 0 ? templateMaxIndex : prevState - 1);
  };
  const onNext = () => {
    console.log(activeIndex);
    setActiveIndex(prevState => prevState === templateMaxIndex ? 0 : prevState + 1);
  };

  return (
    <div className="resume-display-main">
      { resume &&
        (<>
          <nav className="resume-display-nav">
            <DefaultButton aria-label="Previous resume template" styles={btnStyles} onClick={() => onPrevious()}>
              <FontIcon title="Previous" iconName="DoubleChevronLeft8"></FontIcon>
            </DefaultButton>

            <DefaultButton styles={btnStyles} onClick={() => window.print()}>
              <FontIcon aria-label="Print resume" title="Print" iconName="Print" />
            </DefaultButton>

            <DefaultButton aria-label="Next resume template" styles={btnStyles} onClick={() => onNext()}>
              <FontIcon title="Next" iconName="DoubleChevronRight8"></FontIcon>
            </DefaultButton>
          </nav>
          <div className="resume-template">
            {activeIndex === 0 && <ModernCorp resume={resume}></ModernCorp>}
            {activeIndex === 1 && <TraditionalPro resume={resume}></TraditionalPro>}

          </div>
        </>)
      }
    </div>);
};

export default ResumeDisplay;