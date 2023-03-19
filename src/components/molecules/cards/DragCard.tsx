import { Card } from '@/components/atoms/Card'
import { motion, PanInfo, VariantLabels } from 'framer-motion'
import React, { ChangeEvent, CSSProperties, ReactNode } from 'react'

type Props = {
  style: CSSProperties
  children: ReactNode
  onClick?: () => void
  onDragEnd: (event: TouchEvent, info: PanInfo) => void
  onDrag: (event: TouchEvent, info: PanInfo) => void
  variants:{}
  initial?: boolean | VariantLabels 
  animate: boolean | VariantLabels 
}

export const DragCard = (props: Props) => {
  const { children} = props
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
