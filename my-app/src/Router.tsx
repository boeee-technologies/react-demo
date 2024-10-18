import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Home from './components/Home';
import About from './components/AboutMe';
import Services from './components/Services';
import Contact from './components/Contact';
import Games from './components/tik/tik';


const Router: React.FC = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Box>
  );
};

export default Router;

