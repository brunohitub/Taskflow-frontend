import React from 'react';
import CalendarComponent from './components/Calendar';
import Chat from './components/Chat';
import TaskManager from './components/TaskManager';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
    <div className="sidebar">
      <h2>Taskflow</h2>
      <ul>
        <li><i className="fas fa-tachometer-alt"></i> Dashboard</li>
        <li><i className="fas fa-calendar-alt"></i> Calendar</li>
        <li><i className="fas fa-comments"></i> Chat</li>
        <li><i className="fas fa-tasks"></i> Tasks</li>
      </ul>
    </div>
    <div className="main-content">
      <h1>Welcome to Taskflow</h1>
      <CalendarComponent />
      <Chat />
      <TaskManager />
    </div>
  </div>
);
};

export default App;
