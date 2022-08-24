import React from 'react';
import bclogo from './assets/bclogo2.svg';
import enigma from './assets/enigmalogo2.svg';
import insta from './assets/instagram.svg';
import git from './assets/github.svg';
import link from './assets/linkedin.svg';
import disc from './assets/discord.svg';
import logo from './assets/logo.png';
import dsclogo from './assets/dsclogo2.svg';
import './Contact.css';
const Contact = () => {
  return (
    <div className="lg:h-[100vh] gradient flex items-center justify-center mt-8">
      <div className="contact max-w-[1200px] relative" id="contact">
        <img
          className="absolute sm:w-[100px] invisible sm:visible m-[0.5rem] top-[0.75rem] sm:top-0"
          src={logo}
          alt=""
        />
        <p className="text-[#B200CF] text-[3rem] font-bold text-center sm:mb-10 mb-5">
          CONTACT US
        </p>
        <ul className="contact_logo flex items-center justify-center flex-col">
          <li>
            <img src={dsclogo} alt="" className="sm:w-[80px] w-[60px]" />
          </li>
          <li>
            <img src={bclogo} alt="" className="sm:w-[130px] w-[100px]" />
          </li>
          <li>
            <img src={enigma} alt="" className="sm:w-[100px] w-[80px]" />
          </li>
        </ul>
        <div className="text-lg">
          <div className="convener flex sm:flex-nowrap flex-wrap justify-evenly mb-5">
            <div className="text-center p-[0.5rem]">
              <h1 className="text-[#8855C4] font-semibold">Convener</h1>
              <h1 className="font-semibold">Mrs B. Sowmiya</h1>
              <h1>Assistant Professor, CTech Department, SRMIST</h1>
            </div>
            <div className="text-center p-[0.5rem]">
              <h1 className="text-[#8855C4] font-semibold">Co-Convener</h1>
              <h1 className="font-semibold">Mr. M. Prakash</h1>
              <h1>Assistant Professor, DSBS Department, SRMIST</h1>
            </div>
            <div className="text-center p-[0.5rem]">
              <h1 className="text-[#8855C4] font-semibold">Co-Convener</h1>
              <h1 className="font-semibold">Mrs. B. Ida Seraphim </h1>
              <h1>Assistant Professor, CTech Department, SRMIST</h1>
            </div>
          </div>
          <h1 className="text-center text-[#8855C4] font-semibold">
            Organizing Committee
          </h1>
          <div className="md:flex justify-center">
            <div className="text-center p-[0.5rem]">
              <h1 className="font-semibold">Abhay Lal</h1>
              <h1>President, Data Science Community SRM</h1>
              <h1>+91 99670 60057</h1>
            </div>
            <div className="text-center p-[0.5rem]">
              <h1 className="font-semibold">Aditya Jain</h1>
              <h1>President, BlockChain Club SRM</h1>
              <h1>+91 6263121519</h1>
            </div>
            <div className="text-center p-[0.5rem]">
              <h1 className="font-semibold">Aadit Bhargava</h1>
              <h1>President, Enigma Coding Community</h1>
              <h1>+91 8999359157</h1>
            </div>
          </div>
        </div>
        <ul className="contact_logo flex items-center justify-center flex-col">
          <li>
            <a
              href="https://discord.gg/Fn7FVvma"
              target="_blank"
              rel="noreferrer"
            >
              <img src={disc} alt="" className="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dscommunity_srm/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="" className="" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Data-Science-Community-SRM"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="" className="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/dscommunitysrm/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={link} alt="" className="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
