import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../data/projects";
import { ArrowLeft, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import Starfield from "../components/StarBackground";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = Object.values(projectData);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project Not Found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-[#007AFF] selection:text-white overflow-x-hidden">
      <Starfield />

      <div
        className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundColor: project.colors?.[0] || "#007AFF" }}
      />

      <div className="relative z-10 pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto pb-20 sm:pb-32">
        <button
          // FIX: Changed from navigate(-1) to navigate("/")
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-zinc-500 hover:text-white mb-10 sm:mb-16 group transition-colors uppercase text-[10px] sm:text-xs font-bold tracking-widest"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </button>

        {/*MAIN BLOCK */}
        <div className="flex flex-col mb-16 sm:mb-24">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/50 text-[10px] sm:text-xs font-mono text-[#007AFF] uppercase tracking-widest">
              {project.category || "Web Experiment"}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter text-white uppercase leading-[0.85] mb-8 sm:mb-10">
            {project.name}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start lg:items-end justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-tight">
                The Gist
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto justify-center group flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-black uppercase tracking-tighter rounded-full hover:bg-[#007AFF] hover:text-white transition-all shadow-xl hover:shadow-[#007AFF]/20 text-sm sm:text-base"
              >
                Visit Site <ExternalLink size={16} className="sm:w-[18px]" />
              </a>
            )}
          </div>
        </div>

        {/*BACKSTORY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-20 sm:mb-32 border-t border-zinc-800 pt-12 sm:pt-20">
          <div className="lg:col-span-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
              The Backstory
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-base sm:text-lg text-zinc-400 leading-relaxed">
            {project.story}
          </div>
        </section>

        {/*TECH STACK*/}
        <section className="flex justify-around grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-20 sm:mb-32 border-t border-zinc-800 pt-12 sm:pt-20">
          <div className="lg:col-span-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
              Tech Stack
            </h3>
          </div>
          <div className="lg:col-span-8 flex flex-wrap content-start gap-3 sm:gap-4">
            {project.techStack?.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg border border-white/10 bg-zinc-900/50 text-xs sm:text-sm font-bold text-zinc-300 uppercase tracking-wide hover:border-[#007AFF] hover:text-white transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* MOCKUP */}
        <div className="relative w-full h-auto mb-20 sm:mb-32 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
          <img
            src={project.mockupimage}
            alt="Hero"
            onLoad={(e) => {
              e.currentTarget.parentElement?.classList.remove("animate-pulse");
            }}
            className="w-full h-full object-cover transition-opacity duration-700 opacity-0"
            style={{ opacity: 1 }}
          />
        </div>

        {/*COLORS TYPOGRAPHY*/}
        <section className="mb-20 sm:mb-32 bg-zinc-900/30 border border-white/5 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            {/* COLORS */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Sparkles size={20} className="text-[#007AFF]" />
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">
                  Color Palette
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 leading-relaxed">
                {project.colortheme}
              </p>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {project.colors?.map((color, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-2 sm:gap-3 group cursor-pointer"
                  >
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 shadow-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono text-[9px] sm:text-[10px] text-zinc-500 text-center uppercase group-hover:text-white">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TYPOGRAPHY */}
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right border-t lg:border-t-0 lg:border-l border-zinc-800 pt-8 lg:pt-0 pl-0 lg:pl-12 w-full">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                Typography
              </span>
              <p
                className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-2 break-all sm:break-normal"
                style={{ fontFamily: project.font }}
              >
                {project.fontname}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xs">
                {project.fonttheme}
              </p>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section className="space-y-8 sm:space-y-12 mb-20 sm:mb-32">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">
              Visuals
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.screenshots.map((ss, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-white/5 bg-zinc-900/50 overflow-hidden hover:border-[#007AFF]/30 transition-all duration-500 group"
              >
                <div className="w-full h-auto">
                  <img
                    src={ss}
                    alt={`Capture ${idx}`}
                    className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEXT PROJECT */}
        <section
          onClick={() => navigate(`/project/${nextProject.id}`)}
          className="group relative w-full py-12 sm:py-20 border-t border-zinc-800 cursor-pointer"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="font-mono text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest mb-2 block group-hover:text-[#007AFF] transition-colors">
                Up Next
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                {nextProject.name}
              </h2>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-zinc-700 flex items-center justify-center text-white group-hover:bg-[#007AFF] group-hover:border-[#007AFF] transition-all duration-300">
              <ArrowRight
                size={24}
                className="sm:w-8 sm:h-8 -rotate-45 group-hover:rotate-0 transition-transform"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
