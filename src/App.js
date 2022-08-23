import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Judges from './components/Judges';
import Sponsors from './components/sponsors';
import Faq from './components/Faq';
import Landing from './components/Landing';
import TimeLine from './components/TimeLine';
import About from './components/about';
import Navbar from './components/NavBar';
import Tracks from './components/tracks';
import Prizes from './components/Prizes';
import Contact from './components/Contact';
import Instructions from './components/Instruction';
function App() {
  return (
    <> 
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                 <Landing />
      <About />
      <TimeLine />
      <Instructions />
      <Tracks />
      <Sponsors />
      <Prizes />
      <Faq />
      <Contact />
      </>}
            />
            <Route path="/judges" element={<Judges />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
