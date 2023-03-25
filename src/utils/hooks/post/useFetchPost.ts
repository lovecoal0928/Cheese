import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { postService } from 'services/post/PostServiceImpl'

import { Post } from 'types/entities/Post'

const QUERY_KEYS = {
  ALL: () => 'all-posts',
  ONE: (id: string) => `post-${id}`,
  MY: () => `my-posts`,
  UNSEEN: () => `unseen-posts`,
}

export const useFetchPosts = (queryOptions?: UseQueryOptions<Post[]>) => {
  return useQuery<Post[]>([QUERY_KEYS.ALL()], () => postService.findAll(), {
    ...queryOptions,
  })
}

export const useFetchPost = (
  questionId: string,
  queryOptions?: UseQueryOptions<Post>,
) => {
  return useQuery<Post>(
    [QUERY_KEYS.ONE(questionId)],
    () => postService.findById(questionId),
    {
      ...queryOptions,
    },
  )
}

export const useFetchMyPosts = (
  userId?: string,
  queryOptions?: UseQueryOptions<Post[]>,
) => {
  return useQuery<Post[]>(
    [QUERY_KEYS.MY(), { enabled: Boolean(userId) }],
    () => postService.findByUserId(userId),
    {
      ...queryOptions,
    },
  )
}

export const useFetchUnseenPosts = (
  userId?: string,
  queryOptions?: UseQueryOptions<Post[]>,
) => {
  return useQuery<Post[]>(
    [QUERY_KEYS.UNSEEN(), { enabled: Boolean(userId) }],
    () => postService.findUnseen(userId),
    {
      ...queryOptions,
    },
  )
}
