import { useState } from "react";
/*eslint-disable*/
const ProjectCards = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!project) return null;

  const handleButtonClick = () => {
    window.open(project.github, "_blank");
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false); // Close modal only when clicking the background
    }
  };

  return (
    <div
      className={`w-[330px] h-[460px] bg-cardBackground cursor-pointer rounded-xl shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden p-[24px_20px] flex flex-col gap-4 transition-all duration-500 ease-in-out ${
        isOpen
          ? ""
          : "hover:translate-y-[-10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-[1.1]"
      }`} //Conditional Hover Effect:
    >
      {/* Thumbnail Image */}
      <img
        src={`${import.meta.env.BASE_URL}/images/${project.image}`}
        alt="Project"
        onClick={() => setIsOpen(true)} // Open modal on image click
        className="w-full h-[180px] bg-lightGray rounded-xl shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] cursor-pointer"
      />

      {/* Tags */}
      <div className="w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags && project.tags.length > 0 ? (
          project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-normal text-primary bg-primary15 py-1 px-2 rounded-xl"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="text-xs font-normal text-textSecondary">
            No tags
          </span>
        )}
      </div>

      {/* Title and Description */}
      <div className="w-full flex flex-col gap-0 px-1 text-textSecondary">
        <div className="text-lg font-semibold text-textPrimary truncate overflow-hidden line-clamp-2">
          {project.title}
        </div>
        <div className="text-sm font-normal text-textSecondary99 mt-2 truncate overflow-hidden line-clamp-3">
          {project.description}
        </div>
      </div>

      {/* Project Members */}
      <div className="flex items-center pl-2.5">
        {project.members && project.members.length > 0 ? (
          project.members.map((member, index) => (
            <img
              key={index}
              src={member.img}
              alt="Member"
              className="w-9 h-9 rounded-full -ml-2.5 bg-lightGray shadow-[0_0_10px_rgba(0,0,0,0.2)] border-2 border-cardBackground"
            />
          ))
        ) : (
          <span className="text-xs text-textSecondary">No members</span>
        )}
      </div>

      {/* View Project Button */}
      <button
        onClick={handleButtonClick}
        className="w-full py-2 bg-textPrimary text-background text-sm font-bold rounded-xl cursor-pointer transition-all duration-800 ease-in-out"
      >
        View Project
      </button>

      {/* Fullscreen Pop-out Image Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleBackgroundClick}
        >
          {/* Full Image */}
          <img
            src={`${import.meta.env.BASE_URL}/images/${project.image}`}
            alt={project.title}
            className="w-auto max-w-[90%] max-h-[90%] rounded-xl shadow-[0_0_16px_4px_rgba(0,0,0,0.5)]"
          />
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-400 transition-colors"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
