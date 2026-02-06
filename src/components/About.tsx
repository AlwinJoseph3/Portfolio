import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float } from "@react-three/drei";
import * as THREE from "three";

// The 3D "Halo" Animation
const TechHalo = ({ isDark }: { isDark: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Slow, hypnotic rotation
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Icosahedron args={[1, 0]} ref={meshRef} scale={2.2}>
        <meshStandardMaterial
          color={isDark ? "#007AFF" : "#A1A1AA"}
          wireframe={true}
          transparent
          opacity={0.3}
          roughness={0}
          metalness={1}
        />
      </Icosahedron>
    </Float>
  );
};

const AboutMe = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Column 1: Profile Image + 3D Background */}
        <div className="md:col-span-5 relative h-[500px] flex items-center justify-center group">
          {/* 3D Canvas Layer (Behind Image) */}
          <div className="absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <TechHalo isDark={isDark} />
            </Canvas>
          </div>

          {/* Image Container */}
          <div className="relative z-10 w-64 h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 transition-transform duration-700 group-hover:rotate-0">
            {/* Replace with your actual image */}
            <img
              src="/alwin.png"
              alt="Alwin Joseph"
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110"
            />

            {/* Glass Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

            {/* Floating Tag */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">
                  System_Architect
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Text Content (No Borders) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-[#007AFF] uppercase tracking-[0.4em] font-bold">
                // 01. About Me
              </span>
              <div className="h-px w-20 bg-[#007AFF]/30" />
            </div>

            <h3 className="text-4xl md:text-6xl font-black dark:text-white leading-tight mb-8">
              Designing at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-purple-500">
                Pixel-Code Boundary.
              </span>
            </h3>

            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              <p>
                I don’t just design interfaces; I engineer them. As a{" "}
                <strong>CSBS Graduate</strong>, I view every project as a
                full-stack challenge—balancing backend logic with frontend
                fluidity.
              </p>
              <p>
                Currently based in <strong>Kochi</strong>, I am obsessed with
                React ecosystems, micro-interactions, and building digital
                products that feel alive.
              </p>
            </div>
          </div>

          {/* Minimalist Stats (No Borders) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {[
              { label: "Current Stack", val: "MERN / Next.js" },
              { label: "Design Tool", val: "Figma / Blender" },
              { label: "Status", val: "Open to Work" },
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2 group-hover:text-[#007AFF] transition-colors">
                  {stat.label}
                </div>
                <div className="text-xl font-bold dark:text-white">
                  {stat.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
