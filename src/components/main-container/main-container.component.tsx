import React, { useState } from 'react';
import './main-container.scss';
import Importer from '../importer/importer.component';
import ResumeDisplay from '../resume-display/resume-display.component';
import { Resume } from '../../models/interfaces';
import AdSpace from '../adspace';

const Main: React.FC = () => {
  const [resume, setResume] = useState<Resume>();

  return (
    <main className="main-container">
      <div className="top">
        <AdSpace></AdSpace>
      </div>
      <div className="bottom">
        <Importer onResumeSet={setResume}></Importer>
        <ResumeDisplay resume={resume}></ResumeDisplay>
      </div>
    </main>
  );
};

export default Main;