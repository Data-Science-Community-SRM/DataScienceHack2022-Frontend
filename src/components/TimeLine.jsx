import React from 'react';
import timeline from './assets/timeline.png';
const TimeLine = () => {
  return (
    <>
      <div
        className="flex h-auto w-[100vw] justify-center items-center my-8"
        id="timeline"
      >
        <div className="timeline w-[60%] flex flex-col items-center">
          <div className="flex justify-center relative mb-16">
            <p className="text-[#B200CF] text-[3vmax] font-bold mt-20 transform -translate-y-1">
              TIMELINE
            </p>
            <div className="w-[180px] h-16 bottom-0 absolute"></div>
          </div>
          {/* {data.map((item, i) => (
            <div className="md:flex text-[#B200CF] text-xl" key={i}>
              <div className="w-[100%] mb-10 md:w-[20%]">
                Day {item.day}
                <br />
                {item.date}
              </div>
              <div className="w-[100%] md:w-[80%]">
                {item.events.map((sub) => (
                  <div
                    // className="bg-[#0D0221] mb-5 px-10 py-5 rounded-md flex"
                    key={sub.time}
                    className={
                      sub.time === null
                        ? 'bg-[#efedff] mb-5 px-10 py-5 rounded-md flex justify-left'
                        : 'bg-[#efedff] mb-5 px-10 py-5 rounded-md flex'
                    }
                  >
                    <div className="mr-12 w-[20%]">{sub.time}</div>
                    <div className="text--[#0D0221] w-[80%]">
                      {sub.event_title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))} */}
          <img src={timeline} alt="" />
        </div>
      </div>
    </>
  );
};
// const data = [
//   {
//     date: 'Thu, Sept 1st',
//     day: '1',
//     events: [
//       {
//         time: null,
//         event_title: 'Round 1 (Competitive coding)',
//       },
//     ],
//   },
//   {
//     date: 'Sat, Sept 3rd',
//     day: '2',
//     events: [
//       {
//         time: null,
//         event_title: 'Round 2 (Project Build)',
//       },
//       {
//         time: '0900 hrs',
//         event_title: ' The hackathon begins',
//       },
//     ],
//   },
//   {
//     date: 'Sun, Sept 4th',
//     day: '3',
//     events: [
//       {
//         time: '1200 hrs',
//         event_title: 'The hackathon ends.',
//       },
//       {
//         time: null,
//         event_title: 'Round 3 (Presentation)',
//       },
//       {
//         time: '1300 hrs',
//         event_title:
//           ' The results for the 2nd round will go up on the website & the participants will also receive a mail',
//       },
//       {
//         time: '1400 hrs',
//         event_title:
//           ' The Finals will occur on "4th Sept", where the participants will have to illustrate their project via a presentation',
//       },
//     ],
//   },
// ];
export default TimeLine;
