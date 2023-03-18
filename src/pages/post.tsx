import { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import { Post } from '@/components/templates/Post'
import { useFetchPosts } from 'utils/hooks/post/useFetchPost'
import { handleReadFile } from 'utils/libs/handleReadFile'
import { useImages } from 'utils/hooks/useImages'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { PAGE_NAME } from 'constants/PathName'
import { useSavePost } from 'utils/hooks/post/useSavePost'

const dummyPost = {
  title: 'hoge',
  comment: 'hoge',
  userId: 'u001',
  latitude: 1,
  longitude: 1,
  postImages: [
    {
      imagePath: 'hoge',
      imageTags: [
        {
          name: 'hoge',
        },
      ],
    },
  ],
}

const post: NextPage = () => {
  const {
    data: posts,
    refetch: refetchPosts,
    isLoading: isFetchPostLoading,
  } = useFetchPosts()

  //NOTE: 確認したら消してもらって大丈夫です。
  //NOTE: useSaveXXXは戻り値に更新するmutate関数とローディング状態を返します。
  //NOTE: ドメインの生成はhooks内部で行っています。必要なパラメータはfactoriesの型を参考にしてください。
  //NOTE: mutate関数は第一引数に更新するデータ、第二引数にオプションを渡せます。
  //NOTE: オプションには成功時の処理や失敗時の処理を渡せます。
  //NOTE: https://tanstack.com/query/v4/docs/react/reference/useMutation

  const { mutate: savePost, isLoading: isPostLoading } = useSavePost()

  const submitPostHandler = async () => {
    savePost(dummyPost, {
      onSuccess: () => console.log('success'),
      onError: () => console.log('error'),
    })
  }

  const titleRef = useRef(null)
  const commentRef = useRef(null)
  const placeRef = useRef(null)
  const { images, handleSetFiles, handleSetSrc } = useImages()
  const { handleBackRouter, handlePushRouter } = useCustomRouter()

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
