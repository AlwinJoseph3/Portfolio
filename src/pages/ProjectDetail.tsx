import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../data/projects";
// Removed Project3DViewer import
import { ArrowLeft, ExternalLink } from "lucide-react";

const ProjectDetail: React.FC<{ isDark: boolean }> = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Using the structured data we created earlier
  const project = projectData[id || "1"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project)
    return (
      <div className="p-20 text-center dark:text-white">Project Not Found</div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors">
      <div className="pt-32 px-6 max-w-7xl mx-auto pb-32">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-500 hover:text-brand-primary mb-12 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-7">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter dark:text-white uppercase mb-8">
              {project.name}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
              <span className="font-mono text-zinc-400 text-sm italic">
                Status: {project.progress}
              </span>
            </div>
            <p className="text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end gap-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs dark:text-white uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-[#007AFF] text-white rounded-full font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20"
            >
              Show me <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Updated: Landscape Hero Image replaces 3D Viewer */}
        <section className="mb-32">
          <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl">
            <img
              src={project.mockupimage}
              alt={`${project.name} expedition landscape`}
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Gradient Overlay for a more cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 text-white">
              <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                Project Visual
              </span>
              <h3 className="text-2xl font-black uppercase">
                Cinematic Experience
              </h3>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="mb-32 py-20 border-y-4 border-zinc-100 dark:border-y dark:border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-black dark:text-white uppercase tracking-tighter ">
                Color Palette
              </h2>
            </div>
            <div className="flex gap-4">
              {project.colors?.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-3xl shadow-xl border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                  <span className="font-mono text-[10px] uppercase dark:text-zinc-500 tracking-widest">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="py-20"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-black dark:text-white uppercase tracking-tighter ">
                Typography
              </h2>
            </div>
            <div className="flex items-end gap-6 dark:text-white">
              <span className="text-7xl font-black uppercase">Aa</span>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold italic tracking-tight">
                  Inter Tight
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  Bold / Medium / Regular
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* UI Gallery */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20 items-center">
            <h2 className="text-4xl font-black dark:text-white uppercase tracking-tighter">
              UI Strategy & Approach
            </h2>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand-primary pl-8">
              {project.uiStrategy}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.screenshots.map((ss, idx) => (
              <div
                key={idx}
                className="bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden"
              >
                <img
                  src={ss}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
