import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialmedia } from "@/data";

export function Footer() {
  return (
    <footer className="w-full pt-10" id="contact">
      <div className="w-full h-full md:max-h-[500px] -mb-36 md:m-0">
        <div className="md:-mb-[600px] md:mt-10 m-auto text-center px-5 flex justify-center items-center flex-col">
          <h1 className="font-black text-white text-3xl md:text-5xl md:max-w-[950px] md:px-10 lg:px-12 tracking-widest m-auto text-center px-5">
            Ready to turn your ideas into{" "}
            <span className="text-purple-100">Interactive realities</span>
          </h1>
          <p className="pt-4 md:pt-10 max-w-[400px]">
            Have a project in mind? Reach out to me, and let&apos;s turn your ideas
            into interactive realities that inspire and engage.
          </p>
          <a href="mailto:k.rathnayaka365@gmail.com" className="mt-5 md:mt-14">
            <MagicButton word="Let's get in touch" />
          </a>
          <div className="mt-20 -mb-10 md:mt-32 flex flex-col md:flex-row justify-center items-center gap-3 md:justify-between w-full md:pr-40 md:pl-14">
            <div>
              <p>Copyright © Kasun Rathnayaka 2024 | Frontend Developer</p>
            </div>
            <div className="flex">
              {socialmedia.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img
                    src={`/img/${item.img}`}
                    alt={item.img}
                    className="w-6 rounded-md cursor-pointer"
                  />
                </a>
              ))}
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
