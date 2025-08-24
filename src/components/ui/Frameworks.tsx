// src/components/Frameworks.tsx
import {
  SiAuth0,
  SiBlazor,
  SiCplusplus,
  SiSharp,
  SiCss3,
  SiDotnet,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { motion } from "framer-motion";
import React, { type JSX } from "react";

export function Frameworks() {
  const skills: { name: string; icon: JSX.Element }[] = [
    { name: "Auth0", icon: <SiAuth0 /> },
    { name: "Blazor", icon: <SiBlazor /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C#", icon: <SiSharp /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Git", icon: <SiGit /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "WordPress", icon: <SiWordpress /> },
  ];

  return (
    <div className="relative flex h-[25rem] w-full items-center justify-center">
      {/* Diagonal line (bottom-left → middle-right) */}
      <div className="absolute flex gap-4 transform rotate-[-15deg]">
        {skills.slice(0, 12).map((skill) => (
          <TechIcon key={skill.name} icon={skill.icon} label={skill.name} />
        ))}
      </div>

      {/* Vertical line (at end of diagonal, slightly tinted) */}
      <div className="absolute flex flex-col gap-4 rotate-[-12deg] sm:translate-x-[13.5rem] sm:-translate-y-[3.7rem] translate-x-[8rem] -translate-y-[6rem] opacity-40">
        {skills.slice(5).map((skill) => (
          <TechIcon key={skill.name} icon={skill.icon} label={skill.name} />
        ))}
      </div>
    </div>
  );
}

type TechIconProps = {
  icon: JSX.Element;
  label: string;
};

const TechIcon: React.FC<TechIconProps> = ({ icon, label }) => (
  <motion.div
    className="flex items-center justify-center text-gray-700 dark:text-gray-200 
               bg-white dark:bg-zinc-800 rounded-full shadow-md p-3 cursor-pointer"
    whileHover={{ scale: 1.2, rotate: 8 }}
    transition={{ type: "spring", stiffness: 150, damping: 8 }}
    title={label}
  >
    <span className="text-2xl">{icon}</span>
  </motion.div>
);
