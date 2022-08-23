import React from 'react';
import { useEffect } from 'react';
import './countdown.css';

const Countdown = () => {
  useEffect(() => {
    const current = new Date();
    const final = new Date('09/03/2022');

    var Difference_In_Time = final.getTime() - current.getTime();

    const endtime = new Date(Date.parse(new Date()) + Difference_In_Time);
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }

    const clock = document.getElementById('clockdiv');
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();

    const timeinterval = setInterval(updateClock, 1000);
    return () => window.clearInterval(timeinterval);
  }, []);
  return (
    <>
      <div id="clockdiv">
        <div>
          <span className="days"></span>
          <div className="smalltext">Days</div>
        </div>
        <div>
          <span className="hours"></span>
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes"></span>
          <div className="smalltext">Minutes</div>
        </div>
        <div>
          <span className="seconds"></span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    </>
  );
};

export default Countdown;