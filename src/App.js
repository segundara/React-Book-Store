import React from 'react';
import NavBar from './components/MyNav'
import Footer from './components/MyFooter';
import JumBotron from './components/Welcome';
import LatestRealease from './components/Latest';
import {Container} from 'react-bootstrap';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
      <Container>
      <JumBotron />
      <LatestRealease />
      </Container>
    <Footer />
    </div>
  );
}

export default App;
