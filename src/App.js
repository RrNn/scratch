import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return <Nav />;
  }
}

export default hot(module)(App);
