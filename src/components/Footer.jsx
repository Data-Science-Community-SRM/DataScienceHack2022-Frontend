import React from 'react'
import logo from './assets/DShacklogo.svg'
import bclogo from './assets/bcclublogo.svg'
import dsc from './assets/dscsrmlogo.svg'
import enigma from './assets/enigmalogo.svg'
import insta from './assets/instagram.svg'
import git from './assets/github.svg'
import link from './assets/linkedin.svg'
import disc from './assets/discord.svg'
const Footer = () => {
  return (
    <div className='w-[100vw] h-[40vh] text-white flex'>
         <div className='logos w-[70%]'>
               <div className='h-[40%] flex justify-end mr-[10%]'>
                    <img src={logo} alt="" className='h-[100%]'/>
               </div>
               <div className='h-[40%]'>
                     <ul className='flex h-[100%]'>
                      <li><img src={bclogo} alt="" className='h-[100%] mx-5'/></li>
                      <li><img src={enigma} alt="" className='h-[100%] mx-5' /></li>
                      <li><img src={dsc} alt="" className='h-[100%] mx-5' /></li>
                     </ul>
               </div>
               <div className='copyright text-right mr-12 mt-4'>
                  © 2022 Data Science community SRM. All rights reserved
               </div>
         </div>
          <div className='socials'>
                <ul className='ml-[8vmax] mt-10'>
                  <li><a href=""><img src={disc} alt="" className='h-[2.5vmax] mb-5 hover:text-[#B200CF]' /></a></li>
                  <li><img src={insta} alt="" className='h-[2.5vmax] mb-5' /></li>
                  <li><img src={git} alt="" className='h-[2.5vmax] mb-5' /></li>
                  <li><img src={link} alt="" className='h-[2.5vmax] mb-5' /></li>
                </ul>
         </div>
    </div>
  )
}

export default Footer