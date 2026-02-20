export interface Skill {
  name: string;
  icon: string;
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
      { name: "React.js", icon: "/icons/react.svg" },
      {
        name: "Tailwind",
        icon: "/icons/tailwindcss.svg",
      },
      {
        name: "Three.js",
        icon: "/icons/threedotjs_white.svg",
      },
    ],
  },
  {
    id: "02",
    label: "Programming Languages",
    skills: [
      { name: "C++", icon: "/icons/cplusplus.svg" },
      { name: "C", icon: "/icons/c.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
      },
      { name: "HTML5", icon: "/icons/html5.svg" },
      { name: "CSS3", icon: "icons/css3.svg" },
    ],
  },
  {
    id: "03",
    label: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", icon: "/icons/nodedotjs.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "Netlify", icon: "/icons/netlify.svg" },
    ],
  },
  {
    id: "04",
    label: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "Yolov5", icon: "/icons/yolo.svg" },
      { name: "Peagsus", icon: "/icons/google.svg" },
    ],
  },
  {
    id: "05",
    label: "Mobile Development",
    skills: [{ name: "Flutter", icon: "/icons/flutter.svg" }],
  },
  {
    id: "06",
    label: "Version Control & Developer Utilities",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github_white.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
    ],
  },
  {
    id: "07",
    label: "Design & 3D Modeling",
    skills: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Blender", icon: "/icons/blender.svg" },
      {
        name: "Illustrator",
        icon: "icons/ill.svg",
      },
      {
        name: "Photoshop",
        icon: "icons/ps.svg",
      },
    ],
  },
];
