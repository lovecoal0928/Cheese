import { postMapper } from 'repositories/post/PostMapper'
import { LikePostReturnType } from './LikedPostRepositoryImpl'
import { Post } from 'types/entities/Post'

class LikedPostMapper {
  public findAll = (res: LikePostReturnType[] | null): Post[] => {
    return res?.map(this.convert) ?? []
  }

  private convert = (res: LikePostReturnType): Post => {
    return postMapper.findOne(res.post)
  }
}

export const likedPostMapper = new LikedPostMapper()
