import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#fff');
  const [background, setBackground] = useState('#000');

  useEffect(() => {
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }, []);

  return (
    <div className="App">
      <div>
        <h2>This is the header.</h2>
      </div>
      <div style={{ backgroundColor: color, paddingTop: '100vh', color: background }}>
        <h1>Hello, world!</h1>
        <p>The content background color is white, and there is black overscroll at the top and bottom of the page.</p>
      </div>
      <div>
        <h2>This is the footer.</h2>
      </div>
    </div>
  );
}

export default App;
