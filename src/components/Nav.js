import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import { buttonClick } from '../App';

class Nav extends React.Component {
  render() {
    
    return (
      <Router basename="/scratch">
        <div>
          <NavLink exact activeClassName="active" to="/" onClick={buttonClick}>Dashboard</NavLink>
          <NavLink activeClassName="active" to="/home" onClick={buttonClick}>Home</NavLink>
          <NavLink activeClassName="active" to="/about" onClick={buttonClick}>About</NavLink>
          <Route exact path="/" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Nav;
