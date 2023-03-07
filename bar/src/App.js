import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    setColor('#fff'); // Set content background color to white
    document.body.style.backgroundColor = '#000'; // Change body background color to black
    document.body.style.color = '#fff'; // Change text color to white

    // Add classes to body to create black overscroll at top and bottom
    document.body.classList.add('overscroll-top');
    document.body.classList.add('overscroll-bottom');

    return () => {
      // Clean up classes when component unmounts
      document.body.classList.remove('overscroll-top');
      document.body.classList.remove('overscroll-bottom');
    };
  }, []);

  return (
    <div className="App">
      <div className="Header" style={{ backgroundColor: '#000' }}>
        <h2>This is the header.</h2>
      </div>
      <div className="Content" style={{ backgroundColor: color, paddingTop: '100vh', color: '#000' }}>
        <h1>Hello, world!</h1>
        <p>The content background color is white, and there is black overscroll at the top and bottom of the page.</p>
      </div>
      <div className="Footer" style={{ backgroundColor: '#000' }}>
        <h2>This is the footer.</h2>
      </div>
    </div>
  );
}

export default App;
