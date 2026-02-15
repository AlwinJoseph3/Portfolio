import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { Mesh } from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <Sphere args={[1, 32, 32]} scale={2.5} ref={meshRef}>
      <meshStandardMaterial
        color={"#007AFF"}
        wireframe
        roughness={0.5}
        metalness={0.8}
      />
    </Sphere>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} dpr={1} gl={{ antialias: false, powerPreference: "high-performance" }}>
      <ambientLight intensity={1.5} />
      <AnimatedSphere />
    </Canvas>
  );
};

export default HeroCanvas;
