import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Weather.css";

const Weather = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `http://localhost:5001/YOUR_PROJECT_ID/us-central1/getWeather?city=${city}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch weather data.");
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError("Could not fetch weather data. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather-container">
      <header className="header">
        <div className="app-title">Weather App</div>
        <div className="buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </header>

      {/* Content Area */}
      <div className="content">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="search-button" 
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Weather Info */}
        {weather && (
          <div className="weather-info">
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="weather-details">
              <p className="temperature">Temperature: {weather.main.temp}°C</p>
              <p className="weather-description">Weather: {weather.weather[0].description}</p>
              <p className="humidity">Humidity: {weather.main.humidity}%</p>
              <p className="wind">Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;