import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract user details from state or provide a fallback
  const userDetails = location.state || {
    name: 'Guest',
    email: 'Not available',
    accountNumber: 'Not available',
  };

  // If state is missing, redirect to the login page after 2 seconds (optional)
  if (!location.state) {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
    return <p>Redirecting to login page...</p>;
  }

  return (
    <div className="auth-container">
      <h1>Welcome to the Bank</h1>
      <p>Here are your details:</p>
      <div className="user-details">
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Account Number:</strong> {userDetails.accountNumber}</p>
      </div>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};

export default WelcomePage;

