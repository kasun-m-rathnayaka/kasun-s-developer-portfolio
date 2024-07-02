"use client";

import React from "react";
import { motion } from "framer-motion";
import { TiltCard } from "./ui/TiltCard";
import { cardData } from "@/data";

const WorkFlow = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-50%" },
    animation: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: "-50%" },
  };

  return (
    <div className="mt-32 px-5 md:px-20 lg:px-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className=" mt-1 text-left text-base/6 text-neutral-200"
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
        <div className="mt-10 flex flex-wrap items-center w-screen gap-5">
          {cardData.map((card, index) => (
            <TiltCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkFlow;
