import React from 'react';
import './Display.css';

const Display = ({ previous, current }) => {
  return (
    <div className="display">
      <div className="previous">{previous}</div>
      <div className="current">{current}</div>
    </div>
  );
};

export default Display;
