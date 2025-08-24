import About from "./components/common/About";
import Contact from "./components/common/Contact";
import Footer from "./components/layouts/Footer";
// import Experience from "./components/common/Experience";
import HeroSection from "./components/common/HeroSection";
import ProjectsShowcase from "./components/common/Projects";
import Skills from "./components/common/skills";
import Header from "./components/layouts/Header";

const App = () => {
  return (
    <div className="w-auto bg-gradient-to-b overflow-hidden from-[#FFF8F0] to-[#FFEEDD]">
      <Header />
      <aside className="font-NEDAR">
        <HeroSection />
        <About />
        <ProjectsShowcase />
        <Skills />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </aside>
    </div>
  );
};

export default App;
