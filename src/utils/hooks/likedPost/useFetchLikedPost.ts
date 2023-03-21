import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { likedPostRepository } from 'repositories/database/likedPost/LikedPostRepositoryImpl'
import { Post } from 'types/entities/Post'

const QUERY_KEYS = {
  ALL: () => 'all-posts',
  MY: (userId: string) => `my-posts-${userId}`,
}

export const useFetchLikedPost = (
  userIs: string,
  queryOptions?: UseQueryOptions<Post[]>,
) => {
  return useQuery<Post[]>(
    [QUERY_KEYS.MY(userIs)],
    () => likedPostRepository.findAll(userIs),
    {
      ...queryOptions,
    },
  )
}
