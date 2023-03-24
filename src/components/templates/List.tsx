import { PAGE_NAME } from 'constants/PathName'
import React from 'react'
import { Post } from 'types/entities/Post'
import { Card } from '../atoms/Card'
import { Flex } from '../atoms/Flex'
import { Image } from '../atoms/Image'
import { BottomNav } from '../organisms/commons/BottomNav'
import { TextDetail } from '../organisms/list/TextDetail'

type Props = {
  data: Post[]
  isActive:(pathname:string)=>boolean
  isLastActive: (pathname: string) => boolean
  pathHistory:string[]
}

export const List = (props: Props) => {
  const { data,isActive,pathHistory,isLastActive } = props

  return (
    <Flex>
      {data.map((value: Post, index: number) => (
        <Card style={style.card} key={index}>
          <Image
            alt="投稿写真"
            src={value.postImages[0].imagePath}
            style={style.Image}
          />
          <TextDetail title={value.title} />
        </Card>
      ))}
      <BottomNav PAGE_NAME={PAGE_NAME} isActive={isActive} pathHistory={pathHistory} isLastActive={isLastActive}/>
    </Flex>
  )
}

const style = {
  card: {},
  Image: {},
}
