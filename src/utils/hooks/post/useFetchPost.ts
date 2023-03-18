import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { postRepository } from 'repositories/post/PostRepositoryImpl'
import { Post } from 'types/entities/Post'

const QUERY_KEYS = {
  ALL: 'ALL_POSTS',
}

export const useFetchPosts = (queryOptions?: UseQueryOptions<Post[]>) => {
  return useQuery<Post[]>([QUERY_KEYS.ALL], () => postRepository.findAll(), {
    ...queryOptions,
  })
}
