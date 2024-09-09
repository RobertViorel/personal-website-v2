"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { steps } from "../constants/constants";

interface Step {
  title: string;
  description: string;
  icon: string;
  date: string;
}

export function Experience() {
  return (
    <div className="py-20 px-4">
      <h2 className="text-2xl font-semibold text-center mb-12 font-mono text-primary">
        The Process of Your New Web Project
      </h2>
      <VerticalTimeline lineColor="">
        {steps.map((step, index) => (
          <VerticalTimelineElement
            id="process"
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              boxShadow: "0 1px #D0B870",
              color: "#9CA3AF",
            }}
            contentArrowStyle={{ borderRight: "7px solid #D0B870" }}
            date={step.date}
            iconStyle={{
              background: "#D0B870",
              color: "#D0B870",
              boxShadow: "0 0 4px #D0B870",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={
              <Image
                src={typeof step.icon === "string" ? step.icon : step.icon.src} // Ensure StaticImageData works
                alt={`${step.title} icon`}
                width={40}
                height={40}
                style={{ width: "80%", height: "80%" }}
              />
            }
            visible={true}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-lg font-mono font-semibold text-primary">{step.title}</h3>
              <div className="mt-2 text-gray-400">
                {step.description.split("\n").map((line, index) => (
                  <p key={index} className="mt-2">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
