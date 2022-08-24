import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import React from 'react';
import gold from './assets/gold-cup.png';
import silver from './assets/silver-cup.png';
import bronze from './assets/bronze-cup.png';
const Prizes = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-[#B200CF] text-[3rem] font-bold text-center sm:mb-10 mb-5">PRIZES</h1>
      </div>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="h-auto items-center justify-center flex flex-col gap-8 my-16">
          <div className=" md:w-[60%] md:flex justify-center items-center">
            <div className="first">
              <img src={gold} alt="" className="max-h-[15vmax]" />
              <div className="text-[#7341AA] text-[3vmax] ml-5 lg:mb-0 mb-4 md:ml-10 ">
                ₹
                {counterOn === true ? (
                  <CountUp end={7000} duration={1} />
                ) : (
                  '7000'
                )}
              </div>
            </div>
            <div className="second">
              <img src={silver} alt="" className="max-h-[15vmax]" />
              <div className="text-[#7341AA] text-[3vmax] ml-5 lg:mb-0 mb-4 md:ml-10">
                ₹
                {counterOn === true ? (
                  <CountUp end={5000} duration={1} />
                ) : (
                  '5000'
                )}
              </div>
            </div>
            <div className="third">
              <img src={bronze} alt="" className="max-h-[15vmax]" />
              <div className="text-[#7341AA] text-[3vmax] ml-5 lg:mb-0 mb-4 md:ml-10">
                ₹
                {counterOn === true ? (
                  <CountUp end={3000} duration={1} />
                ) : (
                  '3000'
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};
export default Prizes;
