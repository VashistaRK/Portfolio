import Nav from "./components/NavBar/Nav1";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const App = () => {
  const [theme, setTheme] = useState("dark");

  // Theme toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // Disable zoom via keyboard, mouse wheel, or touch gestures
    const disableZoom = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=")
      ) {
        e.preventDefault();
      }
      if (e.ctrlKey || e.touches?.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", disableZoom);
    document.addEventListener("wheel", disableZoom, { passive: false });
    document.addEventListener("touchmove", disableZoom, { passive: false });

    return () => {
      document.removeEventListener("keydown", disableZoom);
      document.removeEventListener("wheel", disableZoom);
      document.removeEventListener("touchmove", disableZoom);
    };
  }, []);

  return (
    <div className={` w-full h-full overflow-x-hidden`}>
      <Nav theme={theme} />
      <main
        className={`w-full h-full bg-gradient-to-b ${
          theme === "dark"
            ? "from-gradientFrom to-gradientTo"
            : "from-lightgradientFrom to-lightgradientTo"
        }`}
      >
        <button
          onClick={toggleTheme}
          className="bg-primary rounded-full p-2 transition-all flex items-center justify-center absolute top-18 right-4 2xl:top-4"
        >
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6 text-yellow-200" /> // Sun icon for dark mode
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" /> // Moon icon for light mode
          )}
        </button>
        <Hero theme={theme} />
        <div className={`w-full `}>
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Education theme={theme} />
        </div>
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
