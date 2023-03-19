import { NextPage } from 'next'
import { Home } from '@/components/templates/Home'
import React, { useEffect } from 'react'
import { Post } from 'types/entities/Post'
import { PAGE_NAME } from 'constants/PathName'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { useImage } from 'utils/hooks/useImages'
import { useFetchSnapRoutes } from 'utils/hooks/snapRoute/useFetchSnapRoute'
import { useFetchLikedPost } from 'utils/hooks/likedPost/useFetchLikedPost'

const home: NextPage = () => {
  const { handlePushRouter } = useCustomRouter()
  const { image, handleSetImage } = useImage()

  const { data: snapRoutes } = useFetchLikedPost('u001')

  useEffect(() => {
    console.log('liked pOst', snapRoutes)
  }, [snapRoutes])

  const PostData: Post[] = [
    {
      postId: 'fnojefneo',
      userId: 'njogron',
      title: 'タイトル',
      comment: 'コメント',
      postedAt: 'fenojfnenj',
      postImages: [
        {
          postImageId: 'jnouonj',
          imagePath: '',
          imageTags: [
            {
              tagId: 'fnjogrn',
              name: 'ばーせる',
            },
          ],
        },
      ],
      address: {
        addressId: 'aaaa',
        longitude: 10,
        latitude: 20,
      },
    },
  ]
  useEffect(() => {
    handleSetImage(PostData[0].postImages[0].imagePath)
  }, [PostData])

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
