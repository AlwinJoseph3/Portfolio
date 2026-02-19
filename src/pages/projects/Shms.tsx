import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projectData } from "../../data/projects";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import Starfield from "../../components/StarBackground";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ImageWithLoader from "../../components/ImageWithLoader";

const SHMS = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Directly grab SHMS data (ID: 2)
  const project = projectData["2"];
  // For navigation to next project (HomeChef -> ID: 3)
  const nextProject = projectData["3"];

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax Logic for Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div>Project Not Found</div>;

  const primaryColor = project.colors?.[0] || "#2196f3";

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#020617] selection:bg-[#2196f3] selection:text-white overflow-x-hidden"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left"
        style={{ scaleX, backgroundColor: primaryColor }}
      />

      <Starfield />

      {/* Ambient Background Glow */}
      <div
        className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto pb-20 sm:pb-32">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center pt-32 pb-12 sm:pb-20 text-center">
            {/* Project Meta (Top) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
             <button
              onClick={() => navigate("/")}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/20 text-xs font-bold text-zinc-400 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest">
              {project.category}
            </span>
          </motion.div>

          {/* Title & Description */}
          <motion.div 
              style={{ y: y1, opacity: opacityHero }}
              className="max-w-5xl mx-auto z-20 flex flex-col items-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-black tracking-tighter text-white uppercase leading-[0.85] mb-8 sm:mb-12">
                {project.name}
              </h1>

              <div className="max-w-2xl mx-auto">
                 <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8">
                    {project.description}
                 </p>

                 {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-[#2196f3] hover:text-white transition-all shadow-xl hover:shadow-[#2196f3]/20 hover:scale-105 active:scale-95"
                  >
                    Visit Live Site <ExternalLink size={16} />
                  </a>
                )}
              </div>
          </motion.div>
        </section>

        {/* MOCKUP */}
        {project.mockupimage && (
        <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-7xl mx-auto mb-24 sm:mb-40"
        >
            <div className="relative w-full aspect-video rounded-[1rem] sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm">
                <ImageWithLoader
                    src={project.mockupimage}
                    alt="Hero Mockup"
                    priority={true}
                    className="object-cover"
                />
                    {/* Glass Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
        </motion.div>
        )}

        {/* BACKSTORY & TECH Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 mb-24 sm:mb-40">
           {/* Backstory */}
           <div className="space-y-6">
             <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
               <span className="w-8 h-[2px] bg-[#2196f3]" /> The Story
             </h3>
             <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
               {project.story}
             </p>
           </div>

           {/* Tech Stack */}
           <div className="space-y-6">
             <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
               <span className="w-8 h-[2px] bg-[#2196f3]" /> Tech Stack
             </h3>
             <div className="flex flex-wrap content-start gap-3">
                {project.techStack?.map((tech, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs sm:text-sm font-bold text-zinc-300 uppercase tracking-wide hover:border-[#2196f3] hover:bg-[#2196f3]/10 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </div>
                ))}
             </div>
           </div>
        </section>

                {/* KEY FEATURES & ARCHITECTURE (New Section for Backend/Systems) */}
        {(project.features || project.architecture || project.stats) && (
            <section className="mb-24 sm:mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
                {project.features && (
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                             <span className="w-8 h-[2px] bg-[#2196f3]" /> Key Features
                        </h3>
                        <ul className="space-y-4">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2196f3] mt-2.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {project.stats && (
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                             <span className="w-8 h-[2px] bg-[#2196f3]" /> Impact & Metrics
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                             {Object.entries(project.stats).map(([key, value]) => (
                                 <div key={key} className="p-6 rounded-2xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center text-center">
                                     <span className="text-3xl md:text-4xl font-black text-white mb-2">{value}</span>
                                     <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{key}</span>
                                 </div>
                             ))}
                        </div>
                    </div>
                )}
            </section>
        )}

        {/* COLORS & TYPOGRAPHY - Revamped */}
        {(project.colors && project.font && project.colortheme) && (
        <section className="mb-24 sm:mb-40">
           <div className="bg-zinc-900/40 border border-white/5 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                {/* COLORS */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#2196f3]/20 rounded-lg text-[#2196f3]">
                        <Sparkles size={20} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">
                      Color Palette
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.colors?.map((color, idx) => (
                      <div
                        key={idx}
                        className="group flex flex-col gap-3 cursor-pointer"
                        onClick={() => {
                            navigator.clipboard.writeText(color);
                        }}
                      >
                        <div
                          className="w-full aspect-square rounded-2xl border border-white/10 shadow-lg group-hover:scale-105 transition-all relative overflow-hidden"
                          style={{ backgroundColor: color }}
                        >
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 text-white text-[10px] font-bold uppercase transition-opacity">
                                Copy
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-mono text-xs text-white font-bold uppercase">
                            {color}
                            </span>
                            <span className="hidden sm:block text-[10px] text-zinc-600">
                                HEX
                            </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm text-zinc-500 leading-relaxed border-l-2 border-zinc-800 pl-4">
                    {project.colortheme}
                  </p>
                </div>

                {/* TYPOGRAPHY */}
                <div className="flex flex-col justify-between">
                   <div>
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 block">
                            Typeset
                        </span>
                        <div className="bg-black/50 rounded-2xl p-6 border border-white/5 mb-6">
                            <p
                                className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none mb-4"
                                style={{ fontFamily: project.font }}
                            >
                                Aa
                            </p>
                            <p className="text-2xl text-zinc-400" style={{ fontFamily: project.font }}>
                                {project.fontname}
                            </p>
                        </div>
                   </div>
                   
                   <div>
                        <p className="text-lg text-white font-bold mb-2">Character</p>
                        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                            {project.fonttheme}
                        </p>
                   </div>
                </div>
              </div>
           </div>
        </section>
        )}

        {/* SCREENSHOTS / VISUALS */}
        {project.screenshots && project.screenshots.length > 0 && (
        <section className="space-y-12 mb-20 sm:mb-32">
          <div className="flex flex-col items-center text-center">
            <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">
                Gallery
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
              Visual Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {project.screenshots.map((ss, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50"
              >
                <div className="p-4">
                    <ImageWithLoader
                    src={ss}
                    alt={`Screen ${idx}`}
                    className="w-full h-auto object-contain rounded-lg shadow-2xl"
                    />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        )}

        {/* BIG NEXT PROJECT CTA */}
        {nextProject && (
        <section className="border-t border-zinc-800 pt-20 pb-10">
            <button
              onClick={() => navigate(`/project/${nextProject.id}`)} 
              className="group w-full flex flex-col items-center justify-center gap-6 py-12 hover:bg-zinc-900/30 rounded-3xl transition-colors"
            >
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Up Next</span>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500">
                    {nextProject.name}
                </h2>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:bg-[#2196f3] group-hover:border-[#2196f3] transition-all">
                    <ArrowLeft size={24} className="text-white rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
            </button>
        </section>
        )}

      </div>
    </motion.div>
  );
};

export default SHMS;
