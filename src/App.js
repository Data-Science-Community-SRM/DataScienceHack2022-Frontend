import React from 'react';
import './App.scss';
import Sponsors from './components/sponsors';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Landing from './components/Landing';
import TimeLine from './components/TimeLine';
import About from './components/about';
import Navbar from './components/NavBar';
import Tracks from './components/tracks';
import Prizes from './components/Prizes';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <TimeLine />
      <Tracks />
      <Sponsors />
      <Prizes />
      <Faq />
      <Contact />
    </>
  );
}
export default App;
