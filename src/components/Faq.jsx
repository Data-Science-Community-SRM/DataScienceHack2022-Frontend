import React from 'react';
import { useState } from 'react';
import './bg.css';
const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };
  return (
    <div
      className="flex flex-col justify-center items-center px-[0.5rem]"
      id="faq"
    >
      <h1 className="text-[#B200CF] text-[3rem] font-bold text-center sm:mb-10 mb-5">
        FAQ
      </h1>
      <div className="questions grid">
        {data.map((item, i) => (
          <div
            className="item bg-white my-2.5 sm:px-10 px-5 sm:py-5 py-2.5 rounded-md sm:text-lg text-sm max-w-[600px]"
            key={i}
          >
            <div
              className="title flex justify-between items-center cursor-pointer text-black hover:text-[#B200CF] font-bold"
              onClick={() => toggle(i)}
            >
              <p>{item.question}</p>
              <span className="text-2xl">{selected === i ? '-' : '+'}</span>
            </div>
            <div
              className={
                selected === i
                  ? 'content text-black pt-2.5 transition ease-in duration-500'
                  : 'max-h-0 overflow-hidden transition ease-out'
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const data = [
  {
    question: 'How many rounds are going there for the hackathon?',
    answer:
      'There are going to be three rounds: The first round is the Competitive Programming round. The second round is the hackathon round and the third round is the presentation round.',
  },
  {
    question: 'What will be the mode of the hackathon?',
    answer:
      'Round 1 (Hackerrank) & Round 3 is going to be in online mode. Round 2 is going to be offline in J.C Bose Hall Tech Park.',
  },
  {
    question:
      'Who can participate in the hackathon? Are there any qualification criteria?',
    answer:
      'Anyone! Passionate about problem-solving and a Little bit of coding & designing? If yes then you have landed at the right spot. What are you waiting for then? Register now!!',
  },
  {
    question: 'What is the last date for registration?',
    answer: '6PM of the 30th Aug is the last date for registration',
  },
  {
    question: 'Do we have to pay anything for registration?',
    answer:
      'Nothing! All our events are free. Just put your problem-solving caps on and hop onboard',
  },
  {
    question:
      'It is my first time registering for a hackathon. Are there any prerequisites for taking part in the hackathon?',
    answer:
      'Are you someone who loves problem-solving with a touch of coding and designing? If yes, then that is all we need!',
  },
  {
    question: 'I cannot find my doubt here!',
    answer:
      <span>Ah, no worries. We got you covered. You can reach us at <a style={{textDecoration: "underline"}} href="mailto:datasciencecommunitysrm@gmail.com">@dscommunitysrm</a> with all your questions!</span>,
  },
];

export default Faq;
