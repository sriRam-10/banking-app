import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSendResetLink = (e) => {
    e.preventDefault();

    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email) {
      // Simulate sending reset link
      setSuccess('A password reset link has been sent to your email.');

      // Redirect to Reset Password page after a delay
      setTimeout(() => {
        navigate('/reset-password', { state: { email } });
      }, 2000);
    } else {
      setError('Email not found. Please enter a registered email.');
    }
  };

  return (
    <div className="auth-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSendResetLink}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <p>
        Back to <a href="/">Login</a>.
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
