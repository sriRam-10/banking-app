import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Forgot Password</h1>
        <p>Enter your registered email</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
          <button type="submit" className="btn-primary">
            Send Reset Link
          </button>
        </form>
        <p>
          Back to <Link to="/login" className="auth-link">Login</Link>.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
