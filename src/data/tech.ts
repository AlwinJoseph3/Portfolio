// src/data/tech.ts

export interface Skill {
  name: string;
  icon: string; // We will use CDN URLs for lightweight SVGs
}

export interface TechCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const techCategories: TechCategory[] = [
  {
    id: "01",
    label: "Web and Frontend Development",
    skills: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react" },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "Three.js",
        icon: "https://cdn.simpleicons.org/threedotjs/white",
      },
      // { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    ],
  },
  {
    id: "02",
    label: "Programming Languages",
    skills: [
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
      { name: "C", icon: "https://cdn.simpleicons.org/c" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
      },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", icon: "/css3.png" },
    ],
  },
  {
    id: "03",
    label: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },
    ],
  },
  {
    id: "04",
    label: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "Yolov5", icon: "https://cdn.simpleicons.org/yolo" },
      { name: "Peagsus", icon: "https://cdn.simpleicons.org/google" },
    ],
  },
  {
    id: "05",
    label: "Mobile Development",
    skills: [{ name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" }],
  },
  {
    id: "06",
    label: "Version Control & Developer Utilities",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    ],
  },
  {
    id: "07",
    label: "Design & 3D Modeling",
    skills: [
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { name: "Blender", icon: "https://cdn.simpleicons.org/blender" },
      {
        name: "Illustrator",
        icon: "/ill.png",
      },
      {
        name: "Photoshop",
        icon: "/ps.png",
      },
    ],
  },
];
