import { PanInfo, Point } from 'framer-motion'
import { useState } from 'react'

export const useSlidShow = () => {
  const swipeConfidenceThreshold = 10000 //このプロパティの値が高いほど、ユーザーが画像をドラッグしてもアニメーションがすぐにトリガーされなくなる。
  const [images,setImages] = useState<string[]>([])

  const handleSetImages=(images:string[])=>setImages(images)
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
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  } //スワイプのパワーを見る
  const [[page, direction], setPage] = useState([0, 0]) //directionはanimの方向を保持する.

  const paginate = (newDirection: number, imagesLength: number) => {
    if (0 <= page + newDirection && page + newDirection < imagesLength) {
      setPage([page + newDirection, newDirection])
    }
  }

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: { [key: string]: Point },
    imagesLength: number,
  ) => {
    const swipe = swipePower(offset.x, velocity.x)
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1, imagesLength)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1, imagesLength)
    }
  }

  return {
    images,
    page,
    direction,
    variants,
    handleSetImages,
    onDragEnd,
  }
}
