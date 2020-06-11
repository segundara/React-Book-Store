import React from 'react';
import NavBar from './components/MyNav'
import Footer from './components/MyFooter';
import JumBotron from './components/Welcome';
import LatestRealease from './components/Latest';
import {Container} from 'react-bootstrap';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BookDetails from './components/BookDetails';

function App() {
  return (
      <Router>
        <NavBar />
        <JumBotron />
        <Container>
        <Route path="/" exact component={LatestRealease}/>
        <Route path="/details/:id" exact component={BookDetails}/>
        </Container>
        <Footer />
      </Router>
  );
}

export default App;
