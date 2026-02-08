import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, X, FileText, Download } from "lucide-react";
import { projectData } from "../data/projects";
import "swiper/css";
import About from "../components/About";
import TechStack from "../components/Techstack";
import Footer from "../components/Footer";

const Home = ({}) => {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const projects = Object.values(projectData);

  return (
    <main className="min-h-screen selection:bg-[#007AFF] selection:text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.5} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color={"#007AFF"}
                distort={0.2}
                speed={3}
                roughness={1}
                metalness={0.1}
              />
            </Sphere>
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
          {/* Responsive Typography: adjusted for sm, md, lg, xl */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter text-white dark:text-white uppercase transition-colors leading-[0.9] mb-6">
            Alwin
            <br />
            Joseph
          </h1>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-white dark:text-white font-bold tracking-widest uppercase opacity-80 text-[10px] sm:text-xs md:text-sm lg:text-base">
              Frontend Dev • UI/UX • Graphics
            </p>

            {/* NEW: Casual Intro Text - Scaled for readability */}
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-lg md:max-w-xl mx-auto">
              I build things for the web that look good and work even better.
            </p>
          </div>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-[#007AFF] border border-[#ffffff] text-white font-black rounded-full uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-2 sm:gap-3 mx-auto hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
          >
            <FileText size={16} /> View Resume
          </button>
        </div>
      </section>

      <About />

      <TechStack />

      {/* 3. PROJECT CAROUSEL */}
      <section
        id="works"
        className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto"
      >
        {/* NEW: Updated Header Layout to include text */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 sm:mb-12 gap-6 sm:gap-8">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Selected Works
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
              I believe the best way to learn is by building. Here’s a
              collection of my projects where I’ve pushed my pixels (and
              patience) to the limit.
            </p>
          </div>

          <div className="flex gap-4 mx-auto lg:mx-0">
            <button className="swiper-prev w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-white hover:bg-[#007AFF] transition-all group">
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button className="swiper-next w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-white hover:bg-[#007AFF] transition-all group">
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
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 2.5, spaceBetween: 30 },
            1280: { slidesPerView: 3.2, spaceBetween: 40 }, // XL screens
            1536: { slidesPerView: 3.8, spaceBetween: 40 }, // 2XL screens
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                onClick={() => navigate(`/project/${project.id}`)}
                className="group relative h-[380px] sm:h-[420px] md:h-[500px] lg:h-[550px] bg-zinc-950/40 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-10 border border-zinc-800/40 overflow-hidden transition-all hover:scale-[0.98] cursor-pointer"
              >
                <div className="mt-6 sm:mt-8 md:mt-12">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-3 sm:mb-4 group-hover:text-[#007AFF] transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] sm:text-[10px] md:text-xs font-mono text-white uppercase border border-zinc-800/70 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-center">
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-zinc-600 uppercase tracking-widest">
                    View Case Study
                  </span>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 pl-0.5 rounded-full border border-zinc-800 flex items-center justify-center text-white group-hover:bg-[#007AFF] transition-all">
                    ▶
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="contact">
        <Footer />
      </section>

      {/* 5. RESUME MODAL */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsResumeOpen(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] bg-white dark:bg-zinc-950 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-300">
            <div className="p-5 sm:p-6 md:p-8 border-b border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white uppercase tracking-tighter">
                  The Journey
                </h2>
                <p className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Alwin Joseph • The Official Timeline
                </p>
              </div>
              <button
                onClick={() => setIsResumeOpen(false)}
                className="p-2 sm:p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-white hover:scale-110 transition-transform"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-12 space-y-10 sm:space-y-12 md:space-y-16">
              <div>
                <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase mb-3 sm:mb-4 md:mb-6">
                  Education
                </h4>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white leading-tight">
                    B.Tech <span className="text-[#007AFF]"> • </span> Computer
                    Science & Business Systems
                  </h3>
                  <p className="text-sm md:text-base text-zinc-500">
                    Rajagiri School of Engineering and Technology | 2025
                    <br />
                    <span className="text-xs italic opacity-70">
                      Where I learned to code, caffeine, and conquer deadlines.
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[#007AFF] font-mono text-xs font-black uppercase mb-3 sm:mb-4 md:mb-6">
                  Experience
                </h4>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white">
                        Creative Lead
                      </h3>
                      <span className="font-mono text-[10px] sm:text-xs text-[#007AFF] italic">
                        College Department Association
                      </span>
                    </div>
                    {/* NEW: More conversational bullet points */}
                    <ul className="space-y-3 text-sm md:text-base text-zinc-500">
                      <li>
                        • Took charge of the entire visual identity, designing
                        logos and branding that actually stuck.
                      </li>
                      <li>
                        • Cooked up high-fidelity motion graphics and event
                        promos that got people talking.
                      </li>
                      <li>
                        • Worked in the trenches with the team to ensure our
                        events ran smoother than my React animations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-4 sm:pb-8">
                <div>
                  <h4 className="text-[#007AFF] font-mono text-xs uppercase mb-3 sm:mb-4">
                    Core Tech
                  </h4>
                  <ul className="text-sm font-bold dark:text-white space-y-2">
                    <li>React / Tailwind</li>
                    <li>HTML/CSS/JS</li>
                    <li>Flutter</li>
                    <li>Python</li>
                    <li>C / C++</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#007AFF] font-mono text-xs uppercase mb-3 sm:mb-4">
                    Creative
                  </h4>
                  <ul className="text-sm font-bold dark:text-white space-y-2">
                    <li>Figma</li>
                    <li>Blender</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col md:flex-row gap-4 justify-between items-center">
              <p className="text-[10px] sm:text-xs text-zinc-500 max-w-xs italic text-center md:text-left">
                Located in Kochi, Kerala. Open for remote work or coffee chats.
              </p>
              <a
                href="/Alwin_Joseph_Resume.pdf"
                download
                className="w-full md:w-auto justify-center px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-xs font-bold dark:text-white flex items-center gap-2 hover:bg-[#007AFF] hover:text-white transition-all shadow-md"
              >
                <Download size={14} /> Download Full PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
