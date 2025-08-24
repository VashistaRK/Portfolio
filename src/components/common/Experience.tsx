/* eslint-disable */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  {
    role: "Software Developer Intern",
    company: "XYZ Corp",
    duration: "Jan 2024 - Jun 2024",
    description: "Worked on full-stack features and optimized APIs.",
  },
  {
    role: "Backend Developer",
    company: "ABC Pvt Ltd",
    duration: "Jul 2024 - Present",
    description: "Built scalable backend services and database systems.",
  },
  {
    role: "Hackathon Finalist",
    company: "JJ College Hackathon",
    duration: "2023",
    description: "Developed an AI-powered chatbot in 24 hours.",
  },
];

export default function Experience() {
  return (
    <section className="relative w-full min-h-screen px-6 lg:px-20 py-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-20">
        Experience
      </h2>

      <div className="flex flex-col w-full space-y-24">
        {EXPERIENCES.map((exp, i) => {
          const ref = useRef(null);
          const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start 0.9", "end 0.2"],
          });

          // Slide direction based on index
          const x = useTransform(
            scrollYProgress,
            [0, 0.2, 0.8, 1, 1.5], // phases
            i % 2 === 0
              ? ["-100vw", "-20vw", "-20vw", "-20vw", "-100vw"] // left side entry & exit
              : ["100vw", "20vw", "20vw", "20vw", "100vw"] // right side entry & exit
          );

          const opacity = useTransform(
            scrollYProgress,
            [0, 0.2, 0.8, 1, 1.5],
            [0, 1, 1, 1, 0]
          );

          return (
            <motion.div
              key={i}
              ref={ref}
              style={{ x, opacity }}
              className="flex w-full justify-center"
            >
              <div
                className="max-w-md bg-gradient-to-br from-zinc-800/40 to-zinc-700/20 
                p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-white/60">{exp.company}</p>
                <p className="text-xs text-white/40 mb-3">{exp.duration}</p>
                <p className="text-white/80">{exp.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
