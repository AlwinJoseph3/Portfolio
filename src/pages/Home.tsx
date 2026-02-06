import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion"; // Added Framer Motion
import {
  ArrowLeft,
  ArrowRight,
  X,
  FileText,
  Download,
  MapPin,
  Cpu,
  Globe,
  Linkedin,
  Layers,
  Github,
  Inbox,
} from "lucide-react";
import { projectData } from "../data/projects";
import "swiper/css";
import PixelSandbox from "../components/InteractiveSandbox";
import TerminalFooter from "../components/Footer";
import About from "../components/About";

const Home: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const projects = Object.values(projectData);

  // --- PARALLAX LOGIC ---
  const { scrollY } = useScroll();

  // 1. Hero Parallax: Text moves fast, Sphere moves slow
  const yHeroText = useTransform(scrollY, [0, 500], [0, -250]);
  const yHeroSphere = useTransform(scrollY, [0, 500], [0, -80]);

  // 2. Bento Parallax: Cards float at different speeds
  const yBento1 = useTransform(scrollY, [1000, 2000], [0, -40]); // Location
  const yBento2 = useTransform(scrollY, [1000, 2000], [0, -80]); // AI (Highlights it)
  const yBento3 = useTransform(scrollY, [1000, 2000], [0, -20]); // Social

  // 3. Background Grid Parallax: Moves very slowly for "atmosphere"
  const yGrid = useTransform(scrollY, [0, 2000], [0, 100]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500 relative overflow-hidden">
      {/* 0. GLOBAL BACKGROUND GRID */}
      <motion.div
        style={{ y: yGrid }}
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.07]"
      >
        <div
          className="w-full h-[200%] absolute top-0 left-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax Sphere Layer */}
        <motion.div
          style={{ y: yHeroSphere }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.5} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color={"#007AFF"}
                distort={0.3} // Increased distort slightly for more "liquid" feel
                speed={3}
                roughness={0.2}
                metalness={0.5} // Increased metalness for "Tech" look
              />
            </Sphere>
          </Canvas>
        </motion.div>

        {/* Parallax Text Layer */}
        <motion.div
          style={{ y: yHeroText }}
          className="relative z-10 text-center"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white dark:text-white uppercase transition-colors">
            Alwin
            <br />
            Joseph
          </h1>
          <p className="mt-4 text-white dark:text-white font-bold tracking-widest uppercase opacity-80 mix-blend-overlay">
            Frontend Dev • UI/UX • Graphics
          </p>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="mt-12 px-8 py-4 bg-[#007AFF] border border-[#ffffff]/30 backdrop-blur-md text-white font-black rounded-full uppercase tracking-widest text-xs flex items-center gap-3 mx-auto hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
          >
            <FileText size={16} /> View Resume
          </button>
        </motion.div>
      </section>

      {/* About Section - Z-Index 10 ensures it sits above background grid */}
      <div className="relative z-10">
        <About isDark={isDark} />
      </div>

      {/* 2. TECH STACK MARQUEE */}
      <div className="py-20 overflow-hidden bg-zinc-50/80 dark:bg-[#0c0c0c]/80 border-y border-zinc-200 dark:border-zinc-800 backdrop-blur-sm relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 px-10 items-center">
              {[
                "React",
                "Flutter",
                "Illustrator",
                "TailwindCSS",
                "Three.js",
                "Figma",
                "Blender",
                "Photoshop",
                "Python",
                "C++",
                "C",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-5xl font-black text-zinc-300 dark:text-zinc-800 hover:text-[#007AFF] transition-colors uppercase cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. PROJECT CAROUSEL */}
      <section
        id="works"
        className="py-32 px-4 max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="w-24 hidden md:block"></div>
          <h2 className="text-5xl font-black dark:text-white uppercase tracking-tighter">
            Projects
          </h2>
          <div className="flex gap-4">
            <button className="swiper-prev w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white hover:bg-[#007AFF] transition-all group">
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button className="swiper-next w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white hover:bg-[#007AFF] transition-all group">
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          spaceBetween={30}
          slidesPerView={1.1}
          centeredSlides={true}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                onClick={() => navigate(`/project/${project.id}`)}
                className="group relative h-[500px] bg-zinc-50 dark:bg-zinc-900/40 rounded-[2.5rem] p-10 cursor-pointer border border-zinc-200 dark:border-zinc-800 backdrop-blur-md overflow-hidden transition-all hover:scale-[0.98]"
              >
                {project.progress === "current" && (
                  <div className="absolute top-10 left-10 px-4 py-1 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#007AFF] rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-[#007AFF] font-bold uppercase tracking-widest">
                      Active
                    </span>
                  </div>
                )}
                <div className="mt-12">
                  <h3 className="text-5xl font-black dark:text-white tracking-tighter uppercase mb-4 group-hover:text-[#007AFF] transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono dark:text-zinc-500 uppercase border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-8 text-zinc-500 dark:text-zinc-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center">
                  <span className="text-xs font-bold dark:text-zinc-600 uppercase tracking-widest">
                    View Case Study
                  </span>
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white group-hover:bg-[#007AFF] transition-all">
                    →
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 4. PROFESSIONAL BENTO PROFILE (With Floating Parallax) */}
      <section className="py-32 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Status/Location Card - Moves Slow */}
          <motion.div
            style={{ y: yBento1 }}
            className="md:col-span-2 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] p-10 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="p-4 bg-[#007AFF]/10 rounded-2xl">
                <MapPin className="text-[#007AFF]" />
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Availability
              </span>
            </div>
            <div>
              <h3 className="text-4xl font-black dark:text-white uppercase tracking-tighter">
                Kochi, India
              </h3>
            </div>
          </motion.div>

          {/* AI & Research Card - Moves Fast (Highlight) */}
          <motion.div
            style={{ y: yBento2 }}
            className="bg-[#007AFF] rounded-[2.5rem] p-10 text-white flex flex-col justify-between overflow-hidden relative group"
          >
            <Cpu size={32} className="relative z-10" />
            <div className="relative z-10">
              <h4 className="text-sm font-mono uppercase tracking-widest opacity-70">
                Research
              </h4>
              <p className="text-2xl font-black uppercase tracking-tighter mt-1">
                AI / ML <br /> Implementation
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={120} />
            </div>
          </motion.div>

          {/* Social Links Card - Moves Normal */}
          <motion.div
            style={{ y: yBento3 }}
            className="bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] p-10 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/alwin-joseph-807420221"
                target="_blank"
                className="p-3 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 dark:text-white hover:bg-[#007AFF] hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/AlwinJoseph3"
                target="_blank"
                className="p-3 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 dark:text-white hover:bg-[#007AFF] hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-3 bg-white dark:bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 dark:text-white hover:bg-[#007AFF] hover:text-white"
              >
                <Inbox size={20} />
              </a>
            </div>
            <p className="text-xs font-mono text-zinc-500 uppercase rotate-90 origin-left translate-x-4">
              Connect
            </p>
          </motion.div>

          {/* Sandbox - Static (Anchors the Grid) */}
          <div className="md:col-span-2 h-[400px] md:h-auto">
            <PixelSandbox isDark={isDark} />
          </div>

          {/* Contact CTA Card - Static */}
          <div
            className="md:col-span-2 bg-[#007AFF] rounded-[2.5rem] p-10 flex flex-col justify-between group cursor-pointer"
            onClick={() => (window.location.href = "mailto:your@email.com")}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Layers className="text-[#007AFF]" size={18} />
              </div>
            </div>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
              Designing the <br /> future of systems.
            </h3>
          </div>
        </div>
      </section>

      {/* 5. RESUME MODAL (Unchanged) */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsResumeOpen(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-950 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-300">
            {/* ... Modal Header ... */}
            <div className="p-8 border-b border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-black dark:text-white uppercase tracking-tighter">
                  Quick Look
                </h2>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Alwin Joseph
                </p>
              </div>
              <button
                onClick={() => setIsResumeOpen(false)}
                className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-white hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>
            </div>
            {/* ... Modal Content (Kept as is) ... */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16">
              <div>
                <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase mb-6">
                  Education
                </h4>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold dark:text-white">
                    B.Tech <span className="text-[#007AFF]"> • </span> Computer
                    Science & Business Systems
                  </h3>
                  <p className="text-zinc-500">
                    Rajagiri School of Engineering and Technology | 2025
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase mb-6">
                  Experience
                </h4>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-2xl font-bold dark:text-white">
                        Creative Lead
                      </h3>
                      <span className="font-mono text-xs text-[#007AFF] italic ">
                        College Department Association
                      </span>
                    </div>
                    <ul className="space-y-3 text-zinc-500 ">
                      <li>
                        • Spearheaded visual identity and logo design for
                        departmental club.
                      </li>
                      <li>
                        • Produced high-fidelity motion graphics and event
                        promos.
                      </li>
                      <li>
                        • Collaborated with team members to make events and
                        programs a success.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ... Tech Grid in Modal ... */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-12">
                <div>
                  <h4 className="text-[#007AFF] font-mono text-xs uppercase mb-4">
                    Core Tech
                  </h4>
                  <ul className="text-sm font-bold dark:text-white space-y-1">
                    <li>React / Tailwind</li>
                    <li>HTML/CSS/JS</li>
                    <li>Flutter</li>
                    <li>Python</li>
                    <li>C / C++</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#007AFF] font-mono text-xs uppercase mb-4">
                    Creative
                  </h4>
                  <ul className="text-sm font-bold dark:text-white space-y-1">
                    <li>Figma</li>
                    <li>Blender</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ... Modal Footer ... */}
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col md:flex-row gap-4 justify-between items-center">
              <p className="text-xs text-zinc-500 max-w-xs italic text-center md:text-left">
                Kochi , Kerala.
              </p>
              <a
                href="/Alwin_Joseph_Resume.pdf"
                download
                className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-bold dark:text-white flex items-center gap-2 hover:bg-[#007AFF] hover:text-white transition-all shadow-md"
              >
                <Download size={14} /> Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
      <TerminalFooter isDark={isDark} />
    </main>
  );
};

export default Home;
