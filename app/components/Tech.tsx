"use client";
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TECHNOLOGIES } from '../constants/constants';
import { CanvasLoader } from './CanvasLoader';

const Ball = React.memo(({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = React.memo(({ icon }: { icon: string }) => (
  <div className="w-24 h-24 max-w-full max-h-full overflow-hidden">
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
));

export function Tech() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      id='tech'
      ref={ref}
      className="container mx-auto pb-10 my-10 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <motion.h3
        className="px-8 font-mono text-[#D0B870] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        Technologies
      </motion.h3>
      <motion.p
        className="px-8 text-gray-400 max-w-xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
        }}
      >
        Here are some of the technologies I&apos;m currently exploring and using in my projects. These tools help me create innovative and effective solutions, enhancing both the development process and the final results.
      </motion.p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {isMounted && TECHNOLOGIES.map((technology) => (
          <div className="w-24 h-24" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
