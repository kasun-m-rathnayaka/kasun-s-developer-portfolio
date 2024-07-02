"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/3dPin";
import Image from "next/image";

const RecentProjects = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-50%" },
    animation: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: "-50%" },
  };

  return (
    <div>
      <div className="mt-24 px-5 md:px-10 lg:px-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="font-black text-white text-3xl md:text-5xl md:max-w-[600px] mb-5 m-auto text-center">
            A Small Selection Of My{" "}
            <span className="text-purple-100">Recent Projects</span>
          </h2>
        </motion.div>
        <div className="flex gap-16 flex-wrap justify-center items-center mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[90%] flex justify-center items-center min-h-72 md:min-w-[45%]"
            >
              <PinContainer
                title={project.link}
                href={project.link}
                className=""
              >
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[21rem] ">
                  <Image
                    src={project.img}
                    width={400}
                    height={300}
                    alt={project.title}
                    className=" rounded-2xl"
                  />
                  <h3 className="max-w-xs !pb-2 !mt-2 font-bold text-slate-100 text-xl">
                    {project.title}
                  </h3>
                  <div className="!m-0 !p-0 font-normal">
                    <span className="text-sm line-clamp-2">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center mt-4">
                      {project.icons.map((icon, index) => (
                        <div className=" rounded-full bg-black-primary shadow-sm w-7 h-7 flex items-center justify-center">
                          <Image
                            key={index}
                            src={`/assets/tech/${icon}`}
                            width={20}
                            height={20}
                            alt={icon}
                            className=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
