import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

// --- 3D Element: The "Logic Knot" ---
const LogicKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Asymmetric rotation for a more organic feel
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
      {/* TorusKnot args: [radius, tube, tubularSegments, radialSegments, p, q]
        p and q control the "weaving" of the knot.
      */}
      <TorusKnot args={[1.2, 0.4, 200, 32, 2, 3]} ref={meshRef}>
        <MeshDistortMaterial
          color="#007AFF"
          speed={3}
          distort={0.4} // Makes the knot "wobble" and look less geometric
          radius={1}
          wireframe={true} // High-tech wireframe look
          opacity={0.5}
          transparent
        />
      </TorusKnot>
    </Float>
  );
};

const TechStack = () => {
  return (
    <section className="py-5 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT COLUMN: Categorized List */}
        <div className="space-y-16">
          <header>
            <h2 className="text-6xl font-black text-[#007AFF] uppercase tracking-tighter mb-4">
              Technical <br /> Capabilities
            </h2>
            <div className="h-1 w-20 bg-[#007AFF]" />
          </header>

          <div className="space-y-12">
            {/* Category 01 */}
            <div className="group">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                // 01. Frontend_Eng
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "React",
                  "Three.js",
                  "Tailwind CSS",
                  "Next.js",
                  "TypeScript",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-2xl font-bold text-white uppercase hover:text-[#007AFF] transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 02 */}
            <div className="group">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                // 02. Systems_Logic
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {["Python", "Node.js", "C++", "C", "Dart", "Firebase"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-2xl font-bold text-white uppercase hover:text-[#007AFF] transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Category 03 */}
            <div className="group">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                // 03. Creative_Design
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  "Figma",
                  "Blender",
                  "Illustrator",
                  "Photoshop",
                  "Flutter",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-2xl font-bold text-white uppercase hover:text-[#007AFF] transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 04 */}
            <div className="group">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                // 04. Infra_Tools
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {["Git", "Vite", "Linux", "Netlify", "Postman"].map((t) => (
                  <span
                    key={t}
                    className="text-2xl font-bold text-white uppercase hover:text-[#007AFF] transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Logic Knot */}
        <div className="h-[500px] md:h-[700px] relative pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <LogicKnot />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
