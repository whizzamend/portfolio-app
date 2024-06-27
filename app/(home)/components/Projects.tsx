import React from "react";
import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Wavy Music",
      tech: [SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript],
      link: "https://wavy-music.vercel.app/",
      cover: "/project-1.png",
      background: "bg-blue-500",
    },
    {
      title: "Posty App",
      tech: [SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript],
      link: "https://postyfrvr.vercel.app/",
      cover: "/project-2.png",
      background: "bg-neutral-600",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-5">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6 cursor-default"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-20">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="size-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
