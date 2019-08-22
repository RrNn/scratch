import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

class Nav extends React.Component {
  render() {
    
    return (
      <Router basename="/scratch">
        <div>
          <NavLink exact activeClassName="active" to="/">Dashboard</NavLink>
          <NavLink activeClassName="active" to="/home">Home</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
          <Route exact path="/" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Nav;
