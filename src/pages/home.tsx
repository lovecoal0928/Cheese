import { NextPage } from 'next'
import { Home } from '@/components/templates/Home'
import React, { useEffect } from 'react'
import { Post } from 'types/entities/Post'
import { PAGE_NAME } from 'constants/PathName'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { useImage } from 'utils/hooks/useImages'

const home: NextPage = () => {
  const { handlePushRouter } = useCustomRouter()
  const { image, handleSetImage } = useImage()
  const PostData: Post[] = [
    {
      postId: '',
      userId: '',
      title: 'タイトル',
      comment: 'コメント',
      postedAt: '',
      updatedAt: '',
      postImages: [
        {
          postImageId: '',
          imagePath: '',
          imageTags: [
            {
              tagId: '',
              name: 'タグ',
            },
          ],
        },
      ],
      address: {
        addressesId: '',
        longitude: 10,
        latitude: 20,
      },
    },
  ]
  useEffect(()=>{
    handleSetImage(PostData[0].postImages[0].imagePath)
  },[PostData])


  return (
    <Home
      data={PostData}
      PAGE_NAME={PAGE_NAME}
      image={image}
      handlePushRouter={handlePushRouter}
      handleSetImage={handleSetImage}
    />
  )
}

export default home
