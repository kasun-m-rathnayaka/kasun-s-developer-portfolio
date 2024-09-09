import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3dPin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div>
      <div className="mt-[150px] px-5 md:px-10 lg:px-32 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-black text-white text-3xl md:text-5xl md:max-w-[600px] mb-5 m-auto text-center">
            A Small Selection Of My{" "}
            <span className="text-purple-100">Recent Projects</span>
          </h2>
          <p className="pt-4 max-w-[600px] text-center">
            Explore my work, where creativity meets functionality. Each project
            showcases my passion for building dynamic, user-focused digital
            experiences. Here’s how I bring ideas to life through code and
            design.
          </p>
        </div>

        <div className="flex gap-x-0 flex-wrap justify-center items-center xl:mt-40 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-h-[470px] w-screen md:w-[47%] xl:h-[550px]"
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
                    className={` rounded-2xl lg:w-[400px] xl:w-[500px] ${
                      project.img === "/projects/10.png" ? "mb-4 mt-4" : ""
                    }`}
                  />
                  <h3 className="!pb-8 !mt-2 font-bold text-slate-100 text-xl w-full line-clamp-1">
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
                        <div
                          key={index}
                          className=" rounded-full border-white-primary/[0.2] bg-black-primary shadow-sm w-9 h-9 flex items-center justify-center"
                          style={{
                            transform: `translatex(-${5 * index * 2}px)`,
                          }}
                        >
                          <Image
                            src={`/assets/tech/${icon}`}
                            width={25}
                            height={25}
                            alt={icon}
                            className=" rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-purple-100">
                      Check out Project
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
