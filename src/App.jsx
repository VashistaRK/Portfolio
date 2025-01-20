import Nav from "./components/NavBar/Nav1";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Prevent zoom via keyboard
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=")
      ) {
        e.preventDefault();
      }
    };

    // Prevent zoom via mouse wheel (Ctrl + scroll)
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Prevent zoom via touch (pinch gestures)
    const handleTouchMove = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Cleanup event listeners
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  return (
    <div className="bg-darkbg w-full h-full overflow-x-hidden">
      {/* <Navbar /> */}
      <Nav />
      <main className="w-full h-full bg-gradient-to-b from-[#0D1117] to-[#1C2233]">
        <Hero />
        {/* bg-gradient-to-r from-[rgba(204,0,187,0.15)] via-transparent to-[rgba(0,70,209,0.15)] */}
        <div className=" w-full text-textPrimary">
          <Skills />
          <Projects />
          <Education />
        </div>
      </main>
      <Footer />
      {/* Other components */}
    </div>
  );
};

export default App;
