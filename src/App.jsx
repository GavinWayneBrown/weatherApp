import React, { useState } from 'react';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    // You will eventually pass the location to Playwright for search
    console.log(`Searching weather for: ${location}`);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input 
        type="text" 
        placeholder="Enter location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      
      {weather && (
        <div>
          <h2>{weather.location}</h2>
          <p>{weather.temperature}</p>
        </div>
      )}
    </div>
  );
};

export default Home;

