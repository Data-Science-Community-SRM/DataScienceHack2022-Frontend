import React from "react";
import sample from "../assets/sample1.png";
const team1 = [
  {
    name: "Name",
    designation: "designation",
    img: "/assets/sample1.png",
  },
  {
    name: "Name",
    designation: "designation",
    img: "/assets/sample1.png",
  },
  {
    name: "Name",
    designation: "designation",
    img: "/assets/sample1.png",
  },
  {
    name: "Name",
    designation: "designation",
    img: "/assets/sample1.png",
  },
];
const Judges = () => {
  return (
    <div className="overflow-hidden bg-bgteam bg-no-repeat relative bg-cover bg-fixed ">
      <div className="mt-24">
        <div className="mt-5 py-10">
          <p className="uppercase  text-center text-5xl font-bold tracking-wide pageHeading text-[#B200CF]">
            JUDGES
          </p>
        </div>
        <div className="text-[#B200CF] flex flex-wrap justify-center">
          {team1.map((mem, index) => (
            <div
              className="my-4 mx-12 p-10 overflow-hidden rounded-2xl min-w-[15%] bg-white transition-all duration-300 ease-linear "
              key={index}
            >
              <img
                className="w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear transform-gpu rounded-[4rem]"
                src={sample}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center teamName">
                {mem.name}
              </p>
              <p className="my-2 text-xl text-center teamDesignation">
                {mem.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Judges;
