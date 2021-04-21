import React from 'react';
import { Publication } from '../../../../models/interfaces';
import './modern-corp-publications.scss';

type ModernCorpPublicationsProps = {
  headerText: string;
  publications: Publication[];
};

const ModernCorpPublication: React.FC<ModernCorpPublicationsProps> = ({ publications, headerText }: ModernCorpPublicationsProps) => {
  return (
    <div className="modern-corp-school">
      <div className="block"></div>
      <span className="header">{headerText}</span>

      <section className="school">
        {publications.map(publication => {
          // TODO: a smarter way to display dates based on language
          
          return (
              <div className="awards" key={`${publication.name}${publication.releaseDate}`}>
                <div className="date-location">
                  <span className="date">{publication.releaseDate}</span>
                </div>
                <span>{`${publication.name}`}</span>
                <div>
                  <span>{publication.publisher}</span>
                </div>
                <div>
                  <span>{publication.website}</span>
                </div>
                <span>{publication.summary}</span>
            </div>
            );
        })}
      </section>
    </div>);
};

export default ModernCorpPublication;