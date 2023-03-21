import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Post, PostImage, Styles } from 'types'

type Props = {
  images: PostImage[]
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

export const ZoomImages = (props: Props) => {
  const { images } = props
  const imagePaths = images.map(({ imagePath }) => imagePath)
  const a = ['/paca.png', '/mapicon.png', '/paca.png']
  const swipeConfidenceThreshold = 10000 //このプロパティの値が高いほど、ユーザーが画像をドラッグしてもアニメーションがすぐにトリガーされなくなる。
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  } //スワイプのパワーを見る
  const [[page, direction], setPage] = useState([0, 0]) //directionはanimの方向を保持する.
  const paginate = (newDirection: number) => {
    if (0 <= page + newDirection && page + newDirection < a.length) {
      setPage([page + newDirection, newDirection])
    }
  }

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
        // dragConstraints={{ left: -1000 * (a.length - 1), right: 0 }}
        onDragEnd={(event, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
          }
        }}
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
