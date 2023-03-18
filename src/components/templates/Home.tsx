import React from 'react'
import { SpotCard } from '../organisms/home/SpotCard'
import { SwipeButtons } from '../organisms/home/SwipeButtons'
import { Post, Styles } from 'types/index'
import { BottomNav } from '../organisms/commons/BottomNav'
import { Flex } from '../atoms/Flex'

type Props = {
  data: Post[]
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: { path: string; label: string; src: string }[]
}

export const Home = (props: Props) => {
  const { data, handlePushRouter, PAGE_NAME } = props
  return (
    <Flex style={style.container} direction="column">
      {data.map((value: Post, index: number) => (
        <SpotCard
          title={value.title}
          address={value.address}
          src={value.src}
          comment={value.comment}
          key={index}
        />
      ))}
      <SwipeButtons />
      <BottomNav handlePushRouter={handlePushRouter} PAGE_NAME={PAGE_NAME} />
    </Flex>
  )
}

const style:Styles = {
  container: {
    width:"100%",
    minHeight:"120vh"
  },
}
