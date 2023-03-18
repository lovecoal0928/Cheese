import { useMutation } from '@tanstack/react-query'
import { PostFactory, PostParams } from 'factories/postFactory'
import { postRepository } from 'repositories/post/PostRepositoryImpl'

export const useSavePost = () => {
  return {
    ...useMutation((params: PostParams) =>
      postRepository.save(PostFactory.create(params)),
    ),
  }
}
