import React from 'react'
const TimeLine = () => {
  return (
      <>
          <div className="flex h-[100vh] w-[100vw] justify-center items-center">
              <div className='timeline w-[55%]'>
                  <div className="text-[6vh] pb-8 text-[#7341AA] text-center"><h1>TIMELINE</h1></div>
                  {data.map((item,i)=>(
                      <div className='flex justify-between'>
                          <div className='text-[#B200CF] text-[3vmin] pt-5 text-right'>{item.day}
                          <br />
                          {item.date}</div>
                      <div className="item bg-[#0D0221] mb-5 px-10 py-5 rounded-md flex justify-between">
                          <div className="time text-[#7341AA] text-[4vh]">
                                 {item.time}
                           </div>
                           <div className="event text-white text-[3vh] w-[70%]">
                                {item.event}
                           </div>
                       </div>
                      </div>
                  ))}
              </div>
             
           </div>
      </>
     
  )
}
const data = [
    {
        time: '15:00',
        event: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        day:'Day 1',
        date: 'Sat, Sept 3rd',

    },
    {
        time: '15:00',
        event: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        day: '',
        date: '',
    },
    {
        time: '15:00',
        event: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        day: 'Day 1',
        date: 'Sat, Sept 3rd',
    },
    {
        time: '15:00',
        event: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        day: '',
        date: '',
    },
    
];
export default TimeLine





