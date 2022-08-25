import React from 'react';
import learnovators from './assets/Learnovators.jpg';
import challas from './assets/challas.jpg';

const goldData = [
  {
    id: 4,
    logo: challas,
  },
  {
    id: 1,
    logo: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc5173fd-2a6a-434e-9d48-1883d77bfc9f%2F_Colored.png?table=block&id=d55db242-49ff-4e05-8fae-865dc9b77873&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=870&userId=&cache=v2',
  },
  {
    id: 2,
    logo: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F76011d1b-903e-42f3-afea-b0bc4c6d74c6%2FColored.png?table=block&id=a406ea8b-1a05-4a24-bc5d-bfbc1509bcb3&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=870&userId=&cache=v2',
  },
  {
    id: 3,
    logo: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45ce5226-d6e7-48ea-aa2f-99814a2951e8%2FColored.png?table=block&id=27322a67-5c4d-4da4-a0aa-3de8d9a27fea&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=870&userId=&cache=v2',
  },
];

// const silverData = [
//   {
//     id: 1,
//     logo: './assets/Group5.png',
//   },
//   {
//     id: 2,
//     logo: './assets/Group6.png',
//   },
//   {
//     id: 3,
//     logo: './assets/Group7.png',
//   },
//   {
//     id: 4,
//     logo: './assets/Group8.png',
//   },
//   {
//     id: 5,
//     logo: './assets/Group8.png',
//   },
// ];

function Sponsors() {
  return (
    // <div className="flex flex-col min-h-screen bg-[#0D0221] text-montserrat bg-[url('./assets/bg-triangles.png')]">
    <div
      className="flex flex-col min-h-screen text-montserrat my-8"
      id="sponsors"
    >
      <div className="flex justify-center relative mb-16">
        <h1 className="text-[#B200CF] text-[3vmax] font-bold mt-20 transform -translate-y-1">
          SPONSORS
        </h1>
        <div className="w-[180px] h-16 bottom-0 absolute"></div>
      </div>

      <div className="flex flex-col mt-8 font-bold">
        <div className="flex justify-center text-[#E5E4E2] text-xl items-center">
          <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-l from-white"></div>
          PLATINUM
          <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-r from-white "></div>
        </div>

        <div className="flex justify-center my-8 flex-wrap text-[#E5E4E2] text-xl items-center gap-8 mx-8">
          {/* {platinumData.map((platinumData, id) => ( */}
          {/* <div key={id}> */}
          <div className="w-[400px] hover:scale-110 transition-all duration-300 cursor-pointer">
            <img
              src={learnovators}
              alt="Image not loaded!"
              className="rounded-2xl"
            />
          </div>
          {/* ))} */}
        </div>

        <div className="flex justify-center text-[#FFD700] text-xl items-center">
          <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-l from-white "></div>
          GOLD
          <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-r from-white "></div>
        </div>

        <div className="flex justify-center my-8 flex-wrap text-[#E5E4E2] text-xl items-center gap-8 mx-8">
          {goldData.map((goldData, id) => (
            <div
              key={id}
              className="hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <img src={goldData.logo} alt="Image not loaded!" className="rounded-2xl w-[400px] h-[150px]" />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center text-[#C0C0C0] text-xl items-center">
          <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-l from-white "></div>
          SILVER
          <div className="w-[200px] mx-8 h-[2px] bg-gradient-to-r from-white "></div>
        </div> */}

        {/* <div className="flex justify-center my-8 flex-wrap text-[#E5E4E2] text-xl items-center gap-8">
          {silverData.map((silverData, id) => (
            <div key={id}>
              <img src={silverData.logo} alt="Image not loaded!" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Sponsors;
