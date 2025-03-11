import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
/*eslint-disable*/

const Navbar = ({ theme }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-[70px] flex justify-center items-center text-[1rem] font-jersey transition-all duration-0 ease-in-out ${
        theme === "dark" ? "bg-background" : "bg-lightbackground"
      }`}
    >
      <div
        className={`flex justify-between items-center gap-6 h-[55px] w-full px-6 max-w-[1200px] fixed top-0 z-10 rounded-xl ${
          theme === "dark"
            ? "bg-background text-textPrimary"
            : "bg-lightbackground text-lighttextPrimary"
        } transition-all duration-0 ease-in-out ${
          isScroll ? "mt-[0.65rem]" : "mt-0"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`text-[1.5rem] font-medium cursor-pointer no-underline ${
            theme === "dark" ? "text-textPrimary" : "text-lighttextPrimary"
          }`}
        >
          Vashi
        </Link>

        {/* Mobile Icon */}
        <button
          aria-label="Toggle Menu"
          className={`block md:hidden text-2xl ${
            theme === "dark" ? "text-textPrimary" : "text-lighttextPrimary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center list-none">
          {["about", "skills", "projects", "education"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`text-[1.25rem] font-medium cursor-pointer no-underline transition-all duration-200 ease-in-out hover:text-primary ${
                  theme === "dark"
                    ? "text-textPrimary"
                    : "text-lighttextPrimary"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            href="https://github.com/VashistaRk"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary px-4 py-1.5 rounded-full font-medium transition hover:bg-primary hover:text-textPrimary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vashista-rama-krishna/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary px-4 py-1.5 rounded-full font-medium transition hover:bg-primary hover:text-textPrimary"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`absolute top-[70px] right-0 w-full ${
              theme === "dark" ? "bg-background" : "bg-lightbackground"
            } p-6 shadow-lg z-20`}
          >
            {["about", "skills", "projects", "education"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block py-2 text-lg font-medium transition-all duration-200 ease-in-out hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="https://github.com/VashistaRk"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-4 py-2 rounded-full text-center font-medium transition hover:bg-primary hover:text-textPrimary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vashista-rama-krishna/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-4 py-2 rounded-full text-center font-medium transition hover:bg-primary hover:text-textPrimary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
