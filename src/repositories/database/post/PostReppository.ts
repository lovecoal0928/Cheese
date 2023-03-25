import { Post } from 'types/entities/Post'

export interface PostRepository {
  findAll: () => Promise<Post[]>
  findById: (id: string) => Promise<Post | undefined>
  findByUserId: (userId: string) => Promise<Post[]>
  findByExcludeIds: (postIds: string[], userId: string) => Promise<Post[]>
  save: (post: Post) => Promise<void>
}
