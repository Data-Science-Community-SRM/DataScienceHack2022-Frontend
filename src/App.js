import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Carousel from './components/Carousel';
import Judges from "./components/Judges";
import Sponsors from "./components/sponsors";
import Faq from "./components/Faq";
import Landing from "./components/Landing";
import TimeLine from "./components/TimeLine";
import About from "./components/about";
import Navbar from "./components/NavBar";
import Tracks from "./components/tracks";
import Prizes from "./components/Prizes";
import Contact from "./components/Contact";
import Instructions from "./components/Instruction";
import Results from "./components/results";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Switch>
          <Route exact path="/">
            <Landing />
            <Results />
            <About />
            {/* <Carousel /> */}
            <TimeLine />
            <Instructions />
            <Tracks />
            <Sponsors />
            <Prizes />
            <Faq />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/judges">
            <Judges />
          </Route>
        </Switch>
      </>
      <Contact />
    </Router>
  );
}
export default App;
