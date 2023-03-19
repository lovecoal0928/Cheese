import { Post } from 'types/entities/Post'

export interface LikeRepository {
  findByUserId: (userId: string) => Promise<Post[]>
}
