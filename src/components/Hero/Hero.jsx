import Typewriter from "typewriter-effect";
import HeroBgAnimation from "./pratic";
/*eslint-disable */
const Hero = ({ theme }) => {
  return (
    <div id="about" className="relative py-20 px-6 sm:px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 flex justify-end overflow-hidden">
        <HeroBgAnimation />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="sm:order-1 flex-1 text-center sm:text-left">
          <h1
            className={`text-4xl sm:text-5xl font-bold leading-tight ${
              theme === "dark" ? "text-textPrimary" : "text-lighttextPrimary"
            }`}
          >
            <p
              className={`${
                theme === "dark"
                  ? "text-textSecondary"
                  : "text-lighttextSecondary"
              }`}
            >
              Hi, I am
            </p>
            Vashista Rama Krishna Rangoju
          </h1>

          <div
            className={`mt-4 text-2xl sm:text-3xl font-semibold flex gap-3 items-center ${
              theme === "dark" ? "text-textPrimary" : "text-lighttextPrimary"
            }`}
          >
            I am{" "}
            <span className="text-primary">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Programmer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <p
            className={`mt-6 text-lg sm:text-xl ${
              theme === "dark"
                ? "text-textSecondary"
                : "text-lighttextSecondary"
            }`}
          >
            To kickstart my career as a software developer, utilizing my strong
            programming skills and eager to learn from experienced
            professionals. My goal is to contribute effectively to projects,
            innovate, and grow as a versatile developer while adding value to
            the organization.
          </p>
        </div>

        {/* Image Section */}
        <div className="sm:mb-8 order-2 flex-1 flex justify-center items-center mt-8 sm:mt-0">
          <img
            src={`${import.meta.env.BASE_URL}/pvg.jpg`}
            alt="Vashista"
            className="w-40 sm:w-64 h-40 sm:h-64 rounded-full border-2 border-primary object-cover ml-0 lg:ml-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
