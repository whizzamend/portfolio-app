"use client";

import Link from "next/link";
import { MovingBorderBtn } from "./ui/moving-border";
import { FaBriefcase } from "react-icons/fa";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div
      className="min-h-[60vh] flex flex-col-reverse gap-14 lg:flex-row lg:gap-0 items-center justify-between"
      data-aos="fade-in"
    >
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to see you here! 👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-purple-600">
            {"I'm Nurislom."}
          </span>
        </h1>

        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Uzbekistan, I'm a Front-End developer passionate about building a modern web application that users love."
          }
        </p>
        <Link className="inline-block group" href={"mailto:devvixxd@gmail.com"}>
          <Title text="Contact Me 📭" />
        </Link>
      </div>
      <div className="relative">
        <div className="size-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="size-32 rounded-2xl bg-purple-600"></div>
            <div className="size-32 rounded-full bg-green-500"></div>
          </div>
          <div>
            <div className="flex gap-3 -translate-x-8">
              <div className="size-32 rounded-2xl bg-green-500"></div>
              <div className="size-32 rounded-full bg-purple-600"></div>
            </div>
          </div>
          <div className="glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p className="flex items-center justify-between gap-x-2">
              <FaBriefcase />
              Available for work
            </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
