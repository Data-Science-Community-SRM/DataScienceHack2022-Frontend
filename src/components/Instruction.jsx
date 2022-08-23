import React from 'react';
import './Instruction.css';
// import point from './assets/point.png';
const Instructions = () => {
  return (
    <div
      className="flex flex-col items-center justify-center m-[0.5rem] h-[100vh] w-[100%]"
      id="instructions"
    >
      <h1 className="text-[#B200CF] text-[3vmax] font-bold mb-10">
        {' '}
        INSTRUCTIONS{' '}
      </h1>
      <ul className="instructions bg-white p-[2rem] border-fuchsia-600 border-2 text-black rounded-lg">
        <li>Minimum 3 students and maximum 5 students are allowed per team.</li>
        <li>
          Participants are requested to bring their own laptops for the offline
          round to the venue (Sir J.C. Bose Hall).
        </li>
        <li>
          Participants have to describe the project and exhibit their innovative
          ideas with all requirements through online mode on 4th September (
          1400 hrs - 1600 hrs).
        </li>
        <li>
          Shortlisted batches for online presentation would be intimated on 4th
          September by 1300 hrs.
        </li>
        <li>The presentation of ideas would be judged by domain experts.</li>
        <li>The winners would be awarded with cash prizes and certificates.</li>
        <li>All the registered participants would recieve e-certificates.</li>
      </ul>
    </div>
  );
};
export default Instructions;
