import { PAGE_NAME } from 'constants/PathName'
import { useRouter } from 'next/router'
import React from 'react'
import { Post } from 'types/supabase'
import { Card } from '../atoms/Card'
import { Flex } from '../atoms/Flex'
import { Image } from '../atoms/Image'
import { BottomNav } from '../organisms/commons/BottomNav'
import { TextDetail } from '../organisms/list/TextDetail'

type Props = {
  data: Omit<Post, 'comment'>[]
}
export const List = (props: Props) => {
  const { data } = props
  const router = useRouter()
  const handlePushRouter = (pathname: string) => {
    router.push({
      pathname: pathname,
    })
  }
  return (
    <Flex>
      {data.map((value: Omit<Post, 'comment'>, index: number) => (
        <Card style={style.card} key={index}>
          <Image alt="投稿写真" src={value.src} style={style.Image} />
          <TextDetail title={value.title} address={value.address} />
        </Card>
      ))}
      <BottomNav handlePushRouter={handlePushRouter} PAGE_NAME={PAGE_NAME} />
    </Flex>
  )
}

const style = {
  card: {},
  Image: {},
}
