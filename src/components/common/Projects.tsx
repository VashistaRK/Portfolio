import React, { useState } from "react";
import { projects } from "@/data/projects";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const ProjectsShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="mt-12 sm:mt-35 px-6 md:px-16" id="projects">
      {/* Header */}
      <header className="font-bold text-3xl mb-8 sm:mb-0 md:text-6xl sm:px-6">
        My Work
      </header>
      <article className="grid grid-cols-1 md:grid-cols-3 min-h-screen mt-20">
        {/* LEFT SECTION */}
        <div className="relative flex items-end md:col-span-2 mb-6 sm:mb-0 rounded-4xl overflow-hidden md:h-7/12 group">
          {/* Background Image */}
          <img
            src={`assets/projects/${projects[activeIndex].title
              .toLowerCase()
              .replace(/\s+/g, "-")}.png`}
            alt={projects[activeIndex].title}
            className="absolute inset-0 w-full h-full object-cover object-left sm:object-fit sm:object-top z-10 transition duration-500 group-hover:brightness-20"
          />

          {/* Overlay Content (hidden by default, slides up on hover) */}
          <div className="absolute inset-0 flex flex-col justify-end z-20 p-12 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {/* Nav Buttons */}
            <nav className="flex gap-3 mb-4">
              {/* GitHub Button */}
              <a
                className="relative group/icon p-2 rounded-full bg-zinc-800/30 backdrop-blur-md shadow-md overflow-hidden transition"
                href={projects[activeIndex].github}
                target="_blank"
              >
                <Github className="w-5 h-5 text-zinc-100 transform transition-transform duration-200 group-hover/icon:-translate-y-8" />
                <ArrowUpRight className="w-5 h-5 text-zinc-100 absolute inset-0 m-auto opacity-0 transition-all duration-300 group-hover/icon:opacity-100 group-hover/icon:translate-y-0" />
              </a>

              {/* Live Button */}
              <a
                className="relative group/icon p-2 rounded-full bg-zinc-800/30 backdrop-blur-md shadow-md overflow-hidden transition"
                href={projects[activeIndex].live}
                target="_blank"
              >
                <ExternalLink className="w-5 h-5 text-zinc-100 transform transition-transform duration-200 group-hover/icon:-translate-y-8" />
                <ArrowUpRight className="w-5 h-5 text-zinc-100 absolute inset-0 m-auto opacity-0 transition-all duration-300 group-hover/icon:opacity-100 group-hover/icon:translate-y-0" />
              </a>
            </nav>

            {/* Title + Description */}
            <div className="text-zinc-200">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                {projects[activeIndex].title}
              </h2>
              <aside className="space-y-2 mb-4">
                {projects[activeIndex].description.map((desc, i) => (
                  <p key={i} className="text-sm md:text-base text-zinc-300">
                    {desc}
                  </p>
                ))}
              </aside>
              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm bg-zinc-100/10 text-white rounded-full border border-zinc-100/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-zinc-800 md:grid-cols-1 overflow-y-auto md:px-8">
          <ul className="divide-y divide-zinc-600">
            {projects.map((project, index) => (
              <li
                key={project.title}
                className={`p-6 cursor-pointer transition-colors duration-200 ${
                  activeIndex === index ? "bg-zinc-800/10" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-zinc-500 truncate font-poppins">
                  {project.tech.join(" • ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
};

export default ProjectsShowcase;
