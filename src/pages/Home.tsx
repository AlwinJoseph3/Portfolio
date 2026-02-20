import { useState, Suspense, lazy } from "react";
const HeroCanvas = lazy(() => import("../components/HeroCanvas"));
import { useNavigate } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { projectData } from "../data/projects";
import { profileData } from "../data/profile";
import About from "../components/About";
import TechStack from "../components/Techstack";
import Footer from "../components/Footer";
import ResumeModal from "../components/ResumeModal";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import SpotlightCard from "../components/SpotlightCard";
import AnimatedSeparator from "../components/AnimatedSeparator";
import { ScrambleText } from "../components/ScrambleText";

const Home = ({}) => {
  const navigate = useNavigate();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const projects = Object.values(projectData);

  const letterContainerDetails = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2, // Delay after page load
      },
    },
  };

  const letterDetails = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen selection:bg-[#007AFF] selection:text-white overflow-x-hidden"
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Suspense fallback={<div className="bg-black w-full h-full" />}>
            <HeroCanvas />
          </Suspense>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
          <motion.div
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black font-display tracking-tighter text-white uppercase transition-colors leading-[0.8] sm:leading-[0.9] mb-6 overflow-hidden"
            variants={letterContainerDetails}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap justify-center mb-0 sm:mb-2">
              {profileData.firstName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterDetails}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-center">
              {profileData.lastName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterDetails}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <p className="text-white dark:text-white font-bold tracking-widest uppercase opacity-80 text-[10px] sm:text-xs md:text-sm lg:text-base">
              <ScrambleText text={profileData.titles.join(" • ")} />
            </p>
          </motion.div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            aria-label="View resume"
            onClick={() => setIsResumeOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 sm:mt-10 px-5 sm:px-8 py-3 sm:py-4 bg-[#007AFF] text-white font-black font-display rounded-full uppercase tracking-widest text-[9px] sm:text-xs flex items-center gap-2 sm:gap-3 mx-auto shadow-[0_0_20px_rgba(0,122,255,0.3)] hover:shadow-[0_0_40px_rgba(0,122,255,0.6)] transition-all duration-300 ring-1 ring-white/20 hover:ring-white/50"
          >
            <FileText size={16} />
            <span>View Resume</span>
          </motion.button>
        </div>

        {/* MINIMALIST GALAXY SCROLL SUGGESTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
          style={{ x: "-50%" }}
        >
          <div className="relative flex items-center justify-center">
            {/* Subtle Orbit */}
            <div className="absolute w-10 h-10 rounded-full border-[0.5px] border-white/5 border-t-white/30 animate-[spin_4s_linear_infinite]" />

            {/* Minimalist Capsule */}
            <div className="w-[18px] h-7 sm:w-5 sm:h-8 border-[0.5px] border-white/20 rounded-full flex justify-center py-1.5 bg-black/20 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <motion.div
                animate={{ y: [0, 12], opacity: [0.8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "circIn" }}
                className="w-0.5 h-1 sm:h-1.5 bg-white drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] rounded-full"
              />
            </div>
          </div>
          <span className="text-white/30 text-[8px] sm:text-[9px] uppercase tracking-[0.5em] font-mono text-center ml-[0.5em]">
            Scroll Down
          </span>
        </motion.div>
      </section>

      <About />
      <AnimatedSeparator />
      <TechStack />
      <AnimatedSeparator />

      {/* PROJECTS */}
      <section
        id="works"
        className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 sm:mb-12 gap-6 sm:gap-8">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <FadeIn direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tighter mb-4">
                Projects
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
                I believe the best way to learn is by building. Here’s a
                collection of my projects where I’ve pushed my pixels (and
                patience) to the limit.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={0.2 + index * 0.1}
              direction="up"
              fullWidth
            >
              <SpotlightCard
                onClick={() => navigate(`/project/${project.id}`)}
                spotlightColor="rgba(0, 122, 255, 0.1)"
                className="group relative w-full bg-zinc-900/10 rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-white/10 cursor-pointer"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">
                  {/* Left Side: Number & Info */}
                  <div className="flex items-start gap-6 md:gap-10 max-w-3xl">
                    <span className="hidden md:block text-5xl font-black font-display text-white/5 font-mono select-none group-hover:text-white/10 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2 md:hidden">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-[#007AFF] uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tighter uppercase leading-[0.95] sm:leading-[0.9] group-hover:text-[#007AFF] transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-sm md:text-base text-zinc-400 line-clamp-2 md:line-clamp-none max-w-xl leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Tech & Action */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4">
                    <div className="hidden md:flex flex-wrap justify-end gap-2 max-w-[200px]">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-bold font-mono text-zinc-500 bg-zinc-900/50 border border-zinc-800 px-2 py-1 rounded-full uppercase tracking-wider group-hover:border-zinc-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#007AFF] group-hover:border-[#007AFF] group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="contact">
        <Footer />
      </section>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </motion.main>
  );
};

export default Home;
