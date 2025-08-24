import { cn } from "../../lib/utils";

// Example skills array
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Python",
  "Django",
  "Flask",
  "TailwindCSS",
  "Git",
  "Docker",
  "AWS",
];

export default function Skills() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between text-red-950 px-6 sm:px-12 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-16"
      id="skills"
    >
      {/* Left Content */}
      <div className="max-w-xl text-center lg:text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">My Skills</h2>
        <p className="text-zinc-700 text-base sm:text-lg">
          These are the technologies and tools I have worked with across
          frontend, backend, databases, and deployment.
        </p>
      </div>

      {/* Right Grid */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6 rounded-xl relative",
            "bg-gradient-to-b from-white/10 to-transparent",
            "transform lg:rotate-3 lg:skew-y-3 shadow-xl"
          )}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 py-3 bg-zinc-800/50 rounded-lg 
                         text-sm sm:text-base font-medium text-zinc-100 backdrop-blur-md
                         hover:bg-zinc-700/60 transition"
            >
              {skill}
            </div>
          ))}

          {/* Static gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent pointer-events-none rounded-xl" />
        </div>
      </div>
    </section>
  );
}
