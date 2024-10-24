import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Games from './components/tik/tik';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';


const Router: React.FC = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Box>
  );
};


export default Router;

