import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import GetInvolved from './pages/GetInvolved';
import FeaturedProjects from './pages/FeaturedProjects';
import StayConnected from './pages/StayConnected';

function App() {
  return (
    <Router>
      <div className="organic-theme">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/featured-projects">Featured Projects and Events</Link></li>
            <li><Link to="/stay-connected">Stay Connected</Link></li>
          </ul>
        </nav>
        <header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/featured-projects" element={<FeaturedProjects />} />
            <Route path="/stay-connected" element={<StayConnected />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
