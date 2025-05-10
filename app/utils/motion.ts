import type { MotionProps } from 'motion-v';

export const fade = (
  options: { delay?: number; duration?: number } = {}
): Partial<MotionProps<'div'>> => {
  const { delay, duration = 0.5 } = options;

  return {
    initial: { opacity: 0, filter: 'blur(12px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    inViewOptions: { once: true },
    transition: { delay, duration, type: 'tween' },
  };
};

export const slideUp = (
  options: { delay?: number; duration?: number } = {}
): Partial<MotionProps<'div'>> => {
  const { delay, duration = 0.4 } = options;

  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true },
    transition: { delay, duration, type: 'tween' },
  };
};
