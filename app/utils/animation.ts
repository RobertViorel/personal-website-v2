import { Variants } from 'framer-motion';

export const textVariant = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        type: 'spring',
        bounce: 0.5,
      },
    },
  };
};


export const fadeIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: 'tween' | 'spring',
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: 'easeOut' }
  }
});

export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'tween', delay, duration, ease: 'easeOut' }
  }
});

export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: 'tween' | 'spring',
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
  },
  show: {
    x: 0,
    y: 0,
    transition: { type, delay, duration, ease: 'easeOut' }
  }
});

export const staggerContainer = (
  staggerChildren: number,
  delayChildren?: number
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0
    }
  }
});
