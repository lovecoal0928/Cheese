import { NextPage } from 'next'
import { Home } from '@/components/templates/Home'
import React, { useEffect } from 'react'
import { PAGE_NAME } from 'constants/PathName'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { useImage } from 'utils/hooks/useImages'
import { useFetchSnapRoutes } from 'utils/hooks/snapRoute/useFetchSnapRoute'
import { useFetchLikedPost } from 'utils/hooks/likedPost/useFetchLikedPost'
import {
  useSaveDislikedPost,
  useSaveLikedPost,
} from 'utils/hooks/likedPost/useSaveLikedPost'
import {
  useFetchPosts,
  useFetchUnseenPosts,
} from 'utils/hooks/post/useFetchPost'
import { useIsZoom } from 'utils/hooks/useIsZoom'

import { useModalScrollLock } from 'utils/hooks/useModalScrollLock'
import { Zoom } from '@/components/templates/Zoom'
import { useAuth, useAuthLister } from 'utils/hooks/auth/useAuth'
import { useSlidShow } from 'utils/hooks/anim/useSlideShow'

const home: NextPage = () => {
  const { isActive, isLastActive, pathHistory } = useCustomRouter()
  const { mutate: saveLikedPost } = useSaveLikedPost()
  const { mutate: saveDislikedPost } = useSaveDislikedPost()
  const { isZoom, handleSetIsZoom } = useIsZoom()
  const { images, page, direction, variants, onDragEnd, handleSetImages } =
    useSlidShow()

  const { userId } = useAuthLister()
  const { data: posts } = useFetchUnseenPosts(userId)
  useEffect(() => {
    console.log('posts', posts)
  }, [posts])

  useModalScrollLock({ isZoom })

  const submitLikedPostHandler = async (userId: string, postId: string) => {
    saveLikedPost(
      {
        userId: userId,
        postId: postId,
      },
      {
        onSuccess: () => console.log('success'),
        onError: () => console.log('error'),
      },
    )
  }

  const handleSwipeLike = async (postId: string, func?: () => void) => {
    if (!userId) return
    await submitLikedPostHandler(userId, postId)

    if (func) {
      func()
    }
  }

  const handleSwipeBad = (func?: () => void) => {
    if (func) {
      func()
    }
  }

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
      isZoom={isZoom}
      isActive={isActive}
      isLastActive={isLastActive}
      pathHistory={pathHistory}
      handleSetIsZoom={handleSetIsZoom}
      handleSwipeLike={handleSwipeLike}
      handleSwipeBad={handleSwipeBad}
      images={images}
      page={page}
      direction={direction}
      variants={variants}
      onDragEnd={onDragEnd}
      handleSetImages={handleSetImages}
    />
  )
}

export default home
