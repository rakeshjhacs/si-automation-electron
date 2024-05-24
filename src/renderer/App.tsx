import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="app-bar">
          <h1>App Title</h1>
        </div>
        <div className="content-view">
          <p>Hello World</p>
        </div>
      </div>
    </div>
  );
};

export default App;
