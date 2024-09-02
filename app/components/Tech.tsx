"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TECHNOLOGIES } from '../constants/constants';

export function Ball({ imgUrl }: { imgUrl: string }) {
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
}


export function BallCanvas({ icon }: { icon: string }) {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={""}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}


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
      ref={ref}
      className="container mx-auto pb-10 my-10"
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
        Discover the technologies I work with and use in my projects. From front-end frameworks to back-end tools, I strive to use the best technologies to deliver exceptional results.
      </motion.p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {isMounted && (
          <>
            {TECHNOLOGIES.map((technology, index) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </>
        )}
      </div>
    </motion.section>
  );
}
