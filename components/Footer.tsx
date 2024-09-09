import React from "react";
import MagicButton from "./ui/MagicButton";

export function Footer() {
  return (
    <footer className="w-full pt-10" id="contact">
      <div className="w-full min-h-96 -mb-36 md:m-0">
        <div className="md:-mb-[600px] md:mt-10 m-auto text-center px-5 flex justify-center items-center flex-col">
          <h1 className="font-black text-white text-3xl md:text-5xl md:max-w-[950px] md:px-10 lg:px-12 tracking-widest m-auto text-center px-5">
            Ready to turn your ideas into{" "}
            <span className="text-purple-100">Interactive realities</span>
          </h1>
          <p className="pt-10 max-w-[400px]">
            Have a project in mind? Reach out to me, and let's turn your ideas
            into interactive realities that inspire and engage.
          </p>
          <a href="mailto:k.rathnayaka365@gmail.com" className="mt-14">
            <MagicButton word="Let's get in touch" />
          </a>
          <div className="mt-10 flex justify-between">
            <div>
              <p>Copyright © Kasun Rathnayaka 2024 | Frontend Developer</p>
            </div>
            <div className="flex">

            </div>
          </div>
        </div>
        <img
          src={"/img/backdrop.png"}
          alt="backdrop"
          className="w-full h-full opacity-15 rotate-180 object-cover"
        />
      </div>
    </footer>
  );
}
