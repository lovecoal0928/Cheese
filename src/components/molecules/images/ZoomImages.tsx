import { motion, AnimatePresence, Variants, Point } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Post, PostImage, Styles } from 'types'
import { useSlidShow } from 'utils/hooks/anim/useSlideShow'

type Props = {
  images: string[]
  page: number
  direction: number
  variants: Variants
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: { [key: string]: Point },
    imagesLength: number,
  ) => void
}

export const ZoomImages = (props: Props) => {
  const { images, page, direction, variants, onDragEnd} =
    props

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={page}
        //   src={imagePaths[page]}
        src={images[page]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 1000, damping: 200 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, { offset, velocity }) =>
          onDragEnd(event, { offset, velocity }, images.length)
        }
        style={styles.image}
      />
    </AnimatePresence>
  )
}

const styles: Styles = {
  image: {
    width: '100%',
    objectFit: 'contain',
    position: 'absolute',
    top: '18%',
  },
}
