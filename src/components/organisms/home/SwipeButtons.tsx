import { Flex } from '@/components/atoms/Flex'
import { SwipeButton } from '@/components/molecules/buttons/SwipeButton'
import React from 'react'
import { Styles } from 'types/style'


type Props={
  handleSwipeLike:()=>void
  handleSwipeBad:()=>void
}

export const SwipeButtons = (props:Props) => {
  const {handleSwipeBad,handleSwipeLike} = props
  return (
    <Flex style={styles.swipe_buttons}>
        <SwipeButton src="/home/bad.svg" alt="bad" onClick={handleSwipeBad}/>
        <SwipeButton src="/home/love.svg" alt="check" onClick={handleSwipeLike}/>
    </Flex>
  )
}

const styles:Styles ={
    swipe_buttons:{
      justifyContent: "center",
      position:"fixed",
      width:"100%",
      bottom:"130px",
      left: 0,
    },
}
