import React from 'react';
import Ctech from './assets/ctech.png';
import Soc from './assets/soc.png';

const About = () => {
  return (
    <div
      className="h-auto md:h-[90vh] w-[100vw] pb-16 mb-24 sm:mb-16 md:mb-0"
      id="about"
    >
      <div className="flex justify-center relative mb-16">
        <h1 className="text-[#B200CF] text-[3vmax] font-bold mt-20 transform -translate-y-1">
          ABOUT
        </h1>
        <div className="blur-2xl w-[180px] h-16  bottom-0 bg-[#7341AA] absolute"></div>
      </div>
      <div className="logo flex justify-center my-10 py-4 flex-col lg:flex-row items-center">
        <img src={Ctech} alt="" style={{ width: '300px', height: '120px' }} />
        <img src={Soc} alt="" style={{ width: '300px', height: '120px' }} />
      </div>
      <div className="text h-[40%] flex justify-center ">
        <div className="w-[70%] text-white text-[2vmax] md:text-[1.3vmax] text-center">
          Data Science Community SRM, in association with the School of
          Computing SRMIST, The Enigma Club, and The Block Chain Club SRM is
          conducting a hackathon “Data Science Hack ‘22” on the 3rd and 4th of
          September 2022. With this event, we are focusing to enhance the
          student’s technical and problem-solving skills in a competitive crowd.
          It is a 3 round hackathon and this three-round hackathon aims at
          testing the participants on a holistic level including forming the
          code, hack, and presenting it to our esteemed judge jury.
        </div>
      </div>
    </div>
  );
};

export default About;
