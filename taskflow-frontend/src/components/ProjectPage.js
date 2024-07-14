// src/components/ProjectPage.js
import React, { useState } from 'react';
import FloatingButton from './ui/FloatingButton';
import Overlay from './ui/Overlay';
import './ProjectPage.css';
import TaskDetailsOverlay from './ui/TaskDetailsOverlay';

const ProjectPage = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Tâche 1', description: 'Description 1', dueDate: '2024-07-15', difficulty: 'Facile', priority: 'Haute', status: 'todo' },
    { id: 2, name: 'Tâche 2', description: 'Description 2', dueDate: '2024-07-20', difficulty: 'Moyenne', priority: 'Moyenne', status: 'todo' },
    { id: 3, name: 'Tâche 3', description: 'Description 3', dueDate: '2024-07-25', difficulty: 'Difficile', priority: 'Basse', status: 'in-progress' },
    { id: 4, name: 'Tâche 4', description: 'Description 4', dueDate: '2024-08-01', difficulty: 'Facile', priority: 'Haute', status: 'done' },
    { id: 5, name: 'Tâche 5', description: 'Description 5', dueDate: '2024-08-05', difficulty: 'Moyenne', priority: 'Moyenne', status: 'done' },
  ]);

  const handleOpenOverlay = () => {
    setOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setOverlayOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTask = {
      id: tasks.length + 1,
      name: formData.get('taskName'),
      description: formData.get('taskDescription'),
      dueDate: formData.get('taskDueDate'),
      difficulty: formData.get('taskDifficulty'),
      priority: formData.get('taskPriority'),
      status: 'todo' // Indique que la tâche est à faire
    };
    setTasks([...tasks, newTask]);
    handleCloseOverlay();
  };

  const changeTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  const renderTasks = (status) => {
    return tasks
      .filter(task => task.status === status)
      .map(task => (
        <div key={task.id} className="task-item">
          <h4>{task.name}</h4>
          <p>{task.description}</p>
          <p>Date limite: {task.dueDate}</p>
          <p>Difficulté: {task.difficulty}</p>
          <p>Priorité: {task.priority}</p>
          {status === 'todo' && (
            <button 
              onClick={() => changeTaskStatus(task.id, 'in-progress')} 
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Commencer
            </button>
          )}
          {status === 'in-progress' && (
            <button 
              onClick={() => changeTaskStatus(task.id, 'done')} 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Terminer
            </button>
          )}
        </div>
      ));
  };

  return (
    <div className="project-page">
      <h2>Project Page</h2>
      <div className="task-sections">
        <div className="task-section">
          <h3>À Faire</h3>
          {renderTasks('todo')}
        </div>
        <div className="task-section">
          <h3>En Cours</h3>
          {renderTasks('in-progress')}
        </div>
        <div className="task-section">
          <h3>Terminé</h3>
          {renderTasks('done')}
        </div>
      </div>

      <FloatingButton onClick={handleOpenOverlay} />

      <Overlay isOpen={isOverlayOpen} onClose={handleCloseOverlay}>
        <h3 className="text-lg font-semibold mb-4">Ajouter une nouvelle tâche</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom de la tâche</label>
            <input 
              type="text" 
              name="taskName"
              className="w-full p-2 border border-gray-300 rounded" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              name="taskDescription"
              className="w-full p-2 border border-gray-300 rounded" 
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date limite</label>
            <input 
              type="date" 
              name="taskDueDate"
              className="w-full p-2 border border-gray-300 rounded" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulté</label>
            <select 
              name="taskDifficulty"
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="Facile">Facile</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Difficile">Difficile</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Priorité</label>
            <select 
              name="taskPriority"
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="Basse">Basse</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Haute">Haute</option>
            </select>
          </div>
          <div className="text-right">
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Ajouter
            </button>
          </div>
        </form>
      </Overlay>
    </div>
  );
};

export default ProjectPage;
