import React from 'react';
import './dos-theme.css';

const Window = ({ title, children }) => {
  return (
    <div className="window">
      <div className="window-header">
        <span className="window-title">{title}</span>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default Window;