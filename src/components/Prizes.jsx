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
      <div className="flex justify-center relative mb-24">
        <h1 className="text-[#B200CF] text-[3vmax] font-bold transform -translate-y-1">
          PRIZES
        </h1>
        <div className="w-[180px] h-16  bottom-0 absolute"></div>
      </div>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="h-auto ml-[30%] md:ml-[0%] md:h-[70vh] w-[100vw] items-center justify-center md:flex ">
          <div className="w-[60%] md:flex justify-center items-center md:mt-[-10%]">
            <div className="first">
              <img src={gold} alt="" className="max-h-[15vmax]" />
              <div className="text-[#7341AA] text-center text-[3vmax] ">
                <h1 className="text-center">
                  ₹
                  {counterOn === true ? (
                    <CountUp end={7000} duration={1} />
                  ) : (
                    '7000'
                  )}
                </h1>
              </div>
            </div>
            <div className="second">
              <img src={silver} alt="" className="max-h-[15vmax]" />
              <div className="text-[#7341AA] text-center text-[3vmax]">
                <h1 className="text-center">
                  ₹
                  {counterOn === true ? (
                    <CountUp end={5000} duration={1} />
                  ) : (
                    '5000'
                  )}
                </h1>
              </div>
            </div>
            <div className="third">
              <img src={bronze} alt="" className="max-h-[15vmax]" />
              <div className="text-[#7341AA] text-center text-[3vmax]">
                <h1 className="text-center">
                  ₹
                  {counterOn === true ? (
                    <CountUp end={3000} duration={1} />
                  ) : (
                    '3000'
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};
export default Prizes;
