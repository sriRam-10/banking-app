import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Submit</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
