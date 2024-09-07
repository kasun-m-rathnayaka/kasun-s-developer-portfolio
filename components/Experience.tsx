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
    icon: string;
  }

  const ExperienceCard = ({
    title,
    description,
    date,
    icon,
  }: ExperienceCardProps) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: "#110c26", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt="code"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="vertical-timeline-element-title text-xl lg:text-2xl">{title}</h3>
        <p className="text-md lg:text-xl">{description}</p>
      </div>
    </VerticalTimelineElement>
  );

  return (
    <div>
      <div className="mt-[150px] ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p className="text-[#dfd9ff] font-medium lg:text-[20px] text-[16px] leading-10 text-center tracking-wide">
            Overview
          </p>
          <h2 className="font-black text-white text-3xl md:text-5xl md:max-w-[600px] mb-5 m-auto text-center px-5 md:px-10 lg:px-12">
            My Work Experience{" "}
            <span className=" text-purple-100">Timeline</span>
          </h2>
        </motion.div>

        {/* verticle timeline */}
        <VerticalTimeline>
          {experienceData.map((data, index) => (
            <ExperienceCard key={index} {...data} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
