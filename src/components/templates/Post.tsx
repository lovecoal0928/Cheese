import React from 'react'
import { SpotCard } from '../organisms/home/SpotCard'
import { SwipeButtons } from '../organisms/home/SwipeButtons'
import { BottomNav } from '../organisms/commons/BottomNav'
import { Flex } from '../atoms/Flex'
import { PostHeader } from '../organisms/post/PostHeader'
import { PostForm } from '../organisms/post/PostForm'

export const Post = () => {
  return (
    <>
      <PostHeader />
      <PostForm />
    </>
  )
}

