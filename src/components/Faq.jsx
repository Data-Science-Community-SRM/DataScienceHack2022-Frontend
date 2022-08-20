import React from 'react';
import { useState } from 'react';
import './bg.css';
const Faq = () => {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected == i) {
      setSelected(null)
    }
    else {
      setSelected(i)
    }

  }


  return (
    <>
      <div className="flex h-[100vh] w-[100vw] justify-center items-center">
        <div className="accordion w-[60%]">
          <div className="text-[3vmax] pb-8 text-[#7341AA] text-center"><h1>FAQ</h1></div>
          {data.map((item, i) => (
            <div className="item bg-[#0D0221] mb-5 px-10 py-5 rounded-md">
              <div className="title flex justify-between items-center text-xl cursor-pointer duration-500 text-white hover:text-[#B200CF]" onClick={() => toggle(i)}>
                <h1>{item.question}</h1>
                <span className='text-2xl'>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? "content text-white text-xl pt-5 transition ease-in duration-500" : "max-h-0 overflow-hidden transition ease-out duration-500"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const data = [
  {
    question: 'question1?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium, adipisci voluptate quas doloremque quam in ipsa ullam eaque nihil, iure fuga voluptatum.',
  },
  {
    question: 'question2?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium, adipisci voluptate quas doloremque quam in ipsa ullam eaque nihil, iure fuga voluptatum.',
  },
  {
    question: 'question3?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium, adipisci voluptate quas doloremque quam in ipsa ullam eaque nihil, iure fuga voluptatum.',
  },
  {
    question: 'question2?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium, adipisci voluptate quas doloremque quam in ipsa ullam eaque nihil, iure fuga voluptatum.',
  },
  {
    question: 'question3?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium, adipisci voluptate quas doloremque quam in ipsa ullam eaque nihil, iure fuga voluptatum.',
  },
];
export default Faq



