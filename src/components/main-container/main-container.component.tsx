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
      <Importer onResumeSet={setResume}></Importer>
      <ResumeDisplay resume={resume}></ResumeDisplay>
      <AdSpace></AdSpace>
    </main>
  );
};

export default Main;