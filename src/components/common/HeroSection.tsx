import { motion } from "framer-motion";
import HeroBgAnimation from "../ui/pratic";
import { FlipWords } from "../ui/FlipWords";

const Hero = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative py-20 px-6 sm:px-4 font-poppins h-[90vh]">
      <div className="max-w-6xl mx-auto flex flex-col h-[60vh] sm:flex-row items-center justify-between">
        {/* ---------- LEFT: TEXT SECTION ---------- */}
        <motion.div
          className="flex-1 text-center sm:text-left text-zinc-700"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3748] tracking-tight">
            <span className="text-zinc-500">Hi, I am</span>
            <br />
            Vashista Rama Krishna Rangoju
          </h1>

          <p className="mt-6 flex flex-col gap-4 text-2xl sm:text-3xl font-semibold text-center sm:text-left">
            A Developer Dedicated to Crafting
          </p>

          {/* FlipWords Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center sm:justify-start"
          >
            <FlipWords
              words={words}
              className="font-black text-orange-500 text-5xl sm:text-7xl"
            />
          </motion.div>

          <p className="mt-2 font-semibold text-3xl">Web Solutions</p>
        </motion.div>

        {/* ---------- RIGHT: IMAGE + BACKGROUND ---------- */}
        <div className="flex-1 flex justify-center items-center relative  mt-20 sm:mt-0">
          {/* Background Animation */}
          <div className="absolute">
            <HeroBgAnimation />
          </div>

          {/* Profile Image */}
          <img
            src="assets/218r1a6752.jpeg"
            alt="Vashista"
            className="h-40 w-40 sm:h-60 sm:w-60 object-cover rounded-full border-2 border-orange-500 relative z-10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
