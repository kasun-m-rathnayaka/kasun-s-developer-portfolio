import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3dPin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div>
      <div className="mt-[150px] px-5 md:px-10 lg:px-32 ">
        <h2 className="font-black text-white text-3xl md:text-5xl md:max-w-[600px] mb-5 m-auto text-center">
          A Small Selection Of My{" "}
          <span className="text-purple-100">Recent Projects</span>
        </h2>

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
                  <h3 className="!pb-2 !mt-2 font-bold text-slate-100 text-xl w-full">
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
                        <div key={index} className=" rounded-full border-white-primary/[0.2] bg-black-primary shadow-sm w-9 h-9 flex items-center justify-center" style={{transform:`translatex(-${5 * index * 2 }px)`}}>
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
