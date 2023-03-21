import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Post, PostImage, Styles } from 'types'
import { useSlidShow } from 'utils/hooks/anim/useSlideShow'

type Props = {
  images: PostImage[]
}

export const ZoomImages = (props: Props) => {
  const { images } = props
  const imagePaths = images.map(({ imagePath }) => imagePath)
  const a = ['/paca.png', '/mapicon.png', '/paca.png']
  const { page, direction, variants, onDragEnd } = useSlidShow()

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={page}
        //   src={imagePaths[page]}
        src={a[page]}
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
          onDragEnd(event, { offset, velocity }, a.length)
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
