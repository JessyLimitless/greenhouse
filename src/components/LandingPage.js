// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing-page">
    <h2>Welcome to the Plant Store</h2>
    <p>Discover beautiful indoor plants that bring life to your space.</p>
    <Link to="/products">
      <button>Start Shopping</button>
    </Link>
  </div>
);

export default LandingPage;
