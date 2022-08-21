import React from 'react';
import TrackCards from './trackCards';
// import TrackCardsSimple from "./trackCardsSimple";

function Tracks() {
  return (
    <div
      className=" flex flex-col min-h-screen bg-[#0D0221] text-montserrat bg-[url('./assets/bg-triangles.png')]"
      id="tracks"
    >
      <div className="flex justify-center relative mb-16">
        <h1 className="text-[#B200CF] text-[3vmax] font-bold mt-20 transform -translate-y-1">
          TRACKS
        </h1>
        <div className="blur-2xl w-[180px] h-16  bottom-0 bg-[#7341AA] absolute"></div>
      </div>

      <div className="flex justify-center mt-8">
        {/* <TrackCardsSimple /> */}
        <TrackCards />
      </div>
    </div>
  );
}

export default Tracks;
