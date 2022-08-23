import React from 'react';
import logo from './assets/DShacklogo.svg';
import srm from './assets/srm-logo.png';
import soc from './assets/soc.png';
import ctech from './assets/ctech.png';
import iic from './assets/iic.png';
import dsc from './assets/dsc.svg';
import enigma from './assets/enigma.png';
import blockchain from './assets/blckchn.png';
import './Landing.css';
import Countdown from './Countdown';
const Landing = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="home h-[100vh] w-[100%] flex items-center justify-center flex-col">
      <div className="jumbotron flex items-center justify-center flex-col rounded-lg lg:w-[83%] p-10">
        <div className="sponsors-logo flex items-center justify-evenly">
          <img src={srm} className="mr-5" />
          <img src={soc} />
          <img src={ctech} />
          <img src={iic} />
        </div>
        <div className="clubs-logo flex items-center justify-evenly">
          <img src={dsc} />
          <img src={enigma} />
          <img src={blockchain} />
        </div>
        <div className="dschack-logo">
          <img src={logo} />
        </div>
      </div>
      <div className="text flex flex-col items-center justify-center ">
        <div
          className="apply-button lg:w-[90%]"
          data-hackathon-slug="dshack"
          data-button-theme="light"
        >
          Apply with Devfolio
        </div>
        <Countdown />
        {/* <div className="text-left w-[70%] text-[#0D0221] text-[2vmax] md:text-[1.3vmax] mt-16">
            {' '}
            &apos; We cannot solve our problems with the same THINKING we used
            when we created them&apos;
            <br /> - Albert Einstein.
            <br />
            The Data Science Community comes forth with the hackathon event that
            strives to bring out innovation. An extensive 3-rounds hackathon that
            will provide an opportunity for hackers to shape their ideas into
            reality
        </div> */}
      </div>
    </div>
  );
};

export default Landing;
