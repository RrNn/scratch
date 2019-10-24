import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Nav from './components/Nav';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// console.log('history', history);

/* this is here... not so sesntive to me perhaps the app
  is even already gone by the time you're seeing this*/
const optionsObj = {
  debug: true,
};

ReactGA.initialize('UA-146344862-1', optionsObj);
ReactGA.pageview('/');
ReactGA.pageview('/home');
ReactGA.pageview('/about');

ReactGA.event({
  category: 'User',
  action: 'Created an Account',
});
/*
var dimensionValue = 'SOME_DIMENSION_VALUE';
ga('set', 'dimension1', dimensionValue);
 */
// ReactGA.set({ dimension1: 'Sports' })
// ReactGA.send({ dimension1: 'Sports active' })

ReactGA.send({
hitType: 'event',
eventCategory: 'custom event baby',
eventAction: 'trailer_player',
eventLabel: 'player',
dimension1: 'Old Trafford',
});
// console.log('ReactGA',ReactGA);
// export const trackSports = () => ReactGA.set({ dimension1: 'Sports' });
export const trackSports = () => null;
export const buttonClick = (event) => {
  ReactGA.event({
    category: 'Clicking',
    action: 'Button Clicked',
    label:
      event.target.href ||
      event.target.name ||
      'Button clicked has no __href__ or __name__',
  });
};

// history.listen(location => ReactGA.pageview(location.pathname));

class App extends Component {
  render() {
    return <Nav />;
  }
}

export default hot(module)(App);

/*
var dimensionValue = 'SOME_DIMENSION_VALUE';
ga('set', 'dimension1', dimensionValue);
 */
