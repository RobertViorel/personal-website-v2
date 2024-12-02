"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { github } from "@/public/assets";
import { fadeIn } from "../utils/animation";
import { colorMap } from "../utils/collorMap";
import { useInView } from "react-intersection-observer";

interface Tag {
  name: string;
}

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string | StaticImageData;
  source_code_link: string;
  linkIcon?: string | StaticImageData;
  projectType: "P" | "C"; // Make it required (remove optional type `?`)
}

export function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  linkIcon = github,
  projectType, // No default here, it'll always be required
}: ProjectCardProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("show");
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, controls]);

  const getLinkIcon = () => {
    if (typeof linkIcon === "string") {
      return linkIcon;
    }
    return linkIcon.src;
  };

  const handleMouseEnter = () => setShowTooltip(true); // Show tooltip on hover
  const handleMouseLeave = () => setShowTooltip(false); // Hide tooltip on hover

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate={controls}
      className="bg-transparent p-5 rounded-2xl shadow-lg sm:w-[360px] max-w-full my-12 relative"
    >
      <div className="relative w-full h-[230px]">
        {typeof image === "string" ? (
          <Image
            src={image}
            alt="project_image"
            priority
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        ) : (
          <Image
            src={image}
            alt="project_image"
            priority
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        )}

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="gold-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={getLinkIcon()}
              alt="source code"
              width={25}
              height={25}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-primary font-mono font-semibold text-lg">{name}</h3>
        <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${colorMap[tag.name] || "text-gray-500"}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>

      {/* Project Type Indicator (P or C) */}
      <div
        className="absolute bottom-4 right-4 w-8 h-8 flex justify-center items-center rounded-full border-2 border-white cursor-pointer z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="text-white text-lg font-bold">
          {projectType === "P" ? "P" : "C"}
        </span>

        {showTooltip && (
          <div className="absolute bottom-12 right-0 bg-black text-white text-xs rounded-lg px-2 py-1 z-20">
            {projectType === "P" ? "Personal Project" : "Client Project"}
          </div>
        )}
      </div>
    </motion.div>
  );
}
