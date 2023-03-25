import { Flex } from '@/components/atoms/Flex'
import React, { ChangeEvent, LegacyRef, RefObject, useRef, useState } from 'react'
import { Image } from '@/components/atoms/Image'
import { TextInput } from '@/components/molecules/inputs/TextInput'
import { Typography } from '@/components/atoms/Typography'
import { Styles } from 'types'
import { PictureInput } from '@/components/molecules/inputs/PictureInput'

type Props = {
  titleRef: RefObject<HTMLInputElement>
  commentRef: LegacyRef<HTMLTextAreaElement>
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
      <input type='text' ref={titleRef} placeholder={'タイトル'} style={style.title} />
      <input type='text' placeholder='場所' readOnly ref={placeRef} onClick={() => { handlePushRouter(PAGE_NAME) }} style={style.place} />
      {/* <TextInput
        ref={commentRef}
        placeholder={'コメント'}
        style={style.comment}
      /> */}
      <textarea
        ref={commentRef}
        placeholder='コメント'
        style={style.comment}
      ></textarea>
      <div style={style.images}>
        {images?.map((value, index) => (
          <Image alt="投稿画像" src={value} key={index} width={90} height={120} style={{
            objectFit: "cover",
            margin: "0 10px"
          }} />
        ))}
      </div>
      <PictureInput onChange={handleSetFiles} style={style.file}>
        <Typography style={style.button}>写真を追加</Typography>
      </PictureInput>
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
  place: {
    border: "none",
    height: 50,
    borderBottom: "solid #aaa 1px",
    paddingLeft: 20,
    paddingRight: 20
  },
  comment: {
    border: "none",
    width: "100%",
    height: 150,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottom: "solid #aaa 1px",
    resize: "none"
  },
  button: {
    cursor: 'pointer',
  },
  images: {
    display: "flex",
    width: "90%",
    margin: "0 auto",
    overflowX: "scroll",
    marginTop: 20
  },
  file: {
    border: "1px solid #000"
  }
}
