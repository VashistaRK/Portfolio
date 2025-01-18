// import ProjectCard from "./ProjectCard";
import ProjectCard from "./ProjectCard copy";
import { projects } from "./pra";

const Projects = () => (
  <div className="py-12 " id="projects">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-textPrimary sm:text-5xl">
          Projects
        </h2>
        <p className="mt-4 text-lg text-textSecondary">
          Here are some of my Projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-8">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              className="bg-cardBackground1 shadow-lg rounded-lg"
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
