export interface Experience {
  role: string;
  company: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  titles: string[];
  location: string;
  education: Education;
  experience: Experience;
  skills: {
    tech: string[];
    creative: string[];
  };
}

export const profileData: Profile = {
  firstName: "Alwin",
  lastName: "Joseph",
  titles: ["Frontend Dev", "UI/UX", "Graphics"],
  location: "Kochi, Kerala.",
  education: {
    degree: "B.Tech • Computer Science & Business Systems", // Using string with bullet for simplicity in display
    institution: "Rajagiri School of Engineering and Technology",
    year: "2025",
  },
  experience: {
    role: "Creative Lead",
    company: "College Department Association",
    points: [
      "Took charge of the entire visual identity, designing logos and branding.",
      "Made high-fidelity motion graphics and event promos.",
      "Worked with the team to ensure our events ran smoothly.",
    ],
  },
  skills: {
    tech: ["React / Tailwind", "HTML/CSS/JS", "C / C++", "Flutter", "Python"],
    creative: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Blender"],
  },
};
