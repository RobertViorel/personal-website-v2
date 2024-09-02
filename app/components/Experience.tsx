"use client";


import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  icon: string;
  date: string;
}

const steps: Step[] = [
  {
    title: "Free Strategy Advice",
    description:
      "I provide a personal initial consultation via phone, Zoom or Skype, during which we assess your project requirements and collaboratively develop initial concepts.",
    icon: "/assets/develop.png", // Corrected path
    date: "Step 1",
  },
  {
    title: "Your Personalized Cost Estimate",
    description:
      "Within 3 working days, you’ll receive an individual cost estimate tailored to your project’s specific requirements. My offers are modular, providing you the flexibility to adjust the project’s scope according to your needs.",
    icon: "/assets/develop.png",
    date: "Step 2",
  },
  {
    title: "Realizing Your Online Presence",
    description:
      "Once the website design is finalized, I begin the development phase. I meticulously code your responsive website or online shop to meet your specific needs. Throughout the process, I perform quality assurance checks to ensure your online presence exceeds performance standards and your expectations.",
    icon: "/assets/develop.png",
    date: "Step 3",
  },
  {
    title: "Deploying Your Website",
    description:
      "Upon the completion of the project, we will conduct a comprehensive review of the results and provide you with detailed instructions on how to maintain and manage your website.",
    icon: "/assets/develop.png",
    date: "Step 4",
  },
];

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
