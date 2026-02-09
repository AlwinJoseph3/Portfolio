import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, TorusKnot } from "@react-three/drei";
import * as THREE from "three";
import { techCategories } from "../data/tech"; // Import your new data

// --- 3D Element: The "Logic Knot" ---
const LogicKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot args={[1.2, 0.4, 200, 32, 2, 3]} ref={meshRef}>
        <MeshDistortMaterial
          color="#007AFF"
          speed={3}
          distort={0.4}
          radius={1}
          wireframe={true}
          opacity={0.5}
          transparent
        />
      </TorusKnot>
    </Float>
  );
};

const TechStack = () => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-12 md:space-y-16 order-2 lg:order-1">
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-10 text-center lg:text-left">
            Tech Stack
          </h3>

          <div className="space-y-10 md:space-y-12">
            {techCategories.map((category) => (
              <div key={category.id} className="group text-center lg:text-left">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                  {category.label}
                </span>

                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 md:gap-x-8">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 group/item cursor-default"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover/item:opacity-100 transition-opacity"
                      />

                      <span className="text-xl md:text-2xl font-bold text-white uppercase hover:text-[#007AFF] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[300px] md:h-[700px] relative pointer-events-none order-1 lg:order-2">
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
