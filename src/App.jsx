import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weather from "./weather";
import Login from "./login";
import Signup from "./Signup";
const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );

};

export default Home;

