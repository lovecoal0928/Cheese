import { postMapper } from 'repositories/database/post/PostMapper'
import { LikePostReturnType } from './LikedPostRepositoryImpl'
import { Post } from 'types/entities/Post'
import { Tables } from 'plugins/supabse'
import { LikedPost } from 'types/entities/LikedPost'
import { DislikedPost } from 'types/entities/DisLikedPost'

class LikedPostMapper {
  public findAll = (res: LikePostReturnType[]): Post[] => {
    return res.map(this.convert)
  }

  public save = (likedPost: LikedPost): Tables['like_posts']['Insert'] => {
    return {
      post_id: likedPost.postId,
      user_id: likedPost.userId,
      liked_at: likedPost.likedAt,
    }
  }
  public saveDislike = (
    likedPost: DislikedPost,
  ): Tables['dislike_posts']['Insert'] => {
    return {
      post_id: likedPost.postId,
      user_id: likedPost.userId,
      disliked_at: likedPost.dislikedAt,
    }
  }

  private convert = (res: LikePostReturnType): Post => {
    return postMapper.findOne(res.post)
  }
}

export const likedPostMapper = new LikedPostMapper()
