"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/data";

const Experience = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-50%" },
    animation: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: "-50%" },
  };

  interface ExperienceCardProps {
    title: string;
    description: string;
    date: string;
  }

  const ExperienceCard = ({
    title,
    description,
    date,
  }: ExperienceCardProps) => (
    <VerticalTimelineElement
      // className="vertical-timeline-element--work"
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: "#110c26", color: "#fff" }}
      icon={
        <div>
          <img
            src="/assets/tech/css.png"
            alt="code"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <p>{description}</p>
      </div>
    </VerticalTimelineElement>
  );

  return (
    <div>
      {" "}
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
          <h2 className="font-black text-white text-6xl md:text-7xl mb-5">
            Overview
          </h2>
        </motion.div>

        {/* verticle timeline */}
        <VerticalTimeline>
          {experienceData.map((data, index) => (
            <ExperienceCard
              key={index}
              title={data.title}
              description={data.description}
              date={data.date}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
