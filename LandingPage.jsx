import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="title">🌿 Green Haven</h1>
        <p className="subtitle">
          Your one-stop shop for beautiful, air-purifying houseplants.
        </p>
        <Link to="/products" className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
