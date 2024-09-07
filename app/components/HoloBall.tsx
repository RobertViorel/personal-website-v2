"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

export function HoloBall() {
  return (
    <div className="flex flex-col gap-10 overflow-hidden">
      <div className="flex justify-center bg-no-repeat">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 1, 1]} />
          <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <mesh scale={2.5}>
              <icosahedronGeometry args={[1, 1]} />
              <meshStandardMaterial
                color="#00ffff"
                wireframe
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
