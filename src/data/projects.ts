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
    id: "1",
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
    id: "2",
    category: "Mobile App",
    name: "Smart Health Management System",
    description:
      "An integrated healthcare ecosystem utilizing Pegasus and YOLOv5 models to automate medical data summarization and scan analysis, synced with real-time wearable vitals.",
    link: "https://github.com/AlwinJoseph3/shms_fixed",
    story:
      "The Smart Health Management System (SHMS) was conceived from a desire to revolutionize healthcare through technology. The idea came about during a hospital visit, where I observed the challenges medical professionals face in managing patient data and providing timely care. I envisioned an integrated ecosystem that could automate medical data summarization and scan analysis, while also syncing with real-time wearable vitals. The development of SHMS has been a rewarding journey, combining my passion for healthcare innovation with cutting-edge AI technologies to create a tool that can truly make a difference in patient care.",
    mockupimage: "/assets/SHMS/mockup.png",
    colortheme:
      "Clean, clinical 'Light Mode' interface with calming teal accents, focusing on data visualization and accessibility for medical professionals.",
    colors: ["#2196f3", "#ffffff"],
    fontname: "Inter",
    font: "Inter",
    fonttheme:
      "Modern, highly legible sans-serif with a neutral tone to ensure clarity and professionalism in medical contexts.",
    techStack: ["Python", "PyTorch", "TensorFlow", "Flutter"],
    screenshots: [
      "/assets/SHMS/home.png",
      "/assets/SHMS/report.png",
      "/assets/SHMS/type.png",
    ],
  },
  "3": {
    id: "3",
    category: "Mobile App",
    name: "HomeChef",
    description:
      "A hyperlocal marketplace connecting skilled home cooks with neighbors, designed to foster community through shared culinary experiences.",
    link: "https://github.com/AlwinJoseph3/homechef",
    story:
      "HomeChef was born from a passion for food and community. The idea sparked during a neighborhood potluck, where I realized how many talented home cooks were eager to share their culinary creations. I wanted to create a platform that not only connects these skilled cooks with their neighbors but also fosters a sense of community through shared meals. The development of HomeChef has been an exciting journey, blending my love for design, technology, and food to create an app that brings people together through the joy of cooking and eating.",
    mockupimage: "/assets/HomeChef/mockup.png",
    colortheme:
      "Soft, inviting aesthetic using a deep purple and white for an approachable feel.",
    colors: ["#673Ab7", "#FFFFFF", "#000000"],
    fontname: "Cabin",
    font: "'Cabin' ,sans-serif",
    fonttheme:
      "Friendly, rounded sans-serif with a humanist touch to evoke warmth and approachability in the culinary community.",
    techStack: ["Flutter", "Dart", "Firebase", "Adobe Illustrator"],
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
