import logo from './assets/logo.png';
// import './NavBar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 z-50 bg-white`;

  const NavElements = () => {
    return (
      <>
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
          href="#contactus"
          className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
        >
          CONTACT US
        </a>
      </>
    );
  };

  return (
    <>
      <div className="w-full flex bg-black bg-opacity-20 backdrop-blur-lg justify-between fixed top-0 left-0 z-10 p-4 text-white px-[10%]">
        <div className="cursor-pointer flex flex-nowrap h-full w-32 my-auto logo">
          <img
            src={logo}
            className="h-8 my-auto transition-all duration-100 "
          />{' '}
        </div>
        <nav className="md:block hidden ml-auto">
          <ul className="font-body items-center hidden md:flex h-full w-max justify-between list-none gap-8">
            <NavElements />
          </ul>
        </nav>
        <div className="block md:hidden ml-auto">
          <button
            className="flex flex-col h-10 w-10 border-none rounded justify-center items-center group bg-gray-light z-50 m-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`z-10 fixed bg-black top-20 bottom-0 left-0 right-0 text-white items-center justify-center backdrop-blur-lg transition-all duration-300 h-screen ${
                isOpen ? 'flex bg-opacity-20' : 'hidden bg-opacity-0'
              }`}
            >
              <ul className="text-center text-2xl flex flex-col justify-around h-3/5">
                <NavElements />
              </ul>
            </div>
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Navbar;
