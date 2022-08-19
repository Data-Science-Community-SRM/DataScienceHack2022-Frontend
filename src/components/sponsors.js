/* eslint-disable prettier/prettier */
import React from "react";
// import logo1 from "../assets/Group2.png";

const platinumData = [
    {
      id: 1,
      logo: '../assets/Group2.png',
    },
    {
      id: 2,
      logo: '../assets/Group3.png',
    },
    {
      id: 3,
      logo: '../assets/Group4.png',
    },
];


const goldData = [
  {
    id: 1,
    logo: './assets/Group5.png',
  },
  {
    id: 2,
    logo: './assets/Group6.png',
  },
  {
    id: 3,
    logo: './assets/Group7.png',
  },
  {
    id: 4,
    logo: './assets/Group8.png',
  },
];


const silverData = [
  {
    id: 1,
    logo: './assets/Group5.png',
  },
  {
    id: 2,
    logo: './assets/Group6.png',
  },
  {
    id: 3,
    logo: './assets/Group7.png',
  },
  {
    id: 4,
    logo: './assets/Group8.png',
  },
  {
    id: 5,
    logo: './assets/Group8.png',
  },
];


function Sponsors() {
    return(
        <div className="flex flex-col min-h-screen bg-[#0D0221] text-montserrat bg-[url('./assets/bg-triangles.png')]">
            
            <div className="flex justify-center relative">
                <h1 className="text-[#B200CF] text-2xl font-bold mt-20 transform -translate-y-1">
                    SPONSORS
                </h1>
                <div className="blur-2xl w-[180px] h-10  bottom-0 bg-[#7341AA] absolute"></div>
            </div>

            <div className='flex flex-col mt-8'>

                <div className="flex justify-center text-[#E5E4E2] text-xl items-center">
                    <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-l from-white "></div>
                    PLATINUM
                    <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-r from-white "></div>
                </div>

                <div className="flex justify-center my-8 flex-wrap text-[#E5E4E2] text-xl items-center gap-8">
                    {platinumData.map((platinumData, id) => (
                        <div key={id}>
                            <img src={platinumData.logo} alt="Image not loaded!" />
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center text-[#FFD700] text-xl items-center">
                    <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-l from-white "></div>
                    GOLD
                    <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-r from-white "></div>
                </div>

                <div className="flex justify-center my-8 flex-wrap text-[#E5E4E2] text-xl items-center gap-8">
                    {goldData.map((goldData, id) => (
                        <div key={id}>
                            <img src={goldData.logo} alt="Image not loaded!" />
                        </div>
                    ))}
                </div>
                

                <div className="flex justify-center text-[#C0C0C0] text-xl items-center">
                    <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-l from-white "></div>
                    SILVER
                    <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-r from-white "></div>
                </div>


                <div className="flex justify-center my-8 flex-wrap text-[#E5E4E2] text-xl items-center gap-8">
                    {silverData.map((silverData, id) => (
                        <div key={id}>
                            <img src={silverData.logo} alt="Image not loaded!" />
                        </div>
                    ))}
                </div>


            </div>

        </div>
    );
}

export default Sponsors;