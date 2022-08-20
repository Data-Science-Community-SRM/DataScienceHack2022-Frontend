import React from 'react';
const TimeLine = () => {
  return (
    <>
      <div className="flex h-[120vh] w-[100vw] justify-center items-center">
        <div className="timeline w-[60%]">
          <div className="text-[3vmax] pb-8 text-[#7341AA] text-center">
            <h1>TIMELINE</h1>
          </div>
          {data.map((item, i) => (
            <div className="flex text-[#B200CF] text-xl" key={i}>
              <div className="w-[20%]">
                Day {item.day}
                <br />
                {item.date}
              </div>
              <div className="w-[80%]">
                {item.events.map((sub) => (
                  <div
                    // className="bg-[#0D0221] mb-5 px-10 py-5 rounded-md flex"
                    key={sub.time}
                    className={
                      sub.time === null
                        ? 'bg-[#0D0221] mb-5 px-10 py-5 rounded-md flex justify-left'
                        : 'bg-[#0D0221] mb-5 px-10 py-5 rounded-md flex'
                    }
                  >
                    <div className="mr-12 w-[20%]">{sub.time}</div>
                    <div className="text-white w-[80%]">{sub.event_title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const data = [
  {
    date: 'wed, Aug 31st',
    day: '1',
    events: [
      {
        time: null,
        event_title: 'Round 1(competitive coding)',
      },
    ],
  },
  {
    date: 'Sat, Sept 3rd',
    day: '2',
    events: [
      {
        time: null,
        event_title: 'Round 2(Project Build)',
      },
      {
        time: '0900 hrs',
        event_title: ' The hackathon begins',
      },
    ],
  },
  {
    date: 'Sun, Sept 4th',
    day: '3',
    events: [
      {
        time: null,
        event_title: 'Round 3 (Presentation)',
      },
      {
        time: '1200 hrs',
        event_title: 'The hackathon ends.',
      },
      {
        time: '1300 hrs',
        event_title:
          ' The results for the 2nd round will go up on the website & the participants will also receive a mail',
      },
      {
        time: '1400 hrs',
        event_title:
          ' The Finals will occur on "4th Sept", where the participants will have to illustrate their project via a presentation',
      },
    ],
  },
];
export default TimeLine;
