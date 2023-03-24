import React from 'react'
import { SpotCard } from '../organisms/home/SpotCard'
import { PathName, Styles } from 'types/index'
import { BottomNav } from '../organisms/commons/BottomNav'
import { Flex } from '../atoms/Flex'
import { Post } from 'types/entities/Post'
import { Zoom } from './Zoom'
import { Point, Variants } from 'framer-motion'

type Props = {
  data: Post[]
  PAGE_NAME: PathName[]
  isZoom: boolean
  images: string[]
  page: number
  direction: number
  variants: Variants
  pathHistory:string[]
  onDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: { [key: string]: Point },
    imagesLength: number,
  ) => void
  isActive: (pathname: string) => boolean
  isLastActive: (pathname: string) => boolean
  handleSetImages: (src: string[]) => void
  handleSetIsZoom: () => void
  handleSwipeLike: (postId: string, func?: () => void) => Promise<void>
  handleSwipeBad: (func?: () => void) => void
}

export const Home = (props: Props) => {
  const {
    data,
    PAGE_NAME,
    isActive,
    isLastActive,
    pathHistory,
    handleSetImages,
    handleSetIsZoom,
    handleSwipeBad,
    handleSwipeLike,
    isZoom,
    images,
    page,
    direction,
    variants,
    onDragEnd,
  } = props

  return (
    <Flex style={style.container} direction="column">
      {isZoom && (
        <Zoom
          images={images}
          handleSetIsZoom={handleSetIsZoom}
          page={page}
          direction={direction}
          variants={variants}
          onDragEnd={onDragEnd}
        />
      )}
      {data.map((value: Post,index:number) => (
        <SpotCard
          title={value.title}
          postImages={value.postImages}
          comment={value.comment || ''}
          key={value.postId}
          postId={value.postId}
          handleSetIsZoom={handleSetIsZoom}
          handleSetImages={handleSetImages}
          handleSwipeBad={handleSwipeBad}
          handleSwipeLike={handleSwipeLike}
        />
      ))}
      <BottomNav
        pathHistory={pathHistory}
        PAGE_NAME={PAGE_NAME}
        isActive={isActive}
        isLastActive={isLastActive}
      />
    </Flex>
  )
}

const style: Styles = {
  container: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    top: '0px',
    height: '120vh',
    background: '#eee',
    overflow: 'hidden',
  },
}
