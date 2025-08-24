export interface Project {
  title: string;
  tech: string[];
  description: string[];
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    title: "Resume Builder App",
    tech: [
      "React",
      "TypeScript",
      "Context API",
      "MongoDB",
      "Node.js",
      "Redis",
      "Docker",
      "Jenkins",
      "AWS",
    ],
    description: [
      "Built a production-ready resume builder featuring custom templates, real-time editing, and seamless PDF export.",
      "Designed and deployed a secure RESTful backend with JWT & OAuth authentication, enhanced by Redis caching for performance optimization",
      "Implemented CI/CD pipelines with Jenkins, containerized applications using Docker, and deployed on AWS for scalable cloud infrastructure",
    ],
    github: "https://github.com/VashistaRK/Resume_Builder",
    live: "http://43.204.144.49:3000/",
  },
  {
    title: "Chatbot Assistant",
    tech: ["Python", "Flask", "OpenAI API", "WebSockets"],
    description: [
      "Built an AI-powered chatbot for real-time conversations",
      "Integrated natural language processing for context understanding",
      "Deployed with WebSockets for live user interactions",
    ],
    github: "",
    live: "",
  },
  {
    title: "Personal Portfolio Website",
    tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    description: [
      "Built a fully responsive personal portfolio website",
      "Implemented animations using Framer Motion",
      "Optimized for performance and SEO",
    ],
    github: "https://github.com/VashistaRK/Portfolio",
    live: "/",
  },
  {
    title: "E-Commerce Platform",
    tech: ["MERN Stack", "Redux Toolkit", "Stripe API", "Docker"],
    description: [
      "Developed a full-stack e-commerce platform",
      "Integrated secure payment system with Stripe",
      "Implemented product filtering, search, and cart management",
    ],
    github: "",
    live: "",
  },
  {
    title: "Banking Management System",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    description: [
      "Designed a web-based banking management system",
      "Implemented login, signup, and account overview modules",
      "Secured transactions and session handling",
    ],
    github: "",
    live: "",
  },
];
