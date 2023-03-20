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
        <SwipeButton src="" alt="bad" onClick={handleSwipeBad}/>
        <SwipeButton src="" alt="check" onClick={handleSwipeLike}/>
    </Flex>
  )
}

const styles:Styles ={
    swipe_buttons:{
      justifyContent: "space-around",
      position:"fixed",
      width:"100%",
      bottom:"100px",
      left: 0,
    },
}
