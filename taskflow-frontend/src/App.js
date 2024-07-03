// src/App.js
import React, { useState } from 'react';
import CalendarComponent from './components/Calendar';
import Chat from './components/Chat';
import TaskManager from './components/TaskManager';
import ProjectPage from './components/ProjectPage';
import MessagingPage from './components/MessagingPage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('calendar'); // Définir la page actuelle

  // Fonction pour rendre la page en fonction de currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'calendar':
        return <CalendarComponent />;
      case 'project':
        return <ProjectPage />;
      case 'messaging':
        return <MessagingPage />;
      default:
        return <CalendarComponent />;
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Taskflow</h2>
        <ul>
          <li onClick={() => setCurrentPage('calendar')}><i className="fas fa-tachometer-alt"></i> Dashboard</li>
          <li onClick={() => setCurrentPage('calendar')}><i className="fas fa-calendar-alt"></i> Calendar</li>
          <li onClick={() => setCurrentPage('messaging')}><i className="fas fa-comments"></i> Chat</li>
          <li onClick={() => setCurrentPage('project')}><i className="fas fa-tasks"></i> Projects</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="top-bar">
          <img src="/path/to/logo.png" alt="Taskflow Logo" />
          <input type="text" placeholder="Search..." />
        </div>
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
