import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, TorusKnot } from "@react-three/drei";
import * as THREE from "three";
import { techCategories } from "../data/tech";
import FadeIn from "./FadeIn";

const LogicKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <TorusKnot args={[1.2, 0.4, 100, 16, 2, 3]} ref={meshRef}>
        <meshPhongMaterial
          color="#007AFF"
          wireframe={true}
          opacity={0.5}
          transparent
          shininess={100}
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
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tighter mb-8 md:mb-10 text-center lg:text-left">
              Tech Stack
            </h2>
          </FadeIn>

          <div className="space-y-10 md:space-y-12">
            {techCategories.map((category, index) => (
              <FadeIn
                key={category.id}
                delay={0.2 + index * 0.1}
                direction="right"
              >
                <div className="group text-center lg:text-left">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                    {category.label}
                  </span>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 md:gap-x-10">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 group/item cursor-default relative"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          title={skill.name}
                          /* Increased dimensions for better visibility */
                          width="32"
                          height="32"
                          loading="lazy"
                          /* Removed grayscale and added a subtle scale effect on hover */
                          className="w-8 h-8 md:w-9 md:h-9 object-contain transition-transform duration-300 group-hover/item:scale-110"
                        />

                        <span className="text-xl md:text-2xl font-bold font-display text-white uppercase group-hover/item:text-[#007AFF] transition-colors duration-300">
                          {skill.name}
                        </span>
                        {/* Adjusted underline to match larger icon spacing */}
                        <span className="absolute -bottom-1 left-12 w-0 h-0.5 bg-[#007AFF] group-hover/item:w-[calc(100%-3rem)] transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="h-[300px] md:h-[700px] relative pointer-events-none order-1 lg:order-2">
          <Canvas
            camera={{ position: [0, 0, 5] }}
            dpr={1}
            gl={{ antialias: false }}
          >
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
