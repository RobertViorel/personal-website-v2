"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { HoloBall } from "./HoloBall";
import { fadeIn, staggerContainer } from "@/app/utils/animation";



export function AboutMe() {
  const controls = useAnimation();

  // Trigger animation on component mount
  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <motion.section
      className="container mx-auto pb-10 my-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center"
      initial="hidden"
      animate={controls}
      variants={staggerContainer(0.3)}
    >
      <motion.div
        className="flex flex-col items-center lg:items-start lg:w-1/2 p-6 lg:pr-12"
      >
        <motion.p
          className="font-mono italic text-[#D0B870] my-4"
          variants={fadeIn("up", "spring", 0.3, 0.8)}
        >
          &quot;The web does not just connect machines, it connects people.&quot;
          <span className="block text-right mt-2">- Tim Berners-Lee</span>
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
