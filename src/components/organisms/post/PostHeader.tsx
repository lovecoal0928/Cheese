import { Button } from '@/components/atoms/Button'
import { Header } from '@/components/atoms/Header'
import { Typography } from '@/components/atoms/Typography'
import { PostCancelButton } from '@/components/molecules/buttons/PostCancelButton'
import React from 'react'
import { Styles } from 'types'

type Props = {
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: string
}
export const PostHeader = (props: Props) => {
  const { handlePushRouter, PAGE_NAME } = props
  return (
    <Header>
      <PostCancelButton src='/icons/vector.png' onClick={handlePushRouter} PAGE_NAME={PAGE_NAME} />
      <h4 style={style.title}>新規作成</h4>
      <Button style={style.save}>保存</Button>
    </Header>
  )
}

const style: Styles = {
  container: {},
  title: {
    fontWeight: "bold",
    margin: "0 auto"
  },
  save: {
    border: "none",
    backgroundColor: "#fff",
    color: "#0098fd",
    fontWeight: "bold",
    position: "absolute",
    right: 10,
  }
}
