import { Post } from 'types/entities/Post'
import { LikeRepository } from './LikedPostRepository'
import { Tables, supabase } from 'plugins/supabse'
import { PostReturnType } from 'repositories/database/post/PostRepositoryImpl'
import { likedPostMapper } from './LikedPostMapper'
import { LikedPost } from 'types/entities/LikedPost'
import { DislikedPost } from 'types/entities/DisLikedPost'

class LikedPostRepositoryImpl implements LikeRepository {
  private selectQueryBuilderForLike = () => {
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
  private selectQueryBuilderForDislike = () => {
    return supabase.from('dislike_posts').select(`
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
    const { data, error } = await this.selectQueryBuilderForLike().eq(
      'user_id',
      userId,
    )
    if (error) throw error
    if (!data) return []
    return likedPostMapper.findAll(data as LikePostReturnType[])
  }
  public findLikedPostIds = async (userId: string): Promise<string[]> => {
    const { data, error } = await this.selectQueryBuilderForLike().eq(
      'user_id',
      userId,
    )
    if (error) throw error
    if (!data) return []
    return data.map((d) => d.post_id)
  }
  public findDislikedPostIds = async (userId: string): Promise<string[]> => {
    const { data, error } = await this.selectQueryBuilderForDislike().eq(
      'user_id',
      userId,
    )
    if (error) throw error
    if (!data) return []
    return data.map((d) => d.post_id)
  }

  public save = async (likedPost: LikedPost): Promise<void> => {
    const { error } = await supabase
      .from('like_posts')
      .insert(likedPostMapper.save(likedPost))
    if (error) throw error
    return
  }
  public saveDislike = async (dislikedPost: DislikedPost): Promise<void> => {
    const { error } = await supabase
      .from('dislike_posts')
      .insert(likedPostMapper.saveDislike(dislikedPost))
    if (error) throw error
    return
  }
}

export const likedPostRepository = new LikedPostRepositoryImpl()

export type LikePostReturnType = Tables['like_posts']['Row'] & {
  post: PostReturnType
}
