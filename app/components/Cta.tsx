"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, zoomIn } from "@/app/utils/animation";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  index: number;
  buttons?: Array<{ text: string; href: string }>;
}

const ServiceCard = ({
  title,
  description,
  icon,
  index,
  buttons,
}: ServiceCardProps) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("show");
      setHasAnimated(true);
    }
  }, [inView, controls, hasAnimated]);

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={500}
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.02}
      gyroscope
      className="w-full max-w-full flex flex-col justify-between my-5"
    >
      <motion.div
        ref={ref}
        className="bg-transparent p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col h-full"
        variants={fadeIn("up", "tween", index * 0.2, 1)}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-lg text-primary font-semibold font-mono text-center">
          {title}
        </h3>
        <p className="mt-2 text-gray-400 text-center flex-grow">
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="mt-4 flex justify-center space-x-4">
            {buttons.map((button, idx) => (
              <motion.a
                key={idx}
                href={button.href}
                className="px-8 py-4 border border-[#D0B870] text-[#D0B870] hover:bg-[#D0B870] hover:text-white transition-colors duration-300 rounded-md"
                variants={zoomIn(0.5, 1)}
              >
                {button.text}
              </motion.a>
            ))}
          </div>
        )}
      </motion.div>
    </Tilt>
  );
};

export function Cta() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("show");
      setHasAnimated(true);
    }
  }, [inView, controls, hasAnimated]);

  return (
    <motion.section
      ref={ref}
      className="container mx-auto pb-10 mb-10"
      variants={fadeIn("up", "tween", 0, 1)}
      initial="hidden"
      animate={controls}
    >
      <motion.h2 className="px-8 text-2xl font-mono font-semibold text-center text-primary mb-4">
        Need a Website?
      </motion.h2>

      <div className="container mx-auto flex flex-wrap justify-center gap-8 mb-10">
        <ServiceCard
          title="I Can Help!"
          description="Let me build you a stunning website."
          icon={
            <Image
              src="/assets/develop.png"
              alt="Need a Website?"
              width={56}
              height={56}
              className="w-14 h-14"
            />
          }
          index={0}
          buttons={[
            { text: "Contact", href: "/contact" },
          ]}
        />
      </div>
    </motion.section>
  );
}
