"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { techstack } from "@/data";
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <>
      <div className="embla w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {techstack.map((index) => (
              <div
                className="embla__slide h-full w-full flex items-center ml-16 md:ml-0 gap-10"
                key={index.id}
              >
                <Image
                  src={`/assets/tech/${index.img}`}
                  alt={index.img}
                  width={60}
                  height={60}
                />
                <h1 className="hidden md:block tracking-wider text-base font-semibold">
                  {index.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
