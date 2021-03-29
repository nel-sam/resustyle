import React from 'react';
import './main-container.scss';
import Importer from '../importer/importer.component';
import ResumeDisplay from '../resume-display/resume-display.component';

const Main: React.FC = () => {
  return (
    <main className="main-container">
      <Importer></Importer>
      <ResumeDisplay></ResumeDisplay>
    </main>
  );
};

export default Main;