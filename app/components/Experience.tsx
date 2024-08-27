

"use client";

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';


interface Experience {
  title: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: 'Free Strategy Advice',
    icon: '/assets/phone.png',
    iconBg: '#d0b870',
    date: 'Step 1',
    points: [
      'I provide a personal initial consultation via phone, Zoom or Skype, during which we assess your project requirements and collaboratively develop initial concepts.',
    ],
  },
  {
    title: 'Your Personalized Cost Estimate',
    icon: '/assets/develop.png',
    iconBg: '#d0b870',
    date: 'Step 2',
    points: [
      'Within 3 working days, you\'ll receive an individual cost estimate tailored to your project\'s specific requirements. My offers are modular, providing you the flexibility to adjust the project\'s scope according to your needs.',
    ],
  },
  {
    title: 'Realizing Your Online Presence',
    icon: '/assets/graphic.png',
    iconBg: '#d0b870',
    date: 'Step 3',
    points: [
      'Once the website design is finalized, I begin the development phase. I meticulously code your responsive website or online shop to meet your specific needs. Throughout the process, I perform quality assurance checks to ensure your online presence exceeds performance standards and your expectations.',
    ],
  },
  {
    title: 'Deploying Your Website',
    icon: '/assets/done.png',
    iconBg: '#d0b870',
    date: 'Step 4',
    points: [
      'Upon the completion of the project, we will conduct a comprehensive review of the results together, implementing any final change requests as needed. The success story of your website unfolds with the seamless transfer from my development server to your live server. Rest assured, I remain fully committed to accompanying you every step of the way.',
    ],
  },
];

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1E4D72', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #1E4D72' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.title}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.title}
      </p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);


export function Experience() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className='text-3xl font-bold text-center'>
          The Process of Your New Web Project
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
