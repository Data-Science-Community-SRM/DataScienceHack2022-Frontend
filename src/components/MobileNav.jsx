import React from 'react';
import { useEffect, useState } from 'react';
import DShacklogo from './assets/logo.png';
import './MobileNav.css';

const MobileNav = () => {
  const [nav__state, set__nav__state] = useState(false);
  const [sidebar__state, set__sidebar__state] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        set__nav__state(true);
      } else {
        set__nav__state(false);
      }
    });
  }, []);

  return (
    <>
      <div className={nav__state ? 'mobile__nav fixed' : 'mobile__nav'}>
        <img src={DShacklogo} alt="dshacklogo" width={'50px'}></img>
        <div className="nav__burger" onClick={() => set__sidebar__state(true)}>
          <div className="burger__stick"></div>
          <div className="burger__stick"></div>
          <div className="burger__stick"></div>
        </div>
      </div>
      <SideNav
        set__sidebar__state={set__sidebar__state}
        sidebar__state={sidebar__state}
      />
    </>
  );
};

const links = [
  {
    title: 'HOME',
    link: '#home',
  },
  {
    title: 'ABOUT',
    link: '#about',
  },
  {
    title: 'TIMELINE',
    link: '#timeline',
  },
  {
    title: 'TRACKS',
    link: '#tracks',
  },
  {
    title: 'SPONSERS',
    link: '#sponsers',
  },
  {
    title: 'FAQ',
    link: '#faq',
  },
];

const SideNav = ({ sidebar__state, set__sidebar__state }) => {
  return (
    <div
      className={
        sidebar__state
          ? 'mobile__nav__sidebar'
          : 'mobile__nav__sidebar transalted'
      }
    >
      {links.map((link, i) => {
        return (
          <a
            href={link.link}
            className="hover:text-purple-600 hover:transform hover:scale-110 transform transition-all duration-300"
            key={i}
            onClick={() => set__sidebar__state(false)}
          >
            {link.title}
          </a>
        );
      })}
      <div className="cross__nav" onClick={() => set__sidebar__state(false)}>
        X
      </div>
    </div>
  );
};

export default MobileNav;
