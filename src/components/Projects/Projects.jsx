// import ProjectCard from "./ProjectCard";
import ProjectCard from "./ProjectCard copy";
import { projects } from "./pra";
/*eslint-disable*/

const Projects = ({ theme }) => (
  <div className="py-12 " id="projects">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center">
        <h2
          className={`text-4xl font-extrabold tracking-tight ${
            theme === "dark" ? "text-textPrimary" : "text-background"
          } sm:text-5xl`}
        >
          Projects
        </h2>
        <p
          className={`mt-4 text-lg ${
            theme === "dark" ? "text-textSecondary" : "text-lighttextSecondary"
          }`}
        >
          Here are some of my Projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-8">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              className="shadow-lg rounded-lg"
              key={index}
              project={project}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
