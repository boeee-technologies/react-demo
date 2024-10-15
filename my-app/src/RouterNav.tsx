import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/AboutMe';
import Services from './components/Services';
import Contact from './components/Contact';

const RouterNav: React.FC = () => {
  return (
          <Box sx={{ my: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
  );
};

export default RouterNav;

