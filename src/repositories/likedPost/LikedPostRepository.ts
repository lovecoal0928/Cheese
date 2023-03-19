import { Post } from 'types/entities/Post'
import { LikedPost } from 'types/entities/LikedPost'

export interface LikeRepository {
  findAll: (userId: string) => Promise<Post[]>
  save: (likedPost: LikedPost) => Promise<void>
}
