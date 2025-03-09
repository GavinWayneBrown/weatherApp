import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Weather.css";

const Header = ({ isLoggedIn, currentUser, onLogout }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="app-title" onClick={handleTitleClick} style={{cursor: 'pointer'}}>Weather App</div>
      <div className="buttons">
        {isLoggedIn ? (
          <>
            <span className="user-greeting">Hello, {currentUser?.name || "User"}</span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;