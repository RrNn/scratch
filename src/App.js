import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos ut
          quia obcaecati quis sed, fuga sapiente labore, tempora corporis facere
          sit praesentium voluptas. Nesciunt laudantium laborum, sapiente quod
          possimus!!
        </p>
        <br />
      </div>
    );
  }
}

export default hot(module)(App);
