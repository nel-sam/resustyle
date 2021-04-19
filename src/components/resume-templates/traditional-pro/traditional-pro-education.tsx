import React from 'react';
import { Education } from '../../../models/interfaces';

type TraditionalProEducationProps = {
  educationItems: Education[];
};

const TraditionalProEducation: React.FC<TraditionalProEducationProps> =
  ({ educationItems }: TraditionalProEducationProps) => {
    return (
      <div>
        {educationItems.map(ed => (
          <span key={`${ed.area}${ed.institution}`}>
            <strong>{ed.area}: </strong> {ed.institution}
          </span>
        ))}
      </div>);
  };

export default TraditionalProEducation;