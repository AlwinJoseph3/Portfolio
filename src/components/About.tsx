import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float } from "@react-three/drei";
import * as THREE from "three";

const TechHalo = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={10} rotationIntensity={0.5} floatIntensity={0}>
      <Icosahedron args={[1, 0]} ref={meshRef} scale={2.5}>
        <meshStandardMaterial
          color={"#FFFFFF"}
          wireframe={true}
          transparent
          opacity={100}
          roughness={1}
          metalness={0}
        />
      </Icosahedron>
    </Float>
  );
};

const AboutMe = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Column 1: Profile Image + 3D Background */}
        <div className="md:col-span-5 relative h-[500px] flex items-center justify-center group">
          {/* 3D Canvas Layer (Static Position) */}
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <TechHalo />
            </Canvas>
          </div>
        </div>

        {/* Column 2: Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div>
            {/* <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-[#007AFF] uppercase tracking-[0.4em] font-bold">
                // 01. About Me
              </span>
              <div className="h-px w-20 bg-[#007AFF]/30" />
            </div> */}

            <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-10">
              About me
            </h3>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
              <p>
                I'm{" "}
                <span className="font-bold text-[#007AFF]">Alwin Joseph</span>,
                a passionate frontend developer with a knack for crafting
                immersive digital experiences. With experience in design and a
                love for clean code, I specialize in building intuitive
                interfaces that blend aesthetics with functionality.
              </p>
              <p>
                Currently based in Kochi, I am always learning and exploring new
                technologies to stay at the forefront of web development.
              </p>
              <p>
                Apart from coding, I enjoy designing and dabbling in 3D
                modeling, which helps me bring a unique perspective to my
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
