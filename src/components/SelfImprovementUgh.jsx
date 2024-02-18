import React from "react";
import { motion } from "framer-motion";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0.1;
    // transform: translate3d(-200px, -100px, 0);
    transform: translate2d( -50px, 0);
    transparent:0;
  }
  to {
    opacity: 1;
    transform: translate2d( 0, 0);
  }
`;
const dummyData = [
  {
    title: "It's not as easy as 1-2-3",
    description:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know [and nothing else].",
  },
  {
    title: "Old habis are hard to break.",
    description:
      "And bad behaviors die hard. Fortunately, we give great science backend techinques to use.",
  },
  {
    title: "Embrace Change",
    description:
      "Navigate transitions with confidence and resilience. Our sessions equip you with the tools and mindset needed to adapt and thrive in any situation.",
  },
  {
    title: "Ignite Creativity",
    description:
      "Fuel your imagination and unleash your creative genius. Our sessions inspire innovative thinking and foster a culture of experimentation.",
  },
  {
    title: "Find Inner Peace",
    description:
      "Calm the chaos within and cultivate inner harmony. Our sessions provide techniques for relaxation and mindfulness, promoting a sense of tranquility.",
  },
  {
    title: "Achieve Balance",
    description:
      "Harmonize your personal and professional life. Our sessions help you prioritize your commitments and create a fulfilling lifestyle.",
  },
  {
    title: "Overcome Challenges",
    description:
      "Conquer obstacles and emerge stronger than before. Our sessions offer strategies for resilience and determination, empowering you to face adversity head-on.",
  },
  {
    title: "Celebrate Success",
    description:
      "Acknowledge your accomplishments and bask in your achievements. Our sessions encourage you to recognize your progress and savor the moments of triumph.",
  },
];

const SelfImprovement = () => {
  return (
    <section className="px-20 mt-10 mb-24 ">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div>
            <h1 className="text-1xl font-bold px-3 mb-5 text-black">
              Wrong with self improvement & how we&apos;re fixing it.
            </h1>
          </div>
          <div className="text-5xl pb-3 font-bold text-black">
            Self Improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="flex items-center justify-center"
        >
          <img
            src="/blue-ghost.png"
            alt="download applestore"
            width={70}
            height={70}
          />
        </motion.div>
      </div>

      <div className="timeline px-20 pt-14 h-96 overflow-y-scroll">
        <div className="border-l-2 border-l-violet-300 flex flex-col gap-16">
          <Reveal keyframes={customAnimation}>
            {dummyData.map((item, index) => {
              return (
                <div key={index}>
                  <motion.div className="max-w-[40rem] relative align-top pl-8">
                    <div style={{ left: "-12px" }} className="absolute">
                      🟣
                    </div>
                    <p className="text-xl font-bold">{item.title}</p>
                    <p className="mt-3">{item.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;