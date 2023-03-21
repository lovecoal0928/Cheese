import { Flex } from '@/components/atoms/Flex'
import { Input } from '@/components/atoms/Input'
import React, { ChangeEvent, RefObject, useRef, useState } from 'react'
import { Image } from '@/components/atoms/Image'
import { TextInput } from '@/components/molecules/inputs/TextInput'
import { FileInput } from '@/components/molecules/inputs/FileInput'
import { Typography } from '@/components/atoms/Typography'
import { Styles } from 'types'

type Props = {
  titleRef: RefObject<HTMLInputElement>
  commentRef: RefObject<HTMLInputElement>
  placeRef: RefObject<HTMLInputElement>
  images: string[]
  handleSetFiles: (e: ChangeEvent<HTMLInputElement>) => void
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: string
}

export const PostForm = (props: Props) => {
  const { titleRef, commentRef, placeRef, images, handleSetFiles, handlePushRouter, PAGE_NAME } = props
  return (
    <Flex direction="column" style={style.container}>
      <TextInput ref={titleRef} placeholder={'タイトル'} style={style.title} />
      <TextInput placeholder='場所' ref={placeRef} onClick={() => { handlePushRouter(PAGE_NAME) }} style={style.title} />
      <TextInput
        ref={commentRef}
        placeholder={'コメント'}
        style={style.comment}
      />
      {images?.map((value, index) => (
        <Image alt="投稿画像" src={value} key={index} />
      ))}
      <FileInput onChange={handleSetFiles}>
        <Typography style={style.button}>写真を追加</Typography>
      </FileInput>
    </Flex>
  )
}

const style: Styles = {
  container: {},
  title: {
    border: "none",
    height: 50,
    borderBottom: "solid #aaa 1px",
    paddingLeft: 20,
    paddingRight: 20
  },
  comment: {
    border: "none",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    cursor: 'pointer',
  },
}
