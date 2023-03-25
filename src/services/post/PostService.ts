import { Post } from 'types/entities/Post'

export interface PostService {
  findAll: () => Promise<Post[]>
  findUnseen: (userId: string) => Promise<Post[]>
  findById: (id: string) => Promise<Post>
  findByUserId: (userId: string) => Promise<Post[]>
  save: (post: Post) => Promise<void>
}
