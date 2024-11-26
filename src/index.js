import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this if you're on React 18+
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css'; // Optional: if you have global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 method
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
