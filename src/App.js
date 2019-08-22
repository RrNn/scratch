import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Nav from './components/Nav';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
console.log('history', history)

/* this is here... not so sesntive to me perhaps the app
  is even already gone by the time you're seeing this*/
  const optionsObj = {
    debug: true
  }
  ReactGA.initialize('UA-146344862-1', optionsObj);
  ReactGA.pageview('/');
  ReactGA.pageview('/home');
  ReactGA.pageview('/about');
  
  ReactGA.event({
    category: 'User',
    action: 'Created an Account'
  });

  // history.listen(location => ReactGA.pageview(location.pathname));


class App extends Component {
  render() {
    return <Nav />;
  }
}

export default hot(module)(App);

