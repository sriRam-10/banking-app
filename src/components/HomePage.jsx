import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to This Bank</h1>
        <p>Please login to continue</p>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
}

export default HomePage;
