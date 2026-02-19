export interface Project {
  id: string;
  category?: string;
  name: string;
  description: string;
  link: string;
  story?: string;
  techStack: string[];
  // Frontend/Visual Fields (Optional)
  mockupimage?: string;
  colortheme?: string;
  colors?: string[];
  fontname?: string;
  font?: string;
  fonttheme?: string;
  screenshots?: string[];
  // Backend/System Fields (Optional)
  features?: string[];
  architecture?: string;
  stats?: Record<string, string>;
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
  "4": {
    id: "elis",
    category: "AI Developer Tool",
    name: "ELIS",
    description:
      "A Socratic AI Tutor that helps developers find logic gaps, not just code. It uses a diagnostic approach to guide you through 'stuck points'.",
    link: "https://github.com/AlwinJoseph3/ELIS",
    story:
      "ELIS (Explain Like I'm Stuck) was born from the frustration that standard AI coding assistants often spoon-feed answers, hindering true learning. I wanted to create a tool that acts as a senior mentor, using the Socratic method to force developers to articulate their problems and find their own solutions. Built with a 'Cyber-Minimalist' aesthetic, it provides a distraction-free environment for deep debugging.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Vite"],
    features: [
      "Socratic Diagnostic Engine",
      "Stuck Point Analysis",
      "Metaphor Mode (Explain via analogies)",
      "Local-First Privacy (BYOK)",
      "Cyber-Minimalist UI",
    ],
    architecture: "Client-side React application integrating directly with Google Gemini API. Zero backend database; all state is persisted locally via browser storage.",
    stats: {
      "Privacy": "100% Local",
      "Latency": "Real-time",
    },
    mockupimage: "/assets/ELIS/elis-mockup.png",
    colortheme: "Deep Space Zinc & Cyan for focus.",
    colors: ["#06b6d4", "#18181b", "#000000"],
    fontname: "JetBrains Mono",
    font: "'JetBrains Mono', monospace",
    fonttheme: "Monospace typography for a raw, technical developer experience.",
    screenshots: [
        "/assets/ELIS/ss1.png",
        "/assets/ELIS/ss2.png"
    ]
  },
};
