import { NextPage } from 'next'
import React, { useEffect, useRef} from 'react'
import { Post } from '@/components/templates/Post'
import { handleReadFile } from 'utils/libs/handleReadFile'
import { useImageFiles } from 'utils/hooks/useImageFiles'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { PAGE_NAME } from 'constants/PathName'

const post: NextPage = () => {
  const titleRef = useRef(null)
  const commentRef = useRef(null)
  const placeRef = useRef(null)
  const { images, handleSetFiles, handleSetSrc } = useImageFiles()
  const { handlePushRouter } = useCustomRouter()

  useEffect(() => {
    const handleLoopSrc = async () => {
      const srcs = []
      for (const value of images.file) {
        srcs.push(await handleReadFile(value))
      }
      handleSetSrc(srcs)
    }
    handleLoopSrc()
  }, [images.file])

  // insertPosts:title,comment,user_id
  // insertAddress: 緯度、経度、名前
  // posts_addresses:連関テーブル
  // post_images:post_id,image_path 連関テーブル

  return (
    <Post
      titleRef={titleRef}
      commentRef={commentRef}
      placeRef={placeRef}
      images={images.src}
      handleSetFiles={handleSetFiles}
      handlePushRouter={handlePushRouter}
      PAGE_NAME={PAGE_NAME}
    />
  )
}

export default post
