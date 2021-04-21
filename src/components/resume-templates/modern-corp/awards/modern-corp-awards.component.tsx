import React from 'react';
import { Award } from '../../../../models/interfaces';
import './modern-corp-awards.scss';

type ModernCorpAwardsProps = {
  headerText: string;
  awards: Award[];
};

const ModernCorpAward: React.FC<ModernCorpAwardsProps> = ({ awards, headerText }: ModernCorpAwardsProps) => {
  return (
    <div className="modern-corp-school">
      <div className="block"></div>
      <span className="header">{headerText}</span>

      <section className="school">
        {awards.map(award => {
          // TODO: a smarter way to display dates based on language
          
          return (
              <div className="awards" key={`${award.awarder}${award.date}`}>
                <div className="date-location">
                  <span className="date">{award.date}</span>
                </div>
                <span>{`${award.title}`}</span>
                <div>
                  <span>{award.awarder}</span>
                </div>
                <span>{award.summary}</span>
            </div>
            );
        })}
      </section>
    </div>);
};

export default ModernCorpAward;