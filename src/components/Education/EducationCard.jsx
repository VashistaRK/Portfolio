/*eslint-disable*/
const EducationCard = ({ education }) => {
  return (
    <div className="w-[300px] bg-[rgba(255, 255, 255, 0.1)] p-4 flex flex-col bg-opacity-90 gap-4 rounded-lg shadow-[rgba(23,92,230,0.15)_0px_4px_24px] relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:translate-y-[-5px] border-[0.1px] border-[#FF7F50] md:w-[400px] lg:w-[650px] lg:p-6">
      {/* Top Section with Image and Details */}
      <div className="w-full flex gap-4">
        <img
          src={`${import.meta.env.BASE_URL}/images/${education.img}`} // Reference to images in the public folder
          alt="School Logo"
          className="h-[40px] bg-black rounded-lg mt-1 md:h-[50px] lg:h-[60px]"
        />
        <div className="w-full flex flex-col">
          <div className="text-[14px] font-semibold text-primary lg:text-[18px] md:text-[16px]">
            {education.school}
          </div>
          <div className="text-[12px] font-medium text-textSecondary lg:text-[14px] md:text-[13px]">
            {education.degree}
          </div>
          <div className="text-[10px] font-normal text-textSecondary lg:text-[12px] md:text-[11px]">
            {education.date}
          </div>
        </div>
      </div>

      {/* Grade Section */}
      <div className="text-[12px] font-medium text-textSecondary lg:text-[14px] md:text-[13px]">
        <b>Grade: </b>
        {education.grade}
      </div>

      {/* Description Section */}
      <div className="w-full text-[12px] font-normal text-textSecondary99 mb-2 lg:text-[14px] md:text-[13px]">
        <span className="overflow-hidden block text-ellipsis line-clamp-4 hover:line-clamp-none">
          {education.desc}
        </span>
      </div>

      {/* Document Section 
      <img
        src={`/images/${education.img}`} // Same here for the document image
        alt="Document"
        className="hidden lg:block h-[100px] w-fit bg-black rounded-lg cursor-pointer hover:opacity-80 md:h-[80px] sm:h-[70px]"
      />*/}
    </div>
  );
};

export default EducationCard;
