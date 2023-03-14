import React from 'react'
import { SpotCard } from '../organisms/home/SpotCard'
import { SwipeButtons } from '../organisms/home/SwipeButtons'
import { Post } from 'types/index'
import { BottomNav } from '../organisms/commons/BottomNav'
import { Flex } from '../atoms/Flex'


export const Home = (props:Post) => {
  return (
    <Flex style={style.container}>
      <SpotCard {...props}/>
      <SwipeButtons />
      <BottomNav/>
    </Flex>
  )
}

const style = {
    container:{
        padding:"10px"
    }
}