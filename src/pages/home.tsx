import { NextPage } from 'next'
import { Home } from '@/components/templates/Home'
import React, { useEffect } from 'react'
import { PAGE_NAME } from 'constants/PathName'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { useImage } from 'utils/hooks/useImages'
import { useFetchSnapRoutes } from 'utils/hooks/snapRoute/useFetchSnapRoute'
import { useFetchLikedPost } from 'utils/hooks/likedPost/useFetchLikedPost'
import { useSaveLikedPost } from 'utils/hooks/likedPost/useSaveLikedPost'
import { useFetchPosts } from 'utils/hooks/post/useFetchPost'
import { useIsZoom } from 'utils/hooks/useIsZoom'

const home: NextPage = () => {
  const { handlePushRouter } = useCustomRouter()
  const { image, handleSetImage } = useImage()
  const { data: snapRoutes } = useFetchLikedPost('u001')
  const { mutate: saveLikedPost } = useSaveLikedPost()
  const {isZoom,handleSetIsZoom} = useIsZoom()

  const submitLikedPostHandler = async () => {
    saveLikedPost(
      {
        userId: 'u001',
        postId: 'p003',
      },
      {
        onSuccess: () => console.log('success'),
        onError: () => console.log('error'),
      },
    )
  }

  // useEffect(() => {
  //   console.log('liked pOst', snapRoutes)
  // }, [snapRoutes])

  const {
    data: posts,
    refetch: refetchPosts,
    isLoading: isFetchPostLoading,
  } = useFetchPosts()

  const handleSwipeLike=()=>{
    submitLikedPostHandler();
  }

  const handleSwipeBad=()=>{
    
  }

  useEffect(() => {
    if (posts) {
      handleSetImage(posts[0].postImages[0].imagePath)
    }
    // console.log(posts)
  }, [posts])

  return (
    // <Home
    //   data={PostData}
    //   PAGE_NAME={PAGE_NAME}
    //   image={image}
    //   handlePushRouter={handlePushRouter}
    //   handleSetImage={handleSetImage}
    // />
    // <button onClick={submitLikedPostHandler}>submit</button>
    <Home
      data={posts || []}
      PAGE_NAME={PAGE_NAME}
      image={image}
      handlePushRouter={handlePushRouter}
      handleSetImage={handleSetImage}
      handleSetIsZoom={handleSetIsZoom}
      handleSwipeLike={handleSwipeLike}
      handleSwipeBad={handleSwipeBad}
    />
  )
}

export default home
