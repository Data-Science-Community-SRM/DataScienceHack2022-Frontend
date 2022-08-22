import React, { useEffect, useState } from 'react';
import './App.scss';
import Sponsors from './components/sponsors';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Landing from './components/Landing';
import TimeLine from './components/TimeLine';
import About from './components/about';
import Navbar from './components/NavBar';
import Tracks from './components/tracks';
// import Prizes from './components/Prizes';
import MobileNav from './components/MobileNav';

function App() {
    const [nav, setnav] = useState(false);
    useEffect(() => {
        const toggleNav = () => {
            console.log(window.innerWidth);
            if (window.innerWidth <= 690) {
                setnav(true)
            } else {
                setnav(false)
            }
        }
        toggleNav();
    }, [])
    return (
        <>
            {
                nav ?
                    <MobileNav /> :
                    <Navbar />
            }
            <Landing />
            <About />
            <TimeLine />
            <Tracks />
            <Sponsors />
            {/* <Prizes /> */}
            <Faq />
            <Footer />
        </>
    );
}
export default App;
