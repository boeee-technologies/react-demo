import React, { Fragment } from 'react';
import skills from './images/skills.png';
import './App.css';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';
import { Container } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RouterNav from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <HeaderBar />
          <RouterNav />
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
