import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Nav;
