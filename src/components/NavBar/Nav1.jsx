import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-background h-[70px] flex justify-center items-center text-[1rem] transition-all duration-800 ease-in-out font-jersey">
      <div
        className={`bg-background flex justify-between rounded-xl items-center gap-6 h-[55px] w-full px-6 max-w-[1200px] fixed top-0 z-10 text-textPrimary transition-all duration-300 ease-in-out ${
          isScroll ? "mt-[0.65rem]" : "mt-0"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-textPrimary text-[1.5rem] font-medium w-3/4 px-[6px] flex items-center justify-self-[flex-start] cursor-pointer no-underline md:p-0"
        >
          Vashi
        </Link>

        {/* Mobile Icon */}
        <div
          className="block vs:hidden cursor-pointer position-absolute text-2xl text-textPrimary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex justify-center gap-8 items-center list-none">
          <li>
            <a
              href="#about"
              className="text-textPrimary text-[1.25rem] font-medium cursor-pointer no-underline transition-all duration-200 ease-in-out hover:text-primary"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-textPrimary text-[1.25rem] font-medium cursor-pointer no-underline transition-all duration-200 ease-in-out hover:text-primary"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-textPrimary text-[1.25rem] font-medium cursor-pointer no-underline transition-all duration-200 ease-in-out hover:text-primary"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-textPrimary text-[1.25rem] font-medium cursor-pointer no-underline transition-all duration-200 ease-in-out hover:text-primary"
            >
              Education
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex justify-end items-center w-4/5 h-full px-1.5">
          <a
            href="https://github.com/VashistaRk"
            target="_blank"
            className="max-sm:text-[0.8rem] border-2 border-primary text-primary bg-transparent rounded-full flex justify-center items-center px-4 text-lg font-medium cursor-pointer h-[70%] mr-2 hover:bg-primary hover:text-textPrimary"
          >
            Github
          </a>
          <a
            href="https://Linkedin.com/in/vashista-rama-krishna"
            target="_blank"
            className="max-sm:text-[0.8rem] border-2 border-primary text-primary bg-transparent rounded-full flex justify-center items-center px-4 text-lg font-medium cursor-pointer h-[70%] mr-2 hover:bg-primary hover:text-textPrimary"
          >
            Linkedin
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="vs:hidden absolute top-20 right-0 w-full bg-white p-6 shadow-md">
            <a
              href="#about"
              onClick={() => setIsOpen(!isOpen)}
              className="block text-primary py-2 hover:text-primaryDark transition"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(!isOpen)}
              className="block text-primary py-2 hover:text-primaryDark transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(!isOpen)}
              className="block text-primary py-2 hover:text-primaryDark transition"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={() => setIsOpen(!isOpen)}
              className="block text-primary py-2 hover:text-primaryDark transition"
            >
              Education
            </a>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-3 mt-4">
              <a
                href="https://github.com/VashistaRk"
                target="_blank"
                className="border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
              >
                Github
              </a>
              <a
                href="https://www.Linkedin.com/in/vashista-rama-krishna/"
                target="_blank"
                className="border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
              >
                Linkedin
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
