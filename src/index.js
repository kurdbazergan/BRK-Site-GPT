import './i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Tokenomics from './pages/Tokenomics';
import HowItWorks from './pages/HowItWorks';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tokenomics' element={<Tokenomics />} />
      <Route path='/how-it-works' element={<HowItWorks />} />
      <Route path='/roadmap' element={<Roadmap />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
);