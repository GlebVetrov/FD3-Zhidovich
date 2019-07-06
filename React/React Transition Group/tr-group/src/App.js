import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header.js';
import Container from './components/container.js';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Container />
    </div>
  </Router>
  );
}

export default App;
