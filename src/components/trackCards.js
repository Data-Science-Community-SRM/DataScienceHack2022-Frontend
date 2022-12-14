import React from "react";
import cv from "./assets/comp-vision.png";
import iot from "./assets/iot.png";
import blockchain from "./assets/blockchain.png";
import healthcare from "./assets/healthcare.png";
import open from "./assets/open-track.png";
import nlp from "./assets/nlp.png";
import cs from "./assets/cyber-security.png";
import "./flipCard.css";

const data = [
  {
    id: 1,
    title: "Computer Vision",
    content:
      "It is a subcategory of AI & its prime focus is on building and using digital systems to process, analyze and interpret visual data. The aim is to enable computers to perform the same kind of tasks as humans with the same efficiency. It is like imparting human intelligence and instincts to a system.",
    image: cv,
  },
  {
    id: 2,
    title: "NLP",
    content:
      "While natural language processing is not a new science, the technology is rapidly advancing thanks to an increased interest in human-to-machine communications. It is a component of AI in the field of linguistics that deals with the interpretation and manipulation of human speech or text using the software.",
    image: nlp,
  },
  {
    id: 3,
    title: "Blockchain",
    content:
      "The applications of blockchain go far beyond cryptocurrency and bitcoin. Its capability to construct more transparency and fairness while preserving the business's time and money. Banks and financial institutions are working by employing blockchain because it helps them process transactions more quickly and at a lesser expense.",
    image: blockchain,
  },
  {
    id: 4,
    title: "IOT",
    content:
      "IOT integrates everyday 'things' to the internet. A network of hardware and software which connect and exchange data via the internet. From home automation to the energy sector, IoT brings developers and designers to develop the idea of bringing humanity the dream of an omnipresent Internet connecting not just people but our things.",
    image: iot,
  },
  {
    id: 5,
    title: "Cyber Security",
    content:
      "One of the most prominent challenges for any nation's system software is tackling the crises of security breaches. Keeping this in mind, underneath this theme, participants will have to come up with solutions and code them to increase security, i.e., anything they believe might benefit the security systems.",
    image: cs,
  },
  {
    id: 6,
    title: "Healthcare",
    content:
      "For the first time in history, a health crisis forced us to shut down the global economy, demonstrating how healthcare has always been the most crucial aspect of a country's development. With a purpose in mind, developers have to come up with innovative, disruptive ideas and solutions to overcome the shortcomings in this sector leading to medical advancements.",
    image: healthcare,
  },
  {
    id: 7,
    title: "Open-track",
    content:
      "Our community is a platform where every idea is cultivated & acknowledged. Under this theme, you are allowed to come up with any innovative ideas and bring them to life. Build the ideas that you believe in and make a difference. No regulations, no constraints! Let's spread the wings of creativity.",
    image: open,
  },
];

function TrackCards() {
  return (
    <div className="text-montserrat flex gap-8 flex-wrap justify-center">
      {data.map((data, id) => (
        <div className="flip-card" key={id}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="flex-col gap-8 border w-[20rem] border-fuchsia-600 aspect-square bg-[#b8b1f8] text-black relative rounded-lg">
                <div className="flex justify-center font-bold text-2xl py-6">
                  {data.title}
                </div>
                <div className="flex justify-center py-6">
                  <img
                    style={{ width: "150px" }}
                    src={data.image}
                    alt="Cannot load the image!!"
                  />
                </div>
              </div>
            </div>
            <div className="flip-card-back border border-fuchsia-600 bg-[#b8b1f8] rounded-lg">
              <div className="flex justify-center font-bold text-md py-2 mt-2 text-black">
                {data.title}
              </div>
              <div className="flex text-[#0D0221] mx-6 my-2">
                {data.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrackCards;
