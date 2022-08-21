import React from 'react';
import './App.scss';
import Sponsors from './components/sponsors';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Landing from './components/Landing';
import TimeLine from './components/TimeLine';
// import Navbar from './components/NavBar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Landing />
      <TimeLine />
      <Sponsors />
      <Faq />
      <Footer />
    </>
  );
}
export default App;
