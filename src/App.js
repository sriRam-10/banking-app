import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
//import backgroundImage from './assets/background.png';
import WelcomePage from './components/WelcomePage';
import './App.css'; // Ensure this contains the global styles

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  return (
    <div
    style={{
      backgroundImage:"url('C:\login\login-app\src\assets\background.png)", // Absolute path for images in public folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}
    
    >
      {/* Home button (visible on all pages except the Home Page)*/ }
      {!isHomePage && (
        <button
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          onClick={() => navigate('/')} // Navigate to Home Page
        >
          Home
        </button>
      )}

      {/* Define the routes*/ }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}
export default App;
