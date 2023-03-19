import { useMutation } from '@tanstack/react-query'
import { LikedPostFactory, likedPostParams } from 'factories/LikedPostFactory'
import { likedPostRepository } from 'repositories/likedPost/LikedPostRepositoryImpl'

export const useSaveLikedPost = () => {
  return {
    ...useMutation((params: likedPostParams) =>
      likedPostRepository.save(LikedPostFactory.create(params)),
    ),
  }
}
