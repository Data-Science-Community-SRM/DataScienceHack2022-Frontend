import React from 'react';
import dshack from './assets/DShacklogo.svg';
import bclogo from './assets/bclogo2.svg';
// import dsc from './assets/dscsrmlogo.svg';
import enigma from './assets/enigmalogo2.svg';
import insta from './assets/instagram.svg';
import git from './assets/github.svg';
import link from './assets/linkedin.svg';
import disc from './assets/discord.svg';
import logo from './assets/logo.png';
import dsclogo from './assets/dsclogo2.svg';
const Contact = () => {
  return (
    <div className="w-screen flex h-auto" id="contact">
      <div className="md:w-[15%] w-[25%]">
        <ul className="ml-12">
          <li className="mb-10">
            <img src={logo} alt="" style={{ width: '50%' }} />
          </li>
          <li>
            <img src={dsclogo} alt="" style={{ width: '50%' }} />
          </li>
          <li>
            <img src={bclogo} alt="" style={{ width: '50%' }} />
          </li>
          <li>
            <img src={enigma} alt="" style={{ width: '50%' }} />
          </li>
        </ul>
      </div>
      <div className="w-[70%] text-xl">
        {/* <h1 className="text-[#B200CF] text-[3vmax] font-bold text-center mb-5">
          CONTACT
        </h1> */}
        <div className="md:flex justify-evenly mb-10">
          <div className="text-center">
            <p className="text-[#8855C4] font-semibold">convener</p>
            <p className="font-semibold">Mrs B. Sowmiya</p>
            <p>Assistant Professor, CTech Department, SRMIST</p>
          </div>
          <div className="text-center">
            <p className="text-[#8855C4] font-semibold">co-convener</p>
            <p className="font-semibold">Mrs. B. Ida Seraphim </p>
            <p>Assistant Professor, CTech Department, SRMIST</p>
          </div>
        </div>
        <h1 className="text-center text-[#8855C4] font-semibold">
          Organizing Committee
        </h1>
        <div className="md:flex justify-evenly">
          <div className="text-center">
            <p className="font-semibold">Abhay Lal</p>
            <p>President, Data Science Community SRM</p>
            <p>+91 99670 60057</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Aditya Jain</p>
            <p>President,BlockChain Club SRM</p>
            <p>+91 6263121519</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Aadit Bhargava</p>
            <p>President,Enigma coding community</p>
            <p>convener</p>
          </div>
        </div>

        <div className="h-[20%] flex justify-center mt-10">
          <img src={dshack} alt="" />
        </div>
        <div className="copyright text-center mt-4">
          © 2022 Data Science community SRM. All rights reserved
        </div>
      </div>
      <div className="md:w-[15%] w-[25%]">
        <ul className="ml-[8vmax] mt-10">
          <li>
            <a
              href="https://discord.gg/Fn7FVvma"
              target="_blank"
              rel="noreferrer"
            >
              <img src={disc} alt="" className="h-[2.5vmax] mb-5 " />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dscommunity_srm/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={insta}
                alt=""
                className="h-[2.5vmax] mb-5 hover:fill-white"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Data-Science-Community-SRM"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="" className="h-[2.5vmax] mb-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/dscommunitysrm/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={link} alt="" className="h-[2.5vmax] mb-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
