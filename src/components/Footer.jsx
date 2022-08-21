import React from 'react';
import logo from './assets/DShacklogo.svg';
import bclogo from './assets/bcclublogo.svg';
import dsc from './assets/dscsrmlogo.svg';
import enigma from './assets/enigmalogo.svg';
import insta from './assets/instagram.svg';
import git from './assets/github.svg';
import link from './assets/linkedin.svg';
import disc from './assets/discord.svg';
const Footer = () => {
  return (
    <div className="w-[100vw] h-[40vh] text-white flex">
      <div className="logos w-[70%]">
        <div className="h-[40%] flex justify-end mr-[10%]">
          <img src={logo} alt="" className="h-[100%]" />
        </div>
        <div className="h-[40%]">
          <ul className="flex h-[100%]">
            <li>
              <img src={bclogo} alt="" className="h-[100%] mx-5" />
            </li>
            <li>
              <img src={enigma} alt="" className="h-[100%] mx-5" />
            </li>
            <li>
              <img src={dsc} alt="" className="h-[100%] mx-5" />
            </li>
          </ul>
        </div>
        <div className="copyright text-right mr-12 mt-4">
          © 2022 Data Science community SRM. All rights reserved
        </div>
      </div>
      <div className="socials">
        <ul className="ml-[8vmax] mt-10">
          <li>
            <a
              href="https://discord.gg/Fn7FVvma"
              target="_blank"
              rel="noreferrer"
            >
              <img src={disc} alt="" className="h-[2.5vmax] mb-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dscommunity_srm/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="" className="h-[2.5vmax] mb-5" />
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

export default Footer;
