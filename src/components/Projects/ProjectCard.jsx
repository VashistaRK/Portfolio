/* eslint-disable */
const ProjectCards = ({ project }) => {
  // Check if project data is available
  if (!project) return null;

  const handleButtonClick = () => {
    window.open(project.github, "_blank");
  };

  return (
    <div className="w-[330px] h-[460px] bg-cardBackground cursor-pointer rounded-xl shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden p-[24px_20px] flex flex-col gap-4 transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-[1.1]">
      {/* Static path for images, assuming images are in public directory */}
      <img
        src={`/images/${project.image}`} // Assuming image is stored in public/images
        alt="Project"
        className="w-full h-[180px] bg-lightGray rounded-xl shadow-[0_0_16px_2px_rgba(0,0,0,0.3)]"
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
    </div>
  );
};

export default ProjectCards;
