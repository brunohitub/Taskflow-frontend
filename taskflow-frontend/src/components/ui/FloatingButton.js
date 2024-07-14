// src/components/ui/FloatingButton.js
import React from 'react';

const FloatingButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
    >
      +
    </button>
  );
};

export default FloatingButton;
