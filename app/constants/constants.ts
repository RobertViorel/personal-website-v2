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
  develop,
  phone,
} from "@/public/assets";

export const navLinks = [
  {
    name: "About",
    dropdown: [
          { name: "Services", path: "/#services" },
          { name: "Process", path: "/#process" },
          { name: "Tech", path: "/#tech" },
      ],
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Resources",
  //   dropdown: [
  //     { name: "Components", path: "/components" },
  //   ],
  // },
  {
    name: "CV",
    path: "/cv",
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
    title: "Strategy Advice",
    description: "I provide an initial consultation where we assess your project requirements and collaboratively develop initial concepts.",
    icon: phone,
    date: "Step 1",
  },
  {
    title: "Your Personalized Cost Estimate",
    description: "Shortly after, you'll receive a personalized cost estimate tailored to your project's specific requirements. My offers are modular, giving you the flexibility to adjust the scope as needed.",
    icon: graphic,
    date: "Step 2",
  },
  {
    title: "Realizing Your Online Presence",
    description: "Once the details are agreed upon, I begin the development phase. I meticulously code your responsive website or online shop to meet your specific needs. Throughout the process, I perform quality assurance checks to ensure your online presence exceeds performance standards and your expectations.",
    icon: develop,
    date: "Step 3",
  },
  {
    title: "Deploying Your Website",
    description: "Upon project completion, we will conduct a comprehensive review of the results together, implementing any final changes as needed. The success of your website unfolds with the seamless transfer from my development server to your live server. Rest assured, I remain fully committed to supporting you throughout the entire process.",
    icon: done,
    date: "Step 4",
  },

];

export const projects = [
  {
    index: 0,
    name: "Vila Lisjak",
    description:
      "Vila Lisjak is a beautifully designed building featuring seven luxurious apartments available for short-term rentals. I developed the website for Vila Lisjak using HTML, CSS, JavaScript, and Bootstrap, ensuring a seamless and user-friendly experience for visitors.",
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    image: vilalisjak,
    source_code_link: "https://vilalisjak.com",
    linkIcon: link,
    tags: [{ name: "HTML" }, { name: "JavaScript" }, { name: "Bootstrap" }],
  },
  {
    index: 1,
    name: "Boxa Travel",
    description:
      "Boxatravel is a Web 3.0-based travel booking engine that supports crypto payments. It was a startup I founded a few years ago that unfortunately didn't have the chance to take off. Currently, the code is publicly available on GitHub and may be used for personal purposes ONLY.",
    technologies: ["PHP", "MySQL", "TailwindCSS"],
    image: boxa,
    source_code_link: "https://github.com/RobertViorel/Boxa-Travel",
    linkIcon: github,
    tags: [{ name: "PHP" }, { name: "MySQL" }, { name: "TailwindCSS" }],
  },
];
