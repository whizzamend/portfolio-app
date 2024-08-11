"use client";

import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";

const Skillz = ({ dataAos }: { dataAos?: string }) => {
  const skillzz = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Bootstrap",
      Icon: SiBootstrap,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      text: "NextJS",
      Icon: SiNextdotjs,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 downToUpAnimation">
      <Title
        text="Skillz 🎯"
        className="flex flex-col items-center justify-center -rotate-6 cursor-default"
      />

      <HoverEffect className="mt-10" items={skillzz} />
    </div>
  );
};

export default Skillz;
