import React from 'react';
import { Reference } from '../../../../models/interfaces';
import './modern-corp-references.scss';

type ModernCorpReferenceProps = {
  headerText: string;
  references: Reference[];
};

const ModernCorpReference: React.FC<ModernCorpReferenceProps> = ({ references, headerText }: ModernCorpReferenceProps) => {
  return (
    <div className="modern-corp-school">
      <div className="block"></div>
      <span className="header">{headerText}</span>

      <section className="reference">
        {references.map(reference => {

          // TODO: a smarter way to display dates based on language
          return (
              <div className="references" key={`${reference.name}`}>
                <span>{`${reference.name}`}</span>
                <div>
                  <span>{reference.reference}</span>
                </div>
            </div>
            );
        })}
      </section>
    </div>);
};

export default ModernCorpReference;