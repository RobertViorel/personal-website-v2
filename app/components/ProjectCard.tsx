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
}

export function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  linkIcon = github,
}: ProjectCardProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

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

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate={controls}
      className="bg-transparent p-5 rounded-2xl shadow-lg sm:w-[360px] max-w-full my-12"
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
    </motion.div>
  );
}
