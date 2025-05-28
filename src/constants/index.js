import {
  python,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  blog,
  ecommerce,
  net,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  django,
  express,
  postgre,
  database,
  mongodb,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "Django", icon: django},
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
  { title: "Express JS", icon: express },
  { title: "Mysql", icon: mysql }, 
  { title: "Mongodb", icon: mongodb},
  { title: "PostgreSQL", icon: postgre},
  

];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "BACKEND INTERN",
    company_name: "OPEN SOURCE ",
    icon: eduskill,
    iconBg: "#161329",
    date: "APRIL 2025 - MAY 2025",
    points: [
      "Contributed to an open-source web application using Express.js, implementing RESTful APIs and improving server-side logic.",

      "collaborated with the community to fix bugs, optimize performance, and enhance backend features through code reviews and pull requests."
    ],
  },

  {
    title: "ROBOTIC ENGINEER TRAINEE",
    company_name: "WHEELS INDIA LIMITED,CHENNAI ",
    icon: eduskill,
    iconBg: "#161329",
    date: "SEP 2022 - NOV 2024",
    points: [
     "Programmed and optimized KUKA industrial robots for automated manufacturing tasks, ensuring precision and cycle time efficiency.",

      "Integrated robots with PLCs and HMIs, performed troubleshooting, and maintained safety and operational standards on the shop floor."
    ],
  },

];

export const projects = [
  {
    name: "ECOMMERCE WEB APP",
    description:
      "A full-featured eCommerce web app for browsing, purchasing products, and managing orders with secure authentication and payment integration",

    tags: [
     
      { name: "React js", color: "pink-text-gradient" },
      { name: "Express js", color: "green-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "#",
  },
  {
    name: "AI BLOG GENERATOR",
    description:
      "Integrated OpenAI’s API for real-time blog content creation and added features for blog preview, editing, and exporting as PDF or Markdown.",
    tags: [
      { name: "REACT JS", color: "blue-text-gradient" },
      { name: "DJANGO", color: "green-text-gradient" },
      { name: "POSTGRESQL", color: "pink-text-gradient" },
    ],
    image:blog,
    source_code_link: "#",
  },

  {
    name: "NETFLIX CLONE",
    description:
      " Built using React.js, Tailwind CSS, and Axios to provide a sleek, responsive UI that mimics the Netflix layout.Powered by Firebase for authentication .",
    tags: [
      { name: "REACT JS", color: "blue-text-gradient" },
      { name: "FIREBASE", color: "green-text-gradient" },
      { name: "POSTGRESQL", color: "pink-text-gradient" },
    ],
    image:net,
    source_code_link: "#",
  },

];
