import {
  done,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  github,
  tick,
  link,
  boxa,
  graphic,
  vilalisjak,
} from "@/public/assets";

export const navLinks = [
  {
    name: "About",
    dropdown: [
      { name: "Experience", path: "/about/experience" },
      { name: "Tech", path: "/about/tech" },
      { name: "CV", path: "/cv" },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Components", path: "/components" },
      { name: "API Reference", path: "/resources/api" },
      { name: "Community", path: "/contact" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const TECHNOLOGIES = [
  { name: "HTML 5", icon: "/assets/tech/html.png" },
  { name: "CSS 3", icon: "/assets/tech/css.png" },
  { name: "JavaScript", icon: "/assets/tech/javascript.png" },
  { name: "TypeScript", icon: "/assets/tech/typescript.png" },
  { name: "React JS", icon: "/assets/tech/reactjs.png" },
  { name: "Redux Toolkit", icon: "/assets/tech/redux.png" },
  { name: "Tailwind CSS", icon: "/assets/tech/tailwind.png" },
  { name: "Node JS", icon: "/assets/tech/nodejs.png" },
  { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
  { name: "Three JS", icon: "/assets/tech/threejs.svg" },
  { name: "git", icon: "/assets/tech/git.png" },
  { name: "figma", icon: "/assets/tech/figma.png" },
  { name: "docker", icon: "/assets/tech/docker.png" },
];

export const steps = [
  {
    title: "Free Strategy Advice",
    description:
      "I provide a personal initial consultation via phone, Zoom or Skype, during which we assess your project requirements and collaboratively develop initial concepts.",
    icon: "/assets/develop.png",
    date: "2025",
  },
  {
    title: "Your Personalized Cost Estimate",
    description:
      "Within 3 working days, you’ll receive an individual cost estimate tailored to your project’s specific requirements. My offers are modular, providing you the flexibility to adjust the project’s scope according to your needs.",
    icon: "/assets/develop.png",
    date: "2024",
  },
  {
    title: "Realizing Your Online Presence",
    description:
      "Once the website design is finalized, I begin the development phase. I meticulously code your responsive website or online shop to meet your specific needs. Throughout the process, I perform quality assurance checks to ensure your online presence exceeds performance standards and your expectations.",
    icon: "/assets/develop.png",
    date: "2023",
  },
  {
    title: "Deploying Your Website",
    description:
      "Upon the completion of the project, we will conduct a comprehensive review of the results and provide you with detailed instructions on how to maintain and manage your website.",
    icon: "/assets/develop.png",
    date: "2022",
  },
];

export const projects = [
  {
    index: 0,
    name: "Boxa Travel",
    description:
      "Boxatravel is a Web 3.0-based travel booking engine that supports crypto payments. This app was built by a full team of developers. It was a startup I founded a few years ago that unfortunately didn't have the chance to take off. My involvement was solely in the front-end development. Currently, the code is publicly available on GitHub and may be used for personal purposes ONLY.",
    technologies: ["React", "TypeScript"],
    image: boxa, // Use imported image here
    source_code_link: "https://github.com/example/project",
    linkIcon: github, // Optionally use another imported image
    tags: [
      { name: "PHP" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
      { name: "Next.js" },
    ],
  },
  {
    index: 1,
    name: "Vila Lisjak",
    description:
      "Vila Lisjak is a beautifully designed building featuring seven luxurious apartments available for short-term rentals. I developed the website for Vila Lisjak using HTML, CSS, JavaScript, and Bootstrap, ensuring a seamless and user-friendly experience for ",
    technologies: ["HTML", "TypeScript"],
    image: vilalisjak, // Example for external path
    source_code_link: "https://github.com/example/project",
    linkIcon: link, // Optionally use another imported image
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "TypeScript", color: "text-green-500" },
    ],
  },
  {
    index: 2,
    name: "Vila Lisjak",
    description:
      "Vila Lisjak is a beautifully designed building featuring seven luxurious apartments available for short-term rentals. I developed the website for Vila Lisjak using HTML, CSS, JavaScript, and Bootstrap, ensuring a seamless and user-friendly experience for ",
    technologies: ["HTML", "TypeScript"],
    image: vilalisjak, // Example for external path
    source_code_link: "https://github.com/example/project",
    linkIcon: link, // Optionally use another imported image
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "TypeScript", color: "text-green-500" },
    ],
  },
];
