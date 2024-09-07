"use client";


import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { steps } from "../constants/constants";


export default function Experience() {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 font-mono text-primary">
        Experience
      </h2>
      <VerticalTimeline lineColor="">
        {steps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", boxShadow: "0 1px #D0B870", color: "#1E4D" }}
            contentArrowStyle={{ borderRight: "7px solid #D0B870" }}
            date={step.date}
            iconStyle={{ background: "#D0B870", color: "#D0B870", boxShadow: "0 0 4px #D0B870", display: "flex",
            alignItems: "center",
            justifyContent: "center", }}
            icon={<img src={step.icon} alt={`${step.title} icon`} style={{ width: "80%", height: "80%", }} />}
            visible={true}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-lg font-mono text-primary">{step.title}</h3>
              <p className="mt-2 text-gray-400" style={{ fontWeight: "normal" }}>{step.description}</p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
