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

        <div className="flex gap-x-10 flex-wrap justify-center items-center xl:mt-40 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-h-[450px] w-screen md:w-[45%] xl:h-[550px] "
            >
              <PinContainer
                title={project.link}
                href={project.link}
                className=" h-[360px] md:h-[400px] xl:h-[480px] flex justify-between items-stretch w-full"
              >
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 w-[20rem] h-[21rem] lg:w-[400px] xl:w-[500px] ">
                  <Image
                    src={project.img}
                    width={400}
                    height={300}
                    alt={project.title}
                    className=" rounded-2xl lg:w-[400px] xl:w-[500px]"
                  />
                  <h3 className="max-w-xs !pb-2 !mt-2 font-bold text-slate-100 text-xl">
                    {project.title}
                  </h3>
                  <div className="!m-0 !p-0 font-normal">
                    <span className="text-sm line-clamp-2">
                      {project.description}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <div className="flex justify-center items-center ">
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
                    <div className="text-sm text-purple-100">Check out Project</div>
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
