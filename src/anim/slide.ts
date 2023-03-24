import { delay, easeOut, HTMLMotionProps } from 'framer-motion'
import { navSpring } from './spring'

export const postSlide: HTMLMotionProps<'div'> = {
  initial: {
    y: 0,
  },
  animate: {
    y: [1000, 0],
  },
  exit: {
    y: [0, 1000],
  },
  transition: {
    duration: 0.3,
  },
}

export const buttonSlide = {
  up: {
    y: [22, -10],
    zIndex:-1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',

    },
  },
  down: {
    y: 50,
    zIndex: -1,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const navSlide = {
  home: {
    x: '0.1%',
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
  map: {
    x: '19%',
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
  route: {
    x: '61.5%',
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
  list: {
    x: '78.8%',
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
}
