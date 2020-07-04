import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Nav from './components/nav'
import About from './components/about'
import Home from './components/home'
import Pickup from './components/pickupForm'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Nav />
      <Switch> 
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About}/>
        <Route path='/pickupForm' component={Pickup}/>
      </Switch>
      <Footer />
    </>
  );
}
// when adding a homepage, always add the filename used at the front of the img src
// The Switch is where the main info on the screen changes routes. Make sure the Nav and Footer are outside the switch to avoid changing them
export default App;
