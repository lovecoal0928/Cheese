import { Post } from 'types/entities/Post'
import { LikeRepository } from './LikedPostRepository'
import { Tables, supabase } from 'plugins/supabse'
import { PostReturnType } from 'repositories/post/PostRepositoryImpl'
import { likedPostMapper } from './LikedPostMapper'

class LikedPostRepositoryImpl implements LikeRepository {
  private selectQueryBuilder = () => {
    return supabase.from('like_posts').select(`
                *,
                post: posts (
                    *,
                    post_images (
                        *,
                        image_tags (
                            *
                        )
                    ),
                    address: addresses (
                        *
                    )
                )
                `)
  }
  public findAll = async (userId: string): Promise<Post[]> => {
    const { data } = await this.selectQueryBuilder().eq('user_id', userId)
    if (!data) return []
    return likedPostMapper.findAll(data as LikePostReturnType[])
  }
}

export const likedPostRepository = new LikedPostRepositoryImpl()

export type LikePostReturnType = Tables['like_posts']['Row'] & {
  post: PostReturnType
}
