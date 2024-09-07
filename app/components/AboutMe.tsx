"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textVariant, fadeIn, staggerContainer } from "@/app/utils/animation";
import { HoloBall } from "./HoloBall";

export function AboutMe() {
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
      className="container mx-auto pb-10 my-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center"
      initial="hidden"
      animate={controls}
      variants={staggerContainer(0.3)}
    >
      {/* Text Content */}
      <motion.div
        className="flex flex-col items-center lg:items-start lg:w-1/2 p-6 lg:pr-12"
        variants={staggerContainer(0.3)}
      >
        <motion.h3
          className="text-left font-mono text-[#D0B870] my-4"
          variants={textVariant(0.1)}
        >
          About Me
        </motion.h3>
        <motion.p
          className="text-left lg:text-left text-gray-400 max-w-xl mb-16"
          variants={fadeIn("up", "spring", 0.3, 0.8)}
        >
          Hi there! I'm Robert, a passionate junior web developer on a journey
          to turn my coding dreams into reality. I specialize in creating
          engaging and responsive websites using modern technologies. Let's
          build something amazing together!
        </motion.p>
      </motion.div>


      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
        variants={fadeIn("up", "spring", 0.5, 1)}
      >
        <div className="h-64 lg:h-full w-full flex items-center justify-center">
          <HoloBall />
        </div>
      </motion.div>
    </motion.section>
  );
}
