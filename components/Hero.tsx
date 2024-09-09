import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <section className="w-full h-full mb-40">
      <Spotlight
        className="-top-20 -left-32 md:left-60 md:-top-20"
        fill="white"
      />
      <BackgroundBeams className=""/>
      <div className="w-[90%] md:w-[50%] mx-auto mt-28">
        <div className="flex flex-col justify-center">
          <h2 className="text-center text-sm tracking-widest">
            Unleash web magic with next level of web development
          </h2>
          <TextGenerateEffect
            className="text-center"
            words="Crafting digital experiences with creativity and precision"
          />
          <p className="text-center tracking-wider text-base md:text-lg lg:text-2xl my-7">
            Hi, I am Kasun. a front end developer
          </p>
          <div className="w-[170px] block m-auto">
            <MagicButton word="See My Work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
