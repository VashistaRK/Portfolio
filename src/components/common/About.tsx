import { Globe } from "../ui/globe";
import CopyEmailButton from "../ui/CopyEmailButton";
import { Frameworks } from "../ui/Frameworks";

const About = () => {
  return (
    <section className="sm:px-10 px-5 lg:px-15 min-h-screen mt-10" id="about">
      <h2 className="font-bold text-3xl md:text-4xl">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[6rem] md:grid-rows-4 mt-12">
        {/* Grid 1 */}
        <div className="bg-[#E6D6C7] flex items-end p-6 rounded-2xl row-span-3 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <img
            src="assets/Coding.png"
            alt="Coding POV"
            className="absolute md:top-20 left-16 md:left-auto md:right-12 scale-50 md:scale-120 opacity-50 md:opacity-100"
          />
          <div className="z-10">
            <p className="mt-2 mb-2 text-xl">Hi, I'm Vashista</p>
            <p className="text-netural-900 md:text-neutral-600 text-sm md:text-base text-pretty">
              I’m a passionate Full-Stack Developer skilled in building clean,
              responsive interfaces and scalable backends, with interests in AI,
              cloud deployment, and performance optimization.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}

        <div className="p-6 rounded-2xl row-span-2 md:col-span-3 md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-xl">Tech Stack</p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute sm:inset-y-0 sm:opacity-100 opacity-80 -inset-y-2/12 inset-x-0 w-full h-full">
            <Frameworks />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="p-6 bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] rounded-2xl row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-xl text-neutral-200">Time Zone</p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty">
              I'm based in Hyd and excited to collaborate on remote projects
              across the globe.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 5 */}
        <div className="p-6 bg-gradient-to-b from-storm to-indigo rounded-2xl row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <img
            src="assets/Hey.png"
            alt="hey"
            className="absolute h-3/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-8 sm:-translate-0 opacity-20 sm:left-12 sm:h-4/5"
          />
          <div className="flex flex-col items-center justify-center row-span-1 md:col-span-2 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 size-full">
            <p className="text-center mt-2 mb-2 text-xl">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
