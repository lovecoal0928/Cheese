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

  const handleDragEnd = () => {
    setCardAnimation('stop')
    // 規定量を超えたらスワイプ
    if (Math.abs(dragX) > CARD_SWIPE_X) {
      setIsSwiped(true)
      setCardAnimation(dragX > 0 ? 'swipedRight' : 'swipedLeft')
    }
  }
  const handleSetCardAnimation = (
    name: 'stop' | 'drag' | 'swipedRight' | 'swipedLeft',
  ) => {
    setCardAnimation(name)
  }

  const cardVariants = {
    stop: {
      x: 0,
      rotation: 0,
    },
    drag: {
      rotate: dragX / 20,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
        onComplete: () => {
          setIsSwiped(true)
        },
      },
    },
    swipedRight: {
      x: CARD_SWIPE_X * 10,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
        onComplete: () => {
          setIsSwiped(true)
        },
      },
    },
    swipedLeft: {
      x: -CARD_SWIPE_X * 10,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
        onComplete: () => {
          setIsSwiped(true)
        },
      },
    },
  }

  return {
    isSwiped,
    handleDrag,
    handleDragEnd,
    handleSetCardAnimation,
    cardVariants,
    cardAnimation,
  }
}
