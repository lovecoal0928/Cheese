import { Post, PostImage, Styles } from 'types'
import { OverLay } from '@/components/atoms/Overlay'
import { ZoomCancelButton } from '@/components/molecules/buttons/ZoomCancelButton'
import React from 'react'
import { useState } from 'react'
import { ZoomImages } from '../molecules/images/ZoomImages'
import { motion } from 'framer-motion'
import { MotionDiv } from '../atoms/MotionDiv'
import { openSpring } from 'anim/spring'

type Props = {
  images: PostImage[]
  handleSetIsZoom: () => void
}

export const Zoom = (props: Props) => {
  const { handleSetIsZoom, images } = props
  return (
    <OverLay>
      <ZoomCancelButton onClick={handleSetIsZoom} />
      <MotionDiv
        initial={{ scale: 0.8,}}
        animate={{ scale: 1 }}
        transition={openSpring}
        style={styles.image}
      >
        <ZoomImages images={images} />
      </MotionDiv>
    </OverLay>
  )
}
const styles:Styles={
    image: {
      width: '100%',
      objectFit: 'contain',
      position: 'absolute',
      top: '18%',
    },
}