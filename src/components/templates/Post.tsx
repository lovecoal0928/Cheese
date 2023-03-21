import React, { ChangeEvent, RefObject } from 'react'
import { PostHeader } from '../organisms/post/PostHeader'
import { PostForm } from '../organisms/post/PostForm'
import { PathName } from 'types'

type Props = {
  titleRef: RefObject<HTMLInputElement>
  commentRef: RefObject<HTMLInputElement>
  placeRef: RefObject<HTMLInputElement>
  images: string[]
  handleSetFiles: (e: ChangeEvent<HTMLInputElement>) => void
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: PathName[]
}
export const Post = (props: Props) => {
  const {
    titleRef,
    commentRef,
    placeRef,
    images,
    handlePushRouter,
    handleSetFiles,
    PAGE_NAME
  } = props
  return (
    <>
      <PostHeader handlePushRouter={handlePushRouter} PAGE_NAME={PAGE_NAME[0].path} />
      <div style={{ marginTop: 50 }}>
        <PostForm
          titleRef={titleRef}
          commentRef={commentRef}
          placeRef={placeRef}
          images={images}
          handleSetFiles={handleSetFiles}
          handlePushRouter={handlePushRouter}
          PAGE_NAME={PAGE_NAME[5].path}
        />
      </div>
    </>
  )
}
