import React from 'react';
import Nav from './components/nav'
import Home from './components/home'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}
// when adding a homepage, always add the filename used at the front of the img src
export default App;
