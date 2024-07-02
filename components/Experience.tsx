"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

interface CardData {
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    title: "Card 1",
    description: "This is the description for Card 1",
  },
  {
    title: "Card 2",
    description: "This is the description for Card 2",
  },
  {
    title: "Card 3",
    description: "This is the description for Card 3",
  },
];

const TiltCard: React.FC<CardData> = ({ title, description }) => {
  const tiltOptions = {
    scale: 1.1,
    max: 25,
    perspective: 1000,
    speed: 300,
    transition: true,
  };

  return (
    <>
      <Tilt optoins={tiltOptions} style={{ height: 250, width: 250 }}>
        <div className="  bg-purple-100 p-4 rounded-lg shadow-md green-white-gradient">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Tilt>
    </>
  );
};

const Experience = () => {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
    animation: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="mt-20 px-5 md:px-20 lg:px-32">
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <p className="text-[#dfd9ff] font-medium lg:text-[20px] text-[14px] leading-10">
          INTRODUCTION
        </p>
        <h2 className="font-black text-white text-6xl md:text-7xl">Overview</h2>
      </motion.div>
      <motion.div>
        <motion.p
          initial="initial"
          animate="animation"
          variants={variants}
          className="mt-4 text-left text-base/6 text-neutral-200"
        >
          I am a dedicated frontend developer with a robust portfolio of diverse
          projects. My expertise encompasses Next.js, Vite, and React Native,
          where I create dynamic and user-friendly interfaces. I excel in
          implementing smooth animations using Framer Motion and have a strong
          command over backend technologies like Node.js. My proficiency in SASS
          and Tailwind CSS ensures visually appealing and responsive designs. I
          am also adept in database management, with experience in SQL and
          MongoDB. My comprehensive skill set and attention to detail drive my
          passion for crafting exceptional web and mobile applications.
        </motion.p>
        {/* <motion.div>
          {cardData.map((card, index) => (
            <TiltCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Experience;
