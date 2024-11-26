import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import of useNavigate

function Header() {
  const navigate = useNavigate(); // Create a navigation function

  return (
    <header
      style={{
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')} // Navigate to the Home page
      >
        Home
      </button>
    </header>
  );
}

export default Header;
