// // src/components/ui/Overlay.js
// import React from 'react';

// const Overlay = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded shadow-lg w-1/3">
//         <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Overlay;
// src/components/ui/Overlay.js
import React from 'react';
import './Overlay.css';

const Overlay = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackgroundClick}>
      <div className="overlay-content">
        <button onClick={onClose} className="close-button">X</button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
