import React from 'react';
import logo from './assets/DShacklogo.svg';
const Landing = () => {

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="logo h-[60%] flex justify-center mt-10">
        <img src={logo} alt="" className="w-[50%]" />
      </div>
      <div className="text h-[40%] flex justify-center ">
        <div className="text-left w-[70%] text-white text-[1.5vmax]">
          {' '}
          "We cannot solve our problems with the same THINKING we used when we created
          them" <br /> - Albert Einstein.<br />
          The Data Science Community comes forth with the hackathon event that strives to bring
          out innovation. An extensive 3-rounds hackathon that will provide an opportunity for
          hackers to shape their ideas into reality
        </div>
      </div>
    </div>
  );
};

export default Landing;
