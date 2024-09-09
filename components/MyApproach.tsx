"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { approaches } from "@/data";
import MagicButton from "./ui/MagicButton";

const MyApproach = () => {
  return (
    <div id="approach">
      <div className="mt-[100px] px-5 md:px-10 lg:px-32 flex flex-col items-center">
        <h2 className="font-black text-white text-3xl md:text-5xl md:max-w-[600px] mb-5 m-auto text-center">
          My <span className="text-purple-100">Approach</span>
        </h2>
        <p className="max-w-[900px] text-center">My development approach is uniquely focused on blending creativity with precision. I prioritize understanding the core needs of users, designing intuitive interfaces, and building scalable, high-performance solutions. By leveraging modern technologies and agile methodologies, I ensure each project is crafted with attention to detail, adaptability, and future growth in mind. This results in interactive and seamless digital experiences that stand out in both functionality and design.</p>
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card approach="Planning" title={approaches[0]}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card approach="Development" title={approaches[1]}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card approach="Testing" title={approaches[2]}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  children,
  approach,
}: {
  title: string;
  children?: React.ReactNode;
  approach: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] rounded-xl group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full mx-auto my-auto flex items-center justify-center font-bold text-xl md:text-2xl">
          {approach}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MyApproach;
