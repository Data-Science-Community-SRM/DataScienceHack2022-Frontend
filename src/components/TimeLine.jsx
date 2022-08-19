import React from 'react';
const TimeLine = () => {
  return (
    <>
      <div className="flex h-[100vh] w-[100vw] justify-center items-center">
        <div className="timeline w-[60%]">
          <div className="text-[3vmax] pb-8 text-[#7341AA] text-center">
            <h1>TIMELINE</h1>
          </div>
          {data.map((item, i) => (
            <div className="day flex justify-evenly" key={i}>
              <div className="text-[#B200CF] mr-12 text-[1.5vmax] text-right w-[30%]">
                Day {item.day}
                <br />
                {item.date}
              </div>
              <div>
                {item.events.map((sub) => (
                  <div
                    className="bg-[#0D0221] mb-5 px-10 py-5 rounded-md flex"
                    key={sub.time}
                  >
                    <div className="time text-[#B200CF] text-[1.5vmax]">
                      {sub.time}
                    </div>
                    <div className="eventname text-white ml-12 text-[1.2vmax] max-w-md">
                      {sub.event_title}
                    </div>
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
    date: 'Sat, Sept 3rd',
    day: '1',
    events: [
      {
        time: '15:00',
        event_title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi!',
      },
      {
        time: '15:00',
        event_title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi!',
      },
    ],
  },
  {
    date: 'Sat, Sept 3rd',
    day: '2',
    events: [
      {
        time: '15:00',
        event_title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi!',
      },
      {
        time: '15:00',
        event_title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi!',
      },
    ],
  },
];
export default TimeLine;
