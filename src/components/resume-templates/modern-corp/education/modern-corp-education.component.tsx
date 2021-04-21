import React from 'react';
import { Education } from '../../../../models/interfaces';
import './modern-corp-education.scss';

type ModernCorpEducationProps = {
  headerText: string;
  schools: Education[];
};

const ModernCorpEducation: React.FC<ModernCorpEducationProps> = ({ schools, headerText }: ModernCorpEducationProps) => {
  return (
    <div className="modern-corp-school">
      <div className="block"></div>
      <span className="header">{headerText}</span>

      <section className="school">
        {schools.map(school => {
          // TODO: a smarter way to display dates based on language
          const startDate = (new Date(school.startDate)).toLocaleDateString();
          const endDate = (new Date(school.endDate)).toLocaleDateString();

          return (
              <div className="schools" key={`${school.institution}${school.startDate}`}>
                <div className="date-location">
                  <span className="date">{startDate} - {endDate}</span>
                </div>
                <span>{`${school.studyType} of ${school.area}`}</span>
                <div>
                  <span>{school.institution}</span>
                </div>
                <span>GPA: {school.gpa}</span>
                <ul>
                  {school.courses?.map(h => (<li key={h}>{h}</li>))}
                </ul>
            </div>
            );
        })}
      </section>
    </div>);
};

export default ModernCorpEducation;