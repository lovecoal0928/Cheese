import { Button } from '@/components/atoms/Button'
import { Header } from '@/components/atoms/Header'
import { Typography } from '@/components/atoms/Typography'
import { PostCancelButton } from '@/components/molecules/buttons/PostCancelButton'
import React from 'react'

type Props = {
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: string
}
export const PostHeader = (props: Props) => {
  const { handlePushRouter, PAGE_NAME } = props
  return (
    <Header>
      <PostCancelButton src='/icons/vector.png' onClick={handlePushRouter} PAGE_NAME={PAGE_NAME} />
      <Typography style={style.title}>投稿</Typography>
      <Button>保存</Button>
    </Header>
  )
}

const style = {
  container: {},
  title: {}
}
