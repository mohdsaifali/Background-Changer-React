// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('white');

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange'];

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => changeBackgroundColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
