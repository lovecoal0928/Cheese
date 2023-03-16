import { Button } from '@/components/atoms/Button'
import { Header } from '@/components/atoms/Header'
import { Typography } from '@/components/atoms/Typography'
import { PostCancelButton } from '@/components/molecules/buttons/PostCancelButton'
import React from 'react'

export const PostHeader = () => {
  return (
    <Header style={style.container}>
      <PostCancelButton src=''/>
      <Typography style={style.title}>投稿</Typography>
      <Button>保存</Button>
    </Header>
  )
}

const style = {
  container: {},
  title:{}
}
