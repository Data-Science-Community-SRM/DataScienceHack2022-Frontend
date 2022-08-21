// dependency - react-countup
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import React from 'react'
import gold from './assets/gold-cup.png';
import silver from './assets/silver-cup.png';
import bronze from './assets/bronze-cup.png';
const Prizes = () => {
    const[counterOn,setCounterOn] = useState(false);
  return (
    <>
        
      <div className="flex justify-center relative mb-24">
        <h1 className="text-[#B200CF] text-[3vmax] font-bold transform -translate-y-1">
          PRIZES
        </h1>
        <div className="blur-2xl w-[180px] h-16  bottom-0 bg-[#7341AA] absolute"></div>
      </div>
      
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCunterOn(false)}>
        <div className='h-auto ml-[30%] md:ml-[0%] md:h-[100vh] w-[100vw] items-center justify-center md:flex '>
             
              <div className='w-[60%] h-[100%] md:flex justify-center items-center md:mt-[-10%]'>
                 
                  <div className='first'>
                      <img src={gold} alt="" className='max-h-[30vmax]'/>
                      <div className='text-[#7341AA] text-center text-[6vmax] '>
                              <h1 className='text-left ml-12'>₹{counterOn === true ?<CountUp end={1000} duration={1}/>:"1000"}</h1>
                      </div>
                  </div>
                  <div className='second'>
                          <img src={silver} alt="" className='max-h-[30vmax]'/>
                      <div className='text-[#7341AA] text-center text-[6vmax]'>
                              <h1 className='text-left ml-12'>₹{counterOn === true ? <CountUp end={500} duration={1} /> : "1000"}</h1>
                      </div>
                  </div>
                  <div className='third'>
                      <img src={bronze} alt="" className='max-h-[30vmax]'/>
                      <div className='text-[#7341AA] text-center text-[6vmax]'>
                              <h1 className='text-left ml-12'>₹{counterOn === true ?<CountUp end={250} duration={1} /> : "1000"}</h1>
                      </div>
                  </div>
                  
            </div>
            
            
        </div>
          </ScrollTrigger>
    </>
  )
}
export default Prizes