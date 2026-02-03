import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";
import { projectData } from "../data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import Icons
import "swiper/css";

interface HomeProps {
  isDark: boolean;
}

const Home: React.FC<HomeProps> = ({ isDark }) => {
  const navigate = useNavigate();
  const projects = Object.values(projectData);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      {/* 1. HERO SECTION WITH 3D BLOB */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color={isDark ? "#F15A24" : "#8BE8CB"}
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.1}
              />
            </Sphere>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div className="relative z-10 text-center pointer-events-none">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black dark:text-white transition-colors duration-500 uppercase">
            Alwin
            <br />
            Joseph
          </h1>
          <p className="mt-4 text-black dark:text-white font-bold tracking-widest uppercase">
            Frontend Dev • UI/UX • Graphics
          </p>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="py-20 overflow-hidden bg-zinc-50 dark:bg-[#0c0c0c] border-y border-zinc-200 dark:border-zinc-800">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 px-10 items-center">
              {[
                "React",
                "Flutter",
                "TypeScript",
                "Tailwind",
                "Three.js",
                "Figma",
                "Blender",
                "Photoshop",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-5xl font-black text-zinc-300 dark:text-zinc-800 hover:text-brand-primary transition-colors cursor-default uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. PROJECT CAROUSEL SECTION */}
      <section id="works" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="w-24 hidden md:block"></div> {/* Spacer */}
          <h2 className="text-5xl font-black dark:text-white uppercase tracking-tighter">
            Projects
          </h2>
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button className="swiper-prev w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white hover:bg-brand-primary hover:border-brand-primary transition-all group">
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button className="swiper-next w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white hover:bg-brand-primary hover:border-brand-primary transition-all group">
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]} // Enable Navigation module
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
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
                  <div className="absolute top-10 left-10 px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                    <span className="text-xs font-mono text-brand-primary font-bold">
                      STATUS: {project.progress}
                    </span>
                  </div>
                )}

                <div className="mt-12">
                  <h3 className="text-5xl font-black dark:text-white tracking-tighter uppercase leading-none mb-4 group-hover:text-brand-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono dark:text-zinc-500 uppercase tracking-widest border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded"
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
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center dark:text-white group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                    →
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Contact />
    </main>
  );
};

export default Home;
