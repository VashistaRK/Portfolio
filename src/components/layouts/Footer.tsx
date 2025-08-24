import { Mail, Linkedin, Github, Instagram, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-950 text-gray-300 py-10 mt-20 font-audio">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section - About */}
        <div className="max-w-sm">
          <h2 className="text-xl text-white mb-3 tracking-widest">Vashista</h2>
          <p className="text-sm font-thin leading-relaxed text-gray-400">
            Full-Stack Developer passionate about crafting scalable web
            applications, building clean UI, and deploying cloud-ready
            solutions. Exploring AI, performance optimization, and new
            technologies to push boundaries.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact & Socials */}
        <div>
          <h3 className="text-lg text-white mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-4">
            I’m open to collaborations, freelance projects, and exciting
            opportunities worldwide.
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:218r1a6752@gmail.com"
              className="hover:text-white transition"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/vashista-rama-krishna"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/VashistaRK"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/vashista_raman/"
              target="_blank"
              className="hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
          </div>
          {/* CodingProfiles */}
          <h4 className="text-lg text-white mb-2 mt-8">Coding Profiles</h4>
          <ul className="flex flex-wrap gap-3 text-gray-400 text-sm">
            <li>
              <a
                href="https://leetcode.com/u/vashista_6752/"
                target="_blank"
                className="hover:text-yellow-400 transition flex items-center gap-1"
              >
                <Code2 size={16} /> LeetCode
              </a>
            </li>
            <li>
              <a
                href="https://www.hackerrank.com/vashista_6752"
                target="_blank"
                className="hover:text-green-400 transition flex items-center gap-1"
              >
                <Code2 size={16} /> HackerRank
              </a>
            </li>
            <li>
              <a
                href="https://codeforces.com/profile/vashista_6752"
                target="_blank"
                className="hover:text-blue-400 transition flex items-center gap-1"
              >
                <Code2 size={16} /> Codeforces
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/user/vashista_6752"
                target="_blank"
                className="hover:text-emerald-400 transition flex items-center gap-1"
              >
                <Code2 size={16} /> GFG
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Vashista. All rights reserved. | Designed &
        built with ❤️
      </div>
    </footer>
  );
}
