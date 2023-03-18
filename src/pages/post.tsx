import { NextPage } from 'next'
import React from 'react'
import { Post } from '@/components/templates/Post'
import { useFetchPosts } from 'utils/hooks/post/useFetchPost'

const post: NextPage = () => {
  const {
    data: posts,
    refetch: refetchPosts,
    isLoading: isFetchPostLoading,
  } = useFetchPosts()

  React.useEffect(() => {
    console.log(posts)
  }, [posts])

  return <Post />
}

export default post
