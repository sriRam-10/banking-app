import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [success, setSuccess] = useState('');
  const email = location.state?.email;

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email) {
      // Update the password
      storedUser.password = newPassword;
      localStorage.setItem('user', JSON.stringify(storedUser));

      // Show success message and redirect to login
      setSuccess('Your password has been reset successfully!');
      setTimeout(() => navigate('/'), 2000); // Redirect to login after 2 seconds
    }
  };

  return (
    <div className="auth-container">
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <p>
        Back to <a href="/">Login</a>.
      </p>
    </div>
  );
};

export default ResetPasswordPage;
