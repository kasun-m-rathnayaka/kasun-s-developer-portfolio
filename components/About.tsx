import React from "react";
import { WobbleCard } from "./ui/WobbleCard";
import { cardDetails } from "@/data";
import Image from "next/image";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full -mt-5">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
        className=" bg-gradient-to-r from-[#3C8CE7] from-10% to-[#B721FF] to-100%"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-2xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {cardDetails[0].title}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            {cardDetails[0].description}
          </p>
        </div>
        <Image
          src={cardDetails[0].img ?? ""}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 lg:-right-[20%] -bottom-48 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px]"
        className="bg-[#373b44] bg-gradient-to-r from-[#002661] from-10% to-[#92FFC0] to-100%"
      >
        <h2 className="max-w-80  text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {cardDetails[1].title}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          {cardDetails[1].description}
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[200px]"
        className="bg-gradient-to-r from-[#3B2667] from-10% to-[#BC78EC] to-100% cursor-pointer"
      >
        <div className="max-w-lg cursor-pointer">
          <h2 className="max-w-lg md:max-w-lg  text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {cardDetails[2].title}
          </h2>
          <p className="mt-4 max-w-[40rem] text-left  text-base/6 text-neutral-200">
            {cardDetails[2].description}
          </p>
          <button className="text-sm mt-5 flex text-[#BA77EA]">
            Key accomplishments
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4 mt-1 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
        <Image
          src={cardDetails[2].img ?? ""}
          width={650}
          height={650}
          alt="linear demo image"
          className="absolute top-32 md:-right-[2%] lg:-right-25%] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default About;
