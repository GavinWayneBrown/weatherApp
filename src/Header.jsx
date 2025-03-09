import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="header">
      <div className="app-title">
        {/* Clickable title that redirects to the home page */}
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Weather App
        </Link>
      </div>
      <div className="buttons">
        {/* Use Link instead of button for navigation */}
        <Link to="/login" className="nav-button login-btn">Login</Link>
        <Link to="/signup" className="nav-button signup-btn">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
