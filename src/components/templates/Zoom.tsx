import { Post, PostImage, Styles } from 'types'
import { OverLay } from '@/components/atoms/Overlay'
import { ZoomCancelButton } from '@/components/molecules/buttons/ZoomCancelButton'
import React from 'react'
import { useState } from 'react'
import { ZoomImages } from '../molecules/images/ZoomImages'
import { motion, Point, Variants } from 'framer-motion'
import { MotionDiv } from '../atoms/MotionDiv'
import { openSpring } from 'anim/spring'

type Props = {
  images: string[]
  handleSetIsZoom: () => void
  page: number
  direction: number
  variants: Variants
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: { [key: string]: Point },
    imagesLength: number,
  ) => void
}

export const Zoom = (props: Props) => {
  const {
    handleSetIsZoom,
    images,
    page,
    direction,
    variants,
    onDragEnd,
  } = props
  return (
    <OverLay>
      <ZoomCancelButton onClick={handleSetIsZoom} />
      <MotionDiv
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={openSpring}
        style={styles.image}
      >
        <ZoomImages
          images={images}
          page={page}
          direction={direction}
          variants={variants}
          onDragEnd={onDragEnd}
        />
      </MotionDiv>
    </OverLay>
  )
}
const styles: Styles = {
  image: {
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '18%',
  },
}
