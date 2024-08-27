"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textVariant, fadeIn, zoomIn } from "@/src/types/animation";

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust as needed
    triggerOnce: false // Allow re-triggering on scroll
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
      className="container mx-auto flex flex-col justify-center items-start h-screen px-8"
      variants={fadeIn("up", "spring", 0.2, 1)}
      initial="hidden"
      animate={controls}
    >
      <motion.p className="text-[#D0B870] font-mono" variants={textVariant(0.1)}>
        Hi, my name is
      </motion.p>
      <motion.h1
        className="text-5xl sm:text-7xl font-bold text-primary mt-4"
        variants={textVariant(0.2)}
      >
        Robert Dumitru.
      </motion.h1>
      <motion.h2
        className="text-5xl sm:text-7xl font-bold text-gray-400 mt-2"
        variants={textVariant(0.3)}
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-xl mt-4"
        variants={fadeIn("up", "tween", 0.4, 1)}
      >
        Hi there! I'm Robert, a passionate junior web developer on a journey to
        turn my coding dreams into reality. With a keen eye for design and a
        love for solving problems, I am currently delving deep into the world of
        web development, continuously expanding my skill set and exploring the
        latest technologies.
      </motion.p>
      <motion.a
        href="/projects"
        className="mt-8 px-8 py-4 border border-[#D0B870] text-[#D0B870] hover:bg-[#D0B870] hover:text-white transition-colors duration-300 rounded-md"
        variants={zoomIn(0.5, 1)}
      >
        Check out my projects!
      </motion.a>
    </motion.section>
  );
}
