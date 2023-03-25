import { useMutation } from '@tanstack/react-query'
import { PostFactory, PostParams } from 'factories/postFactory'
import { postService } from 'services/post/PostServiceImpl'

export const useSavePost = () => {
  return {
    ...useMutation((params: PostParams) =>
      postService.save(PostFactory.create(params)),
    ),
  }
}
