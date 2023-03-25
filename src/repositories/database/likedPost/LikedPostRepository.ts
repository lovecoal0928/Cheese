import { Post } from 'types/entities/Post'
import { LikedPost } from 'types/entities/LikedPost'
import { DislikedPost } from 'types/entities/DisLikedPost'

export interface LikeRepository {
  findAll: (userId: string) => Promise<Post[]>
  findLikedPostIds: (userId: string) => Promise<string[]>
  findDislikedPostIds: (userId: string) => Promise<string[]>
  save: (likedPost: LikedPost) => Promise<void>
  saveDislike: (likedPost: DislikedPost) => Promise<void>
}
