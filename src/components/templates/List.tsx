import { PAGE_NAME } from 'constants/PathName'
import React from 'react'
import { Post } from 'types/entities/Post'
import { Card } from '../atoms/Card'
import { Flex } from '../atoms/Flex'
import { Image } from '../atoms/Image'
import { BottomNav } from '../organisms/commons/BottomNav'
import { TextDetail } from '../organisms/list/TextDetail'
import { Prepare } from '../organisms/Prepare'
import { Styles } from 'types'

type Props = {
  data: Post[]
  isActive: (pathname: string) => boolean
  isLastActive: (pathname: string) => boolean
  pathHistory: string[]
}

export const List = (props: Props) => {
  const { data, isActive, pathHistory, isLastActive } = props

  return (
    // <Flex>
    <div style={style.container}>
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
      <BottomNav PAGE_NAME={PAGE_NAME} isActive={isActive} pathHistory={pathHistory} isLastActive={isLastActive} />
    </div>
  )
}

const style: Styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: 10,
    // padding: 10,
    width: "90%",
    height: 300,
    margin: "0px auto ",
    marginTop: 20,
    textAlign: "center"
  },
  Image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 10

  },
}
