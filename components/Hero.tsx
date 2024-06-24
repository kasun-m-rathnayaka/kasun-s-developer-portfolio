import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <section className="w-full h-screen">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <BackgroundBeams />
      <div className="w-[90%] md:w-[50%] mx-auto mt-24">
        <div className="flex flex-col justify-center">
          <h2 className="text-center text-sm tracking-widest">
            Unleash web magic with next.js
          </h2>
          <TextGenerateEffect
            className="text-center"
            words="Turning Creative Ideas into Interactive Realities."
          />
          <p className="text-center tracking-wider text-sm md:text-lg lg:text-2xl my-7">
            Hi, I am Kasun. a front end developer based in sri lanka
          </p>
          <div className="w-[150px] block m-auto">
            <MagicButton word="See My Work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
