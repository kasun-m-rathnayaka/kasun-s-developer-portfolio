import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="w-full h-screen">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <BackgroundBeams />
      <div className="w-[80%] mx-auto mt-24">
        <div className="flex flex-col justify-center">
          <h2 className="text-center text-sm">
            Unleash web magic with next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-6xl"
            words="Turning Creative Ideas into Interactive Realities."
          />
          <p className="text-center">
            Hi, I am Kasun. a front end developer based in sri lanka
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
