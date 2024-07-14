// src/components/ui/TaskDetailsOverlay.js
import React from 'react';
import './Overlay.css';

const TaskDetailsOverlay = ({ task, isOpen, onClose }) => {
  if (!isOpen || !task) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackgroundClick}>
      <div className="overlay-content task-details-overlay">
        <button onClick={onClose} className="close-button">X</button>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <p>Date limite: {task.dueDate}</p>
        <p>Difficulté: {task.difficulty}</p>
        <p>Priorité: {task.priority}</p>
        
        <h4>Sous-tâches</h4>
        <ul>
          {task.subtasks && task.subtasks.length > 0 ? (
            task.subtasks.map((subtask, index) => (
              <li key={index}>{subtask}</li>
            ))
          ) : (
            <p>Aucune sous-tâche</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskDetailsOverlay;
