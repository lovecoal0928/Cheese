import { PanInfo } from 'framer-motion'
import { useState } from 'react'

export const useDrag = (CARD_START_X: number, CARD_SWIPE_X: number) => {
  const [isSwiped, setIsSwiped] = useState(false)
  const [dragX, setDragX] = useState(CARD_START_X)
  const [cardAnimation, setCardAnimation] = useState('')

  const handleDrag = (event: TouchEvent, info: PanInfo) => {
    setCardAnimation('drag')
    setDragX(info.offset.x)
    // console.log(info.offset.x)
  }

  const handleDragEnd = (event: TouchEvent, info: PanInfo) => {
    setCardAnimation('start')
    // 規定量を超えたらスワイプ
    if (Math.abs(dragX) > CARD_SWIPE_X) {
      setIsSwiped(true)
      setCardAnimation('swiped')
    }
  }

  const cardVariants = {
    stop: {
      x: 0,
      rotation: 0,
    },
    drag: {
      rotate: dragX / 30,
      transition: { type: 'spring', damping: 20, stiffness: 300 },
    },
    swiped: {
      x: dragX ,
      transition: { type: 'spring', damping: 20, stiffness: 300 },
    },
  }

  return {isSwiped, handleDrag, handleDragEnd, cardVariants, cardAnimation }
}
