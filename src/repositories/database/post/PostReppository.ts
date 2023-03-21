import { Post } from 'types/entities/Post'

export interface PostRepository {
  findAll: () => Promise<Post[]>
  findById: (id: string) => Promise<Post | undefined>
  save: (post: Post) => Promise<void>
}
