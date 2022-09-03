import React from "react";
// import sample from "../assets/sample1.png";
const panel1 = [
  {
    id: 1,
    name: "Dr. S. S. Sridhar",
    designation: "Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/s_s_sridhar.jpg",
  },
  {
    id: 1,
    name: "Dr. B. Muruganantham",
    designation: "Associate Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/b_muruganantham.jpg",
  },
  {
    id: 1,
    name: "Dr. Subalalitha C. N",
    designation: "Associate Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/dr_subalalitha_c_n.jpg",
  },
];

const panel2 = [
  {
    id: 2,
    name: "Dr. E. Poovammal",
    designation: "Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/e_poovammal.jpg",
  },
  {
    id: 2,
    name: "Dr. S. Godfrey Winster",
    designation: "Associate Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/dr-s-godfrey-winster.jpg",
  },
  {
    id: 2,
    name: "S. Saravanan",
    designation: "Assistant Professor (Sr.G)",
    img: "https://www.srmist.edu.in/sites/default/files/images/s_saravanan.jpg",
  },
];

const panel3 = [
  {
    id: 3,
    name: "Dr.R.I.Minu",
    designation: "Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/ri-minu.jpg",
  },
  {
    id: 3,
    name: "Dr. V.V. Ramalingam",
    designation: "Associate Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/Ramalingam.jpg",
  },
  {
    id: 3,
    name: "Dr. A. Pandian",
    designation: "Associate Professor",
    img: "https://www.srmist.edu.in/sites/default/files/images/dr_a_pandian.jpg",
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
          <p className="uppercase text-center text-2xl mt-14 font-bold tracking-wide pageHeading text-[#B200CF]">
            Panel 1
          </p>
        </div>
        <div className="text-[#B200CF] flex flex-wrap justify-center">
          {panel1.map((panel1, index) => (
            <div
              className=" mx-12 p-10 overflow-hidden rounded-2xl min-w-[15%] border border-fuchsia-600 bg-white transition-all duration-300 ease-linear "
              key={index}
            >
              <img
                className="w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear transform-gpu rounded-[4rem]"
                src={panel1.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center teamName">
                {panel1.name}
              </p>
              <p className="my-2 text-xl text-center teamDesignation">
                {panel1.designation}
              </p>
            </div>
          ))}
        </div>
          
          
          <p className="mb-4 uppercase text-center text-2xl mt-10 font-bold tracking-wide pageHeading text-[#B200CF]">
            Panel 2
          </p>
          <div className="text-[#B200CF] flex flex-wrap justify-center">
          {panel2.map((panel2, index) => (
            <div
              className="my-4 mx-12 p-10 overflow-hidden rounded-2xl min-w-[15%] border border-fuchsia-600 bg-white transition-all duration-300 ease-linear "
              key={index}
            >
              <img
                className="w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear transform-gpu rounded-[4rem]"
                src={panel2.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center teamName">
                {panel2.name}
              </p>
              <p className="my-2 text-xl text-center teamDesignation">
                {panel2.designation}
              </p>
            </div>
          ))}
        </div>
          
          
          <p className=" mb-4 uppercase text-center text-2xl mt-10 font-bold tracking-wide pageHeading text-[#B200CF]">
            Panel 3
          </p>
          <div className="text-[#B200CF] flex flex-wrap justify-center">
          {panel3.map((panel3, index) => (
            <div
              className="my-4 mx-12 p-10 overflow-hidden rounded-2xl min-w-[15%] border border-fuchsia-600 bg-white transition-all duration-300 ease-linear "
              key={index}
            >
              <img
                className="w-52 mx-auto hover:scale-110 transition-all duration-300 ease-linear transform-gpu rounded-[4rem]"
                src={panel3.img}
                alt="Member Image"
              />
              <p className="my-2 mt-4 text-2xl text-center teamName">
                {panel3.name}
              </p>
              <p className="my-2 text-xl text-center teamDesignation">
                {panel3.designation}
              </p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Judges;
