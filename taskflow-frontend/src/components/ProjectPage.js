// src/components/ProjectPage.js
import React from 'react';
import './ProjectPage.css';

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h2>Project Page</h2>
      <span>
      <div className="task-section">
        <h3>À Faire</h3>
        <div className="task-item">Tâche 1</div>
        <div className="task-item">Tâche 2</div>
      </div>
      <div className="task-section">
        <h3>En Cours</h3>
        <div className="task-item">Tâche 3</div>
      </div>
      <div className="task-section">
        <h3>Terminé</h3>
        <div className="task-item">Tâche 4</div>
        <div className="task-item">Tâche 5</div>
      </div></span>
    </div>
    
  );
};

export default ProjectPage;
