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
    <>
      <div
        className="flex h-auto w-[100vw] justify-center items-center mb-8"
        id="faq"
      >
        <div className="accordion w-[60%]">
          <div className="flex justify-center relative mb-24">
            <h1 className="text-[#B200CF] text-[3vmax] font-bold transform -translate-y-1">
              FAQ
            </h1>
            <div className="blur-2xl w-[180px] h-16  bottom-0 bg-[#7341AA] absolute"></div>
          </div>
          {data.map((item, i) => (
            <div
              className="item bg-[#0D0221] mb-5 px-10 py-5 rounded-md"
              key={i}
            >
              <div
                className="title flex justify-between items-center text-xl cursor-pointer text-white hover:text-[#B200CF]"
                onClick={() => toggle(i)}
              >
                <h1>{item.question}</h1>
                <span className="text-2xl">{selected === i ? '-' : '+'}</span>
              </div>
              <div
                className={
                  selected === i
                    ? 'content text-white text-xl pt-5 transition ease-in duration-500'
                    : 'max-h-0 overflow-hidden transition ease-out'
                }
              >
                {item.answer}
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
    question: 'How many rounds are going there for the hackathon?',
    answer:
      'There are going to be three rounds:The first round is the Competitive Programming round.The second round is the hackathon round.The third round is the presentation round.',
  },
  {
    question: 'What will be the mode of the hackathon?',
    answer:
      'Round 1 (Hackerrank) & Round 3 is going to be in online mode. Round 2 (J.C Bose Hall Tech Park) is going to be offline.',
  },
  {
    question:
      'Who can participate in the hackathon? Are there any qualification criteria?',
    answer:
      'Anyone! Passionate about problem-solving and a Lil bit of coding & designing? If yes,then you have landed at the right spot.What are you waiting for then ? Register now',
  },
  {
    question: 'What is the last date for registration?',
    answer: '30th Aug 22',
  },
  {
    question: ' Do we have to pay anything for registration?',
    answer:
      'Nothing. All our events are free. Just put your problem-solving caps on and hop onboard',
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
      'Ah, no worries. We got you covered. You can reach us at contact@https://linktr.ee/dscommunity with all your questions!',
  },
];
export default Faq;
