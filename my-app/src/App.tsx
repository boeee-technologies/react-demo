import React, {Fragment} from 'react';
import skills from './images/skills.png';
import './App.css';
import ResponsiveAppBar from './components/HeaderBar';
import Footer from './components/Footer';
import { Container } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RouterNav from './RouterNav';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
