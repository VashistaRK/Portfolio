// import React from "react";

// const Footer = () => {
//   return (
//     <div className="w-full py-8 flex justify-center bg-gradient-to-r from-[rgba(0,102,255,0.05)] via-transparent to-[rgba(150,0,225,0.05)]">
//       <div className="w-full max-w-7xl flex flex-col gap-4 items-center p-4 text-[#F2F3F4]">
//         <nav className="font-semibold text-xl text-[#F2F3F4]">
//           Vashista Rama Krishna Rangoju
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="w-full py-8 flex justify-center shadow-t-lg border-t bg-[rgba(0,0,0,0.9)] text-white">
      <footer className="w-full max-w-[1200px] flex flex-col gap-4 items-center p-4 text-text_primary">
        {/* Logo */}
        <h1 className="font-semibold text-[20px] text-primary">
          Vashista Rama Krishna Rangoju
        </h1>

        {/* Navigation Links */}
        <nav className="w-full max-w-[800px] mt-2 flex flex-row gap-3 justify-center text-text_primary text-[1rem] flex-wrap md:gap-8 md:text-[1.2rem] md:justify-center">
          <a
            href="#about"
            className="no-underline transition-all duration-200 ease-in-out hover:text-primary"
          >
            About
          </a>
          <a
            href="#skills"
            className="no-underline transition-all duration-200 ease-in-out hover:text-primary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="no-underline transition-all duration-200 ease-in-out hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#education"
            className="no-underline transition-all duration-200 ease-in-out hover:text-primary"
          >
            Education
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex mt-4">
          <a
            href={"https://www.facebook.com/vashista.rama.krishna.rangoju"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4 text-[1.5rem] text-text_primary transition-all duration-200 ease-in-out hover:text-primary"
          >
            <FacebookIcon />
          </a>
          <a
            href={"https://www.instagram.com/vashista_raman/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4 text-[1.5rem] text-text_primary transition-all duration-200 ease-in-out hover:text-primary"
          >
            <TwitterIcon />
          </a>
          <a
            href={"https://www.linkedin.com/in/vashista-rama-krishna/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4 text-[1.5rem] text-text_primary transition-all duration-200 ease-in-out hover:text-primary"
          >
            <LinkedInIcon />
          </a>
          <a
            href={"https://www.instagram.com/vashista_raman/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4 text-[1.5rem] text-text_primary transition-all duration-200 ease-in-out hover:text-primary"
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-[0.9rem] text-soft2 text-center">
          &copy; {new Date().getFullYear()} Vashista Rama Krishna Rangoju. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
