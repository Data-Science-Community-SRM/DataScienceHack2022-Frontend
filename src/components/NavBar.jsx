import React from 'react';
import logo from './assets/logo.png';
// import './NavBar.css';

function Navbar() {
  return (
    <div className="text-montserrat ">
      <div className="text-xs w-full flex items-center px-20 py-4 justify-between bg-none top-0 fixed bg-white">
        <div className="logo w-14 ">
          <img src={logo} className=" " />
        </div>
        <div className="flex gap-10 p-[10px] text-[#B200CF] text-[15px] ">
          <a
            href="#home"
            className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
          >
            HOME
          </a>
          <a
            href="#about"
            className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
          >
            ABOUT
          </a>
          <a
            href="#timeline"
            className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
          >
            TIMELINE
          </a>
          <a
            href="#tracks"
            className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
          >
            TRACKS
          </a>
          <a
            href="#sponsors"
            className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
          >
            SPONSORS
          </a>
          <a
            href="#faq"
            className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
