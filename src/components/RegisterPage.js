import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
