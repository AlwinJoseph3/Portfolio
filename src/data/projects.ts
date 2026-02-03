export interface Project {
  id: string;
  progress: string;
  name: string;
  description: string;
  uiStrategy: string;
  colors: string[];
  techStack: string[];
  mockupimage: string;
  screenshots: string[];
  link: string;
}

export const projectData: Record<string, Project> = {
  "1": {
    id: "1",
    progress: "Current",
    name: "MotoBuddy",
    description:
      "A community-driven expedition platform for motorcyclists to discover high-altitude routes, join group rides, and track adventure milestones.",
    uiStrategy:
      "Rugged high-contrast dark mode using deep charcoal and vibrant safety orange, optimized for outdoor readability.",
    techStack: ["Flutter", "Dart", "Figma", "Firebase"],
    mockupimage: "/models/mb.png",
    colors: ["#F15A24", "#FFFFFF", "#1E1E1E", "#141414"],
    screenshots: [
      "/assets/Motobuddy/homepage.png",
      "/assets/Motobuddy/addride.png",
      "/assets/Motobuddy/profile.png",
      "/assets/Motobuddy/detail.png",
      "/assets/Motobuddy/confirm.png",
    ],
    link: "https://www.figma.com/design/bMz4RoEI4VaAYcWftrZ6WT/Motobuddy",
  },
  "2": {
    id: "2",
    progress: "Completed",
    name: "Smart Health Management System",
    description:
      "An integrated healthcare ecosystem utilizing Pegasus and YOLOv5 models to automate medical data summarization and scan analysis, synced with real-time wearable vitals.",
    uiStrategy:
      "Clean, clinical 'Light Mode' interface with calming teal accents, focusing on data visualization and accessibility for medical professionals.",
    techStack: ["Python", "PyTorch", "TensorFlow", "Flutter"],
    mockupimage: "/assets/SHMS/mockup.png",
    colors: ["#2196f3", "#ffffff"],
    screenshots: [
      "/assets/SHMS/Login page.PNG",
      "/assets/SHMS/home.PNG",
      "/assets/SHMS/Report page.PNG",
      "/assets/SHMS/Type.PNG",
    ],
    link: "https://github.com/AlwinJoseph3/shms_fixed",
  },
  "3": {
    id: "3",
    progress: "Completed",
    name: "HomeChef",
    colors: ["#F15A24", "FFFFFF", "1E1E1E", "141414"],
    description:
      "A hyperlocal marketplace connecting skilled home cooks with neighbors, designed to foster community through shared culinary experiences.",
    uiStrategy:
      "Soft, inviting aesthetic using a deep purple (#654A9E) and lavender palette, paired with Franklin Gothic Medium for a modern yet approachable feel.",
    techStack: ["Flutter", "Dart", "Firebase", "Adobe Illustrator"],
    mockupimage: "/assets/HomeChef/mockup.png",
    screenshots: [
      "/assets/HomeChef/home.png",
      "/assets/HomeChef/homemaker.png",
      "/assets/HomeChef/plate.png",
    ],
    link: "sdsdf",
  },
  // "4": {
  //   id: "4",
  //   progress: "100%",
  //   colors: ["#F15A24", "#FFFFFF", "#1E1E1E", "#141414"],
  //   name: "Portfolio 3D",
  //   description:
  //     "An interactive 3D portfolio showcasing projects with immersive WebGL experiences and smooth animations.",
  //   uiStrategy:
  //     "Dark theme with dynamic 3D elements, focus on visual storytelling and seamless transitions between sections.",
  //   techStack: ["React", "Three.js", "Blender", "TypeScript", "Tailwind"],
  //   mockupimage: "/models/Phone.glb",
  //   screenshots: ["/ss10.jpg", "/ss11.jpg", "/ss12.jpg"],
  //   link: "https://alwinjoseph.dev",
  // },
};
