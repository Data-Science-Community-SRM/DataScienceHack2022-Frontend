import React from "react";
// import Ctech from './assets/ctech.png';
// import Soc from './assets/soc.png';
import about from "./assets/about.png";

const About = () => {
  return (
    <div className="pb-16 mb-24 sm:mb-10 md:mb-0" id="about">
      <marquee direction="right" className="text-2xl" scrollamount="15">
        <span className="mr-[400px]">
          Every Participant should join the Hackathon Discord Server
        </span>
        <span className="mr-[300px]">
          Participants should report to the TP main lobby for registration at 9AM sharp
        </span>
          Hackathon Inaugration is at 10AM
      </marquee>
      <div className="flex justify-center relative mb-4">
        <h1 className="text-[#B200CF] text-[3vmax] font-bold mt-20 transform -translate-y-1">
          ABOUT
        </h1>
      </div>
      <div className="logo flex justify-center my-10 py-4 flex-col lg:flex-row items-center">
        {/* <img src={Ctech} alt="" style={{ width: '300px', height: '120px' }} />
        <img src={Soc} alt="" style={{ width: '300px', height: '120px' }} /> */}
        <img
          src={about}
          alt="couldn't load the image"
          style={{ width: "1200px" }}
        />
      </div>
      <div className="text h-[40%] flex justify-center ">
        <div className="w-[70%] text-[#0D0221] text-[2vmax] md:text-[1.3vmax] text-center">
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
