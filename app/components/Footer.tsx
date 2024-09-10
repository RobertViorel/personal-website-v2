"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Logo from '/assets/logo.svg';

const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: { opacity: 0, y: direction === "up" ? 20 : -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type, delay, duration },
  },
});

export function Footer() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <footer className="w-full bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col lg:flex-row items-center justify-between py-6 space-y-6 lg:space-y-0">

          <motion.div
            ref={ref}
            className="flex justify-center lg:justify-start w-full lg:w-1/3 mb-1 lg:mb-0"
            initial="hidden"
            animate={controls}
            variants={fadeIn("up", "tween", 0, 1)}
          >
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={64}
                height={64}
                className="h-16 md:h-18 w-auto"
              />
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            className="flex justify-center w-full lg:w-1/3"
            initial="hidden"
            animate={controls}
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <div className="flex justify-center rounded-2xl p-5 space-x-6">
              <a
                href="https://github.com/RobertViorel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d0b870]"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/robert-dumitru-b791b72b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d0b870]"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/robert_dumitru.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d0b870]"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://t.me/robert0519"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d0b870]"
              >
                <FaTelegram size={30} />
              </a>
            </div>
          </motion.div>

          {/* Email Section */}
          <motion.div
            ref={ref}
            className="flex justify-center lg:justify-end w-full lg:w-1/3"
            initial="hidden"
            animate={controls}
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope size={30} className="text-[#d0b870]" />
              <a
                href="mailto:robert@dumitrurobert.com"
                className="text-[#d0b870] text-center font-bold"
              >
                Robert@dumitrurobert.com
              </a>
            </div>
          </motion.div>
        </section>

        <section className="pb-6 text-gray-400 text-center text-[14px]">
          &copy; {new Date().getFullYear()} Robert Dumitru. All rights reserved.
        </section>
      </div>
    </footer>
  );
}
