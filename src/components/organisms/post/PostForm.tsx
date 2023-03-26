import { Flex } from '@/components/atoms/Flex'
import React, { ChangeEvent, LegacyRef, RefObject, useRef, useState } from 'react'
import { Image } from '@/components/atoms/Image'
import { TextInput } from '@/components/molecules/inputs/TextInput'
import { Typography } from '@/components/atoms/Typography'
import { Styles } from 'types'
import { PictureInput } from '@/components/molecules/inputs/PictureInput'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { SheetContent } from './SheetContent'
import 'react-spring-bottom-sheet/dist/style.css'
import { LatLng } from 'types/latlng'


type Props = {
  titleRef: RefObject<HTMLInputElement>
  commentRef: LegacyRef<HTMLTextAreaElement>
  placeRef: RefObject<HTMLInputElement>
  images: string[]
  handleSetFiles: (e: ChangeEvent<HTMLInputElement>) => void
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: string
  center: LatLng
  setCenter: (value: LatLng) => void
}

export const PostForm = (props: Props) => {
  const { titleRef, commentRef, placeRef, images, handleSetFiles, handlePushRouter, PAGE_NAME, center, setCenter } = props

  const [btsheet, setbtsheet] = useState(false)

  return (
    <>
      <Flex direction="column" style={style.container}>
        <input type='text' ref={titleRef} placeholder={'タイトル'} style={style.title} />
        <input
          type='text'
          placeholder='場所'
          readOnly
          value={`場所：緯度${center.lat} 経度${center.lng}`}
          ref={placeRef}
          onClick={() => setbtsheet(true)} style={style.place} />
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
      <BottomSheet
        open={btsheet}
        onDismiss={() => setbtsheet(false)}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.min(...snapPoints)
        }
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 6,
          maxHeight
        ]}
        header={
          <h1>場所を登録</h1>
        }
      // footer={
      //   <button style={style.placesAdd}>登録</button>
      // }
      >
        <SheetContent
          center={center}
          setCenter={setCenter}
        />
      </BottomSheet>
    </>
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
    paddingRight: 20,
    cursor: "pointer"
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
  },
  placesAdd: {
    width: "100%",

  }
}
