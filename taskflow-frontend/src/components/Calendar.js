// src/components/Calendar.js
import React, { useState } from 'react';
import { Calendar as CalendarIcon, MessageSquare, Settings, Folder, Home } from 'lucide-react';
import Button from './ui/Button';

const CalendarComponent = () => {
  const [activeTab, setActiveTab] = useState('home');

  const projects = [
    { id: 1, name: "Refonte site e-commerce", startDate: new Date(2024, 6, 1), endDate: new Date(2024, 7, 15), color: "bg-pink-200", progress: 30 },
    { id: 2, name: "Application mobile fitness", startDate: new Date(2024, 7, 1), endDate: new Date(2024, 7, 31), color: "bg-blue-200", progress: 0 },
    { id: 3, name: "Dashboard analytics", startDate: new Date(2024, 5, 15), endDate: new Date(2024, 6, 30), color: "bg-green-200", progress: 75 },
    { id: 4, name: "API REST pour blog", startDate: new Date(2024, 6, 20), endDate: new Date(2024, 7, 10), color: "bg-yellow-200", progress: 50 },
  ];

  const MenuItem = ({ icon: Icon, label, tabName }) => (
    <Button 
      variant={activeTab === tabName ? "secondary" : "ghost"} 
      className="w-full h-full flex flex-col items-center justify-center p-2"
      onClick={() => setActiveTab(tabName)}
    >
      <Icon className="h-6 w-6 mb-1" />
      <span className="text-xs">{label}</span>
    </Button>
  );

  const Timeline = () => {
    const sortedProjects = [...projects].sort((a, b) => a.startDate - b.startDate);
    const minDate = new Date(Math.min(...projects.map(p => p.startDate)));
    const maxDate = new Date(Math.max(...projects.map(p => p.endDate)));
    const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24) + 1;

    const getPositionAndWidth = (start, end) => {
      const startPosition = (start - minDate) / (1000 * 60 * 60 * 24);
      const duration = (end - start) / (1000 * 60 * 60 * 24) + 1;
      return {
        left: `${(startPosition / totalDays) * 100}%`,
        width: `${(duration / totalDays) * 100}%`
      };
    };

    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Timeline des projets</h3>
        <div className="relative h-[400px]">
          {sortedProjects.map((project, index) => {
            const { left, width } = getPositionAndWidth(project.startDate, project.endDate);
            return (
              <div 
                key={project.id}
                className={`absolute ${project.color} rounded p-2 text-sm`}
                style={{
                  left,
                  width,
                  top: `${index * 80}px`,
                  height: '70px'
                }}
              >
                <div className="font-semibold mb-1">{project.name}</div>
                <div className="text-xs">
                  {project.startDate.toLocaleDateString()} - {project.endDate.toLocaleDateString()}
                </div>
                <div className="mt-1 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-blue-600 rounded-full h-2" 
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold">{project.progress}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu de gauche en forme de grille */}
      <div className="w-24 bg-white p-2 shadow-md">
        <h1 className="text-lg font-bold mb-4 text-center">DevManager</h1>
        <div className="grid grid-cols-2 gap-2">
          <MenuItem icon={Home} label="Accueil" tabName="home" />
          <MenuItem icon={Folder} label="Projets" tabName="projects" />
          <MenuItem icon={MessageSquare} label="Messages" tabName="messages" />
          <MenuItem icon={CalendarIcon} label="Calendrier" tabName="calendar" />
          <MenuItem icon={Settings} label="Paramètres" tabName="settings" />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-8 overflow-auto">
        {activeTab === 'home' && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Vue d'ensemble des projets</h2>
            <Timeline />
          </>
        )}
        {activeTab === 'projects' && <p>Contenu de la page Projets</p>}
        {activeTab === 'messages' && <p>Contenu de la page Messagerie</p>}
        {activeTab === 'calendar' && <p>Contenu de la page Calendrier</p>}
        {activeTab === 'settings' && <p>Contenu de la page Paramètres</p>}
      </div>
    </div>
  );
};

export default CalendarComponent;
