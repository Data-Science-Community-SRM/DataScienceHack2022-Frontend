import React from 'react';
import './App.scss';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Landing from './components/Landing';
import TimeLine from './components/TimeLine';
function App() {
  return (
    <>
      <Landing/>
      <Faq />
      <TimeLine />
      <Footer/>
    </>
   );
}
export default App;
