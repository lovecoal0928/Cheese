import { Post, PostImage } from 'types'
import { OverLay } from '@/components/atoms/Overlay'
import { ZoomCancelButton } from '@/components/molecules/buttons/ZoomCancelButton'
import React from 'react'
import { useState } from "react";
import { ZoomImages } from '../molecules/images/ZoomImages'


type Props = {
  images: PostImage[]
  handleSetIsZoom: () => void
}

export const Zoom = (props: Props) => {
  const { handleSetIsZoom,images } = props
  return (
    <OverLay>
      <ZoomCancelButton onClick={handleSetIsZoom} />
      <ZoomImages images={images}/>
    </OverLay>
  )
}



