import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, X, FileText, Download } from "lucide-react";
import Contact from "../components/Contact";
import { projectData } from "../data/projects";
import "swiper/css";

const Home: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const projects = Object.values(projectData);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color={isDark ? "#007AFF" : "#45a2ff"} // iOS Blue Primary
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.1}
              />
            </Sphere>
          </Canvas>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
            Alwin
            <br />
            Joseph
          </h1>
          <p className="mt-4 text-black dark:text-white font-bold tracking-widest uppercase opacity-80">
            Frontend Dev • UI/UX • Graphics
          </p>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="mt-12 px-8 py-4 bg-[#007AFF] border border-[#ffffff] text-white font-black rounded-full uppercase tracking-widest text-xs flex items-center gap-3 mx-auto hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
          >
            <FileText size={16} /> View Resume
          </button>
        </div>
      </section>

      {/* 2. TECH STACK MARQUEE */}
      <div className="py-20 overflow-hidden bg-zinc-50 dark:bg-[#0c0c0c] border-y border-zinc-200 dark:border-zinc-800">
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
      <section id="works" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="w-24 hidden md:block"></div>
          <h2 className="text-5xl font-black dark:text-white uppercase tracking-tighter text-center">
            Projects
          </h2>
          <div className="flex gap-4">
            <button className="swiper-prev w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white hover:bg-[#007AFF] hover:border-[#007AFF] transition-all group">
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button className="swiper-next w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white hover:bg-[#007AFF] hover:border-[#007AFF] transition-all group">
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

      {/* 4. RESUME MODAL */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsResumeOpen(false)}
          />

          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-950 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-300">
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

            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16">
              {/* Education Section */}
              <div>
                <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase tracking-[0.3em] mb-6">
                  Education
                </h4>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold dark:text-white">
                    B.Tech in Computer Science & Business Systems
                  </h3>
                  <p className="text-zinc-500">
                    Rajagiri School of Engineering and Technology | 2025
                  </p>
                </div>
              </div>

              {/* Experience Section */}
              <div>
                <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase tracking-[0.3em] mb-6">
                  Experience
                </h4>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-2xl font-bold dark:text-white">
                        Creative Lead
                      </h3>
                      <span className="font-mono text-xs text-zinc-500">
                        College Department Club
                      </span>
                    </div>
                    <ul className="space-y-3 text-zinc-500">
                      <li>
                        • Spearheaded visual identity and logo design for major
                        college events.
                      </li>
                      <li>
                        • Developed motion graphics and intro videos for event
                        promotions.
                      </li>
                      <li>
                        • Designed and managed posters and promotional materials
                        for events.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-12">
                <div>
                  <h4 className="text-zinc-400 font-mono text-[10px] uppercase mb-4">
                    Development
                  </h4>
                  <ul className="text-sm font-bold dark:text-white space-y-1">
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>Flutter</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zinc-400 font-mono text-[10px] uppercase mb-4">
                    Design
                  </h4>
                  <ul className="text-sm font-bold dark:text-white space-y-1">
                    <li>Figma</li>
                    <li>Blender</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere Pro</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col md:flex-row gap-4 justify-between items-center text-center md:text-left">
              <p className="text-xs text-zinc-500 max-w-xs italic">
                Currently based in Kochi, Kerala. Seeking UI/UX Designer roles.
              </p>
              <a
                href="/Alwin_Joseph_Resume.pdf"
                download
                className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-bold dark:text-white flex items-center gap-2 hover:bg-[#007AFF] hover:text-white transition-all shadow-sm"
              >
                <Download size={14} /> Download PDF
              </a>
            </div>
          </div>
        </div>
      )}

      <Contact />
    </main>
  );
};

export default Home;
