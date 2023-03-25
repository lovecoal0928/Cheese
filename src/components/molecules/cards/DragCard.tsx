import { Card } from '@/components/atoms/Card'
import { motion, PanInfo, VariantLabels, Variants } from 'framer-motion'
import React, { ChangeEvent, CSSProperties, ReactNode } from 'react'
import { Styles } from 'types'

type Props = {
  children: ReactNode
  onClick?: () => void
  onDragEnd: () => void
  onDrag: (event: TouchEvent, info: PanInfo) => void
  variants: Variants
  initial?: boolean | VariantLabels
  animate: boolean | VariantLabels
}

export const DragCard = (props: Props) => {
  const { children } = props
  return (
    <motion.div drag="x" dragConstraints={{ left: 0, right: 0 }} style={styles.card} {...props}>
      {children}
    </motion.div>
  )
}

const styles:Styles ={
  card: {
    minHeight: '85vh',
    width: '90%',
    top: '2%',
    left: '4.5%',
    background: '#fff',
    position: 'absolute',
    borderRadius: '18px',
    padding: '15px 15px 100px 15px',
  },
}
