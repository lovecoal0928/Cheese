import { Post } from 'types/entities/Post'
import { LikeRepository } from './LikedPostRepository'
import { Tables, supabase } from 'plugins/supabse'
import { PostReturnType } from 'repositories/post/PostRepositoryImpl'
import { likedPostMapper } from './LikedPostMapper'
import { LikedPost } from 'types/entities/LikedPost'

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
    const { data, error } = await this.selectQueryBuilder().eq(
      'user_id',
      userId,
    )
    if (error) throw error
    if (!data) return []
    return likedPostMapper.findAll(data as LikePostReturnType[])
  }
  public save = async (likedPost: LikedPost): Promise<void> => {
    const { error } = await supabase
      .from('like_posts')
      .insert(likedPostMapper.save(likedPost))
    if (error) throw error
    return
  }
}

export const likedPostRepository = new LikedPostRepositoryImpl()

export type LikePostReturnType = Tables['like_posts']['Row'] & {
  post: PostReturnType
}
