import React from 'react'
import { SpotCard } from '../organisms/home/SpotCard'
import { SwipeButtons } from '../organisms/home/SwipeButtons'
import { Styles } from 'types/index'
import { BottomNav } from '../organisms/commons/BottomNav'
import { Flex } from '../atoms/Flex'
import { Post } from 'types/entities/Post'

type Props = {
  data: Post[]
  handlePushRouter: (pathname: string) => void
  handleSetImage: (src:string) => void
  PAGE_NAME: { path: string; label: string; src: string }[]
  image:string
}

export const Home = (props: Props) => {
  const { data, handlePushRouter, PAGE_NAME,handleSetImage,image } = props
  return (
    <Flex style={style.container} direction="column">
      {data.map((value: Post, index: number) => (
        <SpotCard
          title={value.title}
          postImages={value.postImages}
          comment={value.comment||""}
          key={index}
          handleSetImage={handleSetImage}
          image={image}
        />
      ))}
      <SwipeButtons />
      <BottomNav handlePushRouter={handlePushRouter} PAGE_NAME={PAGE_NAME} />
    </Flex>
  )
}

const style:Styles = {
  container: {
    position:"absolute",
    width:"100%",
    left:"0px",
    top:"0px",
    height:"120vh",
    background:"#eee"
  },
}
