import React from 'react'
import { SpotCard } from '../organisms/home/SpotCard'
import { SwipeButtons } from '../organisms/home/SwipeButtons'
import { Post } from 'types/index'
import { BottomNav } from '../organisms/commons/BottomNav'
import { Flex } from '../atoms/Flex'

type Props={
    data:Post[]
    handlePushRouter:(pathname:string)=>void
    pageName:{ path: string; label: string; src:string}[]
}

export const Home = (props:Props) => {
    const {data,handlePushRouter,pageName} = props
  return (
    <Flex style={style.container}>
        {data.map((value:Post,index:number)=>       
            <SpotCard title={value.title} address={value.address} src={value.src} comment={value.comment} key={index}/>
        )}
      <SwipeButtons />
      <BottomNav handlePushRouter={handlePushRouter} pageName={pageName}/>
    </Flex>
  )
}

const style = {
    container:{
        padding:"10px"
    }
}