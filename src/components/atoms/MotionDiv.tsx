import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import React, { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & MotionProps

export const MotionDiv = (props: Props) => {
  const { children } = props
  return (
    <AnimatePresence mode='wait'>
      <motion.div {...props}>{children}</motion.div>
    </AnimatePresence>
  )
}
