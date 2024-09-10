"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textVariant, fadeIn, zoomIn } from "@/app/utils/animation";

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className="container mx-auto flex flex-col justify-center items-start h-screen px-4 md:px-8"
      variants={fadeIn("up", "spring", 0.2, 1)}
      initial="hidden"
      animate={controls}
    >
      <motion.p className="text-[#D0B870] font-mono text-lg sm:text-xl" variants={textVariant(0.1)}>
        Hi, my name is
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mt-2 sm:mt-4"
        variants={textVariant(0.2)}
      >
        Robert Dumitru.
      </motion.h1>
      <motion.h2
        className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-400 mt-1 sm:mt-2"
        variants={textVariant(0.3)}
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-sm sm:max-w-md md:max-w-xl mt-2 sm:mt-4"
        variants={fadeIn("up", "tween", 0.4, 1)}
      >
        Hi there! I&apos;m Robert, a passionate junior web developer on a journey to
        turn my coding dreams into reality. With a keen eye for design and a
        love for solving problems, I am currently delving deep into the world of
        web development, continuously expanding my skill set and exploring the
        latest technologies.
      </motion.p>
      <motion.a
        href="/projects"
        className="mt-4 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 border border-[#D0B870] text-[#D0B870] hover:bg-[#D0B870] hover:text-white transition-colors duration-300 rounded-md text-sm sm:text-base"
        variants={zoomIn(0.5, 1)}
      >
        Check out my projects!
      </motion.a>
    </motion.section>
  );
}
