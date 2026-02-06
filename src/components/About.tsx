import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// --- THE 3D AURA BEHIND YOU ---
const AuraBackdrop = ({ isDark }: { isDark: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Subtle slow rotation based on mouse movement for depth
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.mouse.y * 0.2,
        0.05,
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.mouse.x * 0.2,
        0.05,
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[3.5, 3.5, 1]} position={[0, 0, -0.5]}>
        {/* A simple plane that gets warped */}
        <planeGeometry args={[1, 1, 64, 64]} />
        <MeshDistortMaterial
          color={isDark ? "#007AFF" : "#A1A1AA"} // Deep Blue in dark, soft gray in light
          speed={1.5}
          distort={0.5}
          roughness={0.4}
          metalness={0.8}
          transparent
          opacity={isDark ? 0.15 : 0.25} // Subtle opacity
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

// --- MAIN COMPONENT ---
const AboutMe = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* --- LEFT COLUMN: IMAGE & 3D BACKDROP --- */}
        <div
          className="md:col-span-5 relative group"
          style={{ height: "500px" }}
        >
          {/* 1. The 3D Canvas (Sitting behind the image) */}
          <div className="absolute inset-0 -z-10 scale-125 pointer-events-none mix-blend-screen dark:mix-blend-normal">
            <Canvas
              camera={{ position: [0, 0, 3] }}
              gl={{ antialias: true }}
              dpr={[1, 2]}
            >
              <ambientLight intensity={0.5} />
              <pointLight
                position={[10, 10, 10]}
                intensity={1}
                color={isDark ? "#007AFF" : "white"}
              />
              <AuraBackdrop isDark={isDark} />
            </Canvas>
          </div>

          {/* 2. Profile Image Container (Borders removed, floating effect) */}
          <div className="w-full h-full rounded-[3rem] overflow-hidden relative z-20 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 transform group-hover:-translate-y-2 transition-all duration-500">
            {/* Replace '/alwin-profile.jpg' with your actual image in public/ folder */}
            <img
              src="/alwin.png"
              alt="Alwin Joseph"
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />

            {/* Subtle Blue Glint on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#007AFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

            {/* Corner Tag */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full animate-pulse" />
                <span className="text-[10px] font-mono font-bold dark:text-white uppercase tracking-widest">
                  CSBS_Grad // Creative_Lead
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
        {/* Borders removed, relying on soft background contrast */}
        <div className="md:col-span-7 flex flex-col justify-center p-8 md:p-12 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm rounded-[3rem] transition-colors duration-500 relative overflow-hidden">
          {/* Subtle background glowing blob for the text card too */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#007AFF]/5 dark:bg-[#007AFF]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[#007AFF] rounded-full shadow-[0_0_10px_#007AFF]" />
              <h2 className="text-sm font-mono text-[#007AFF] uppercase tracking-[0.3em] font-bold leading-none">
                Identity_Protocol
              </h2>
            </div>

            <h3 className="text-4xl md:text-6xl font-black dark:text-white leading-tight mb-8 tracking-tighter">
              Building at the <br />
              intersection of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-cyan-500 italic pr-2">
                Logic & Vibe.
              </span>
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl font-medium">
              I’m a **Design-Engineer** based in Kochi, transforming complex
              backend requirements into fluid, human-centric interfaces. With a
              degree in CSBS and a background as a Creative Lead, I don’t just
              write code—I craft the entire user journey from pixel to
              deployment.
            </p>
          </div>

          {/* Quick Stats Grid (Cleaned up) */}
          <div className="grid grid-cols-2 md:flex gap-8 mt-12 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
            {[
              { label: "Current Base", val: "Kochi, India" },
              { label: "Core Stack", val: "React · R3F · TS" },
              { label: "Superpower", val: "Design + Dev Bridge" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2 font-mono">
                  {stat.label}
                </span>
                <span className="text-base font-black dark:text-white uppercase tracking-tight">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
