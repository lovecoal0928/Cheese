import { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import { Post } from '@/components/templates/Post'
import { useFetchPosts } from 'utils/hooks/post/useFetchPost'
import { handleReadFile } from 'utils/libs/handleReadFile'
import { useImageFiles } from 'utils/hooks/useImageFiles'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { PAGE_NAME } from 'constants/PathName'
import { useSavePost } from 'utils/hooks/post/useSavePost'
import { useFetchSnapRoutes } from 'utils/hooks/snapRoute/useFetchSnapRoute'
import { useUploadFile } from 'utils/hooks/storage/useUploadFile'
import { useAuth, useAuthLister } from 'utils/hooks/auth/useAuth'
import { PostParams } from 'factories/postFactory'
import { useDeleteFile } from 'utils/hooks/storage/useDeleteFile'
import { LatLng } from 'types/latlng'

const post: NextPage = () => {

  const { data: snapRoutes } = useFetchSnapRoutes()

  useEffect(() => {
    console.log('route', snapRoutes)
  }, [snapRoutes])

  //NOTE: 確認したら消してもらって大丈夫です。
  //NOTE: useSaveXXXは戻り値に更新するmutate関数とローディング状態を返します。
  //NOTE: ドメインの生成はhooks内部で行っています。必要なパラメータはfactoriesの型を参考にしてください。
  //NOTE: mutate関数は第一引数に更新するデータ、第二引数にオプションを渡せます。
  //NOTE: オプションには成功時の処理や失敗時の処理を渡せます。
  //NOTE: https://tanstack.com/query/v4/docs/react/reference/useMutation

  const { mutate: savePost, isLoading: isPostLoading } = useSavePost()
  const { mutate: uploadFile, isLoading: isUploading } = useUploadFile()
  const { mutate: deleteFile, isLoading: isDeleting } = useDeleteFile()

  const { userId } = useAuthLister()

  const submitPostHandler = async () => {
    console.log(titleRef);


    const post: PostParams = {
      userId: userId!,
      title: titleRef.current!.value,
      comment: commentRef.current!.value,

      postImages: imagePaths.map((path) => (
        {
          imagePath: path,
          imageTags: [{ name: "1" }, { name: "2" }]
        }
      )),
      longitude: 113,
      latitude: 35
    }

    savePost(post, {
      onSuccess: () => handleBackRouter(),
      onError: () => console.log('error'),
    })
  }

  const titleRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const placeRef = useRef(null)
  const [imagePaths, setImagePaths] = useState<string[]>([])
  const [fileKeys, setFileKeys] = useState<string[]>([])
  const [center, setCenter] = useState<LatLng>({ lat: 0, lng: 0 })
  const { images, handleSetFiles, handleSetSrc } = useImageFiles()
  const { handlePushRouter, handleBackRouter } = useCustomRouter()

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

  useEffect(() => {
    (async () => {
      images.file.forEach(async (file) => {
        uploadFile(file, {
          onSuccess: onSuccessUploadFile,
          onError: (error) => console.log(error),
        })
      })
    })()
  }, [images])

  // 現在位置を取得
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      })
    }
  }, [])

  const onSuccessUploadFile = ({
    key,
    publicUrl,
  }: {
    key: string
    publicUrl: string
  }) => {
    setImagePaths((prevPaths) => [...prevPaths, publicUrl])
    setFileKeys((prevKeys) => [...prevKeys, key])
  }

  const handleSetCenter = (value: LatLng) => {
    setCenter(value)
  }

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
      onClickSave={submitPostHandler}
      center={center}
      setCenter={handleSetCenter}
    />
  )
}

export default post
