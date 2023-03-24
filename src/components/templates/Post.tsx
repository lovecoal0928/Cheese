import React, { ChangeEvent, LegacyRef, RefObject } from 'react'
import { PostHeader } from '../organisms/post/PostHeader'
import { PostForm } from '../organisms/post/PostForm'
import { PathName } from 'types'
import { MotionDiv } from '../atoms/MotionDiv'
import { postSlide } from 'anim/slide'

type Props = {
  titleRef: RefObject<HTMLInputElement>
  commentRef: LegacyRef<HTMLTextAreaElement>
  placeRef: RefObject<HTMLInputElement>
  images: string[]
  handleSetFiles: (e: ChangeEvent<HTMLInputElement>) => void
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: PathName[],
  onClickSave: () => Promise<void>
}
export const Post = (props: Props) => {
  const {
    titleRef,
    commentRef,
    placeRef,
    images,
    handlePushRouter,
    handleSetFiles,
    PAGE_NAME,
    onClickSave
  } = props
  return (
    <MotionDiv {...postSlide}>
      <PostHeader handlePushRouter={handlePushRouter} PAGE_NAME={PAGE_NAME[0].path} onClick={onClickSave} />
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
    </MotionDiv>
  )
}
