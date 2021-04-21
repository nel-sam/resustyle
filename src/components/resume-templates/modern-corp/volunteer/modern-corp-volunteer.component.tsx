import React from 'react';
import { Volunteer } from '../../../../models/interfaces';
import './modern-corp-volunteer.scss';

type ModernCorpVolunteerProps = {
  headerText: string;
  volunteer: Volunteer[];
};

const ModernCorpVolunteer: React.FC<ModernCorpVolunteerProps> = ({ volunteer: schools, headerText }: ModernCorpVolunteerProps) => {
  return (
    <div className="modern-corp-school">
      <div className="block"></div>
      <span className="header">{headerText}</span>

      <section className="volunteer">
        {schools.map(volunteer => {
          // TODO: a smarter way to display dates based on language
          const startDate = (new Date(volunteer.startDate)).toLocaleDateString();
          const endDate = (new Date(volunteer.endDate)).toLocaleDateString();

          return (
              <div className="volunteers" key={`${volunteer.organization}${volunteer.startDate}`}>
                <div className="date-location">
                  <span className="date">{startDate} - {endDate}</span>
                </div>
                <span>{`${volunteer.position}`}</span>
                <div>
                  <span>{volunteer.organization}</span>
                </div>
                <div>
                  <span>{volunteer.website}</span>
                </div>
                <span>{volunteer.summary}</span>
                <ul>
                  {volunteer.highlights?.map(h => (<li key={h}>{h}</li>))}
                </ul>
            </div>
            );
        })}
      </section>
    </div>);
};

export default ModernCorpVolunteer;