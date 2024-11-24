import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userDetails = location.state;

  return (
    <div className="auth-container">
      <h1>Welcome to the Bank</h1>
      <p>Here are your details:</p>
      <div className="user-details">
        <p><strong>Name:</strong> {userDetails?.name}</p>
        <p><strong>Email:</strong> {userDetails?.email}</p>
        <p><strong>Account Number:</strong> {userDetails?.accountNumber}</p>
      </div>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};

export default WelcomePage;

