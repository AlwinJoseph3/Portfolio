export interface Project {
  id: string;
  category?: string;
  name: string;
  description: string;
  link: string;
  story?: string;
  mockupimage: string;
  colortheme: string;
  colors: string[];
  fontname?: string;
  font?: string;
  fonttheme?: string;
  techStack: string[];
  screenshots: string[];
}

export const projectData: Record<string, Project> = {
  "1": {
    id: "motobuddy",
    category: "Mobile App",
    name: "MotoBuddy",
    description:
      "A community-driven expedition platform for motorcyclists to discover destinations and routes, join group rides, and track milestones.",
    link: "https://github.com/AlwinJoseph3/MotoBuddy",
    story:
      "Motobuddy was born from a passion for motorcycling and a desire to create a vibrant community platform. The idea sparked during a long solo ride, where I realized how much riders crave connection and shared experiences. I wanted to build an app that not only helps motorcyclists discover new routes and destinations but also fosters camaraderie through group rides. The journey of developing Motobuddy has been an exhilarating adventure in itself, blending my love for design, technology, and the open road.",
    mockupimage: "/assets/Motobuddy/mb.png",
    colortheme: "Rugged deep charcoal and vibrant safety orange.",
    colors: ["#F15A24", "#FFFFFF", "#1E1E1E", "#141414"],
    fontname: "Roboto",
    font: "'Roboto', sans-serif",
    fonttheme:
      "Bold, modern sans-serif with a slightly condensed style for a rugged yet approachable feel.",
    techStack: ["Flutter", "Figma"],
    screenshots: [
      "/assets/Motobuddy/home.png",
      "/assets/Motobuddy/overview.png",
      "/assets/Motobuddy/iti.png",
      "/assets/Motobuddy/addride.png",
      "/assets/Motobuddy/advice.png",
      "/assets/Motobuddy/addadvice.png",
      "/assets/Motobuddy/confirm.png",
      "/assets/Motobuddy/profile.png",
    ],
  },
  "2": {
    id: "smart health management system",
    category: "Mobile App",
    name: "Smart Health Management System",
    description:
      "An integrated healthcare ecosystem utilizing Pegasus and YOLOv5 models to automate medical data summarization and scan analysis, synced with real-time vitals from wearable patch.",
    link: "https://github.com/AlwinJoseph3/shms_fixed",
    story:
      "SHMS was conceived from a desire to revolutionize healthcare through technology. This was our final year project, and we wanted to create something that could have a real impact on people's lives. The idea was to build an integrated healthcare ecosystem that not only automates medical data summarization but also analyzes medical scans using advanced models like Pegasus and YOLOv5. We also wanted to incorporate real-time vitals monitoring through a wearable patch, creating a comprehensive solution for patients. The development of SHMS has been an incredible journey, blending cutting-edge technology with a passion for improving healthcare outcomes through AI.",
    techStack: ["Python", "Yolov5", "Pegasus"],
    mockupimage: "/assets/SHMS/shms.png",
    colortheme:
      "Clean, clinical 'Light Mode' interface with calming blue accents.",
    colors: ["#2196f3", "#ffffff"],
    fontname: "Inter",
    font: "Inter",
    fonttheme:
      "Modern, highly legible sans-serif with a neutral tone to ensure clarity and professionalism in medical contexts.",
    screenshots: [
      "/assets/SHMS/home.png",
      "/assets/SHMS/report.png",
      "/assets/SHMS/type.png",
    ],
  },
  "3": {
    id: "homechef",
    category: "Mobile App",
    name: "HomeChef",
    description:
      "A marketplace for home cooks where they can list and sell their fresh, homemade meals at affordable rates. ",
    link: "https://github.com/AlwinJoseph3/homechef",
    story:
      "HomeChef was born from a passion for food and community. This was our mini project. We wanted to create a platform that enables homecooks to earn from their culinary skills. The idea emerged from the realization that many students and working professionals find it hard to cook or find affordable, home-cooked meals. Building HomeChef was an exciting journey, blending my love for design and technology with a desire to foster community through shared culinary experiences.",
    mockupimage: "/assets/HomeChef/homechef.png",
    colortheme:
      "Soft, inviting aesthetic using a deep purple and white for an approachable feel.",
    colors: ["#673Ab7", "#FFFFFF", "#000000"],
    fontname: "Cabin",
    font: "'Cabin' ,sans-serif",
    fonttheme:
      "Friendly, rounded sans-serif with a humanist touch to evoke warmth and approachability in the culinary community.",
    techStack: ["Flutter", "Firebase"],
    screenshots: [
      "/assets/HomeChef/home.png",
      "/assets/HomeChef/listing.png",
      "/assets/HomeChef/foods.png",
      "/assets/HomeChef/plate.png",
    ],
  },
  // "4": {
  //   id: "4",
  //   progress: "100%",
  //   colors: ["#F15A24", "#FFFFFF", "#1E1E1E", "#141414"],
  //   name: "Portfolio 3D",
  //   description:
  //     "An interactive 3D portfolio showcasing projects with immersive WebGL experiences and smooth animations.",
  //   colortheme:
  //     "Dark theme with dynamic 3D elements, focus on visual storytelling and seamless transitions between sections.",
  //   techStack: ["React", "Three.js", "Blender", "TypeScript", "Tailwind"],
  //   mockupimage: "/models/Phone.glb",
  //   screenshots: ["/ss10.jpg", "/ss11.jpg", "/ss12.jpg"],
  //   link: "https://alwinjoseph.dev",
  // },
};
