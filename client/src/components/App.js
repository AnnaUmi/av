import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
import Cv from './Cv';
import Portfolio from './Portfolio';
import Blog from './Blog';


class App extends Component {
  
  render() {

    return (
      <React.Fragment>
        <Hero />
        <Cv />
        <Portfolio />
        <Blog />
       
      </React.Fragment>

    );
  }
}

export default App;
