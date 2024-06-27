import React from "react";
import { twMerge } from "tailwind-merge";

export default function Title({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div>
      <div className={twMerge("group", className)}>
        <h1 className="text-3xl font-bold group-hover:text-purple-600 transition-all">
          {text}
        </h1>
        <div className="w-32 h-2 bg-purple-600 rounded-full group-hover:translate-x-4 transition-all"></div>
        <div className="w-32 h-2 bg-green-500 rounded-full translate-x-2 group-hover:-translate-x-0 transition-all"></div>
      </div>
    </div>
  );
}
