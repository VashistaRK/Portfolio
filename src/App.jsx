import Nav from "./components/NavBar/Nav1";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";

const App = () => {
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
