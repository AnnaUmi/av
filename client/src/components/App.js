import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
import Cv from './Cv';
import Portfolio from './Portfolio';
import Blog from './Blog';
import { ParallaxProvider } from 'react-scroll-parallax';
class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Hero />
        <Cv />
        <Portfolio />
        <Blog />
      </ParallaxProvider>
    );
  }
}

export default App;
