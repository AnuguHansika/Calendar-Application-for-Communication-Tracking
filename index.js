// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // This is your Tailwind CSS file
import App from './App'; // Importing App.js file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

