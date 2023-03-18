import { PostRepository } from './PostReppository'
import { ImageTag, Post, PostImageList } from 'types/entities/Post'
import {
  ImageTagReturnType,
  PostImageReturnType,
  PostReturnType,
  postMapper,
} from './PostMapper'

class PostRepositoryImpl implements PostRepository {
  public findAll = async (): Promise<Post[]> => {
    const res = await postMapper.findAll()
    return res?.map(convert) ?? []
  }
  public findById = async (id: string): Promise<Post | undefined> => {
    const res = await postMapper.findById(id)
    if (!res) return undefined
    return convert(res)
  }
}

export const postRepository = new PostRepositoryImpl()

const convert = (res: PostReturnType): Post => {
  return {
    postId: res.post_id,
    userId: res.user_id,
    title: res.title,
    comment: res.comment ?? undefined,
    postedAt: res.posted_at,
    address: {
      addressId: res.address.address_id,
      latitude: res.address.latitude,
      longitude: res.address.longitude,
    },
    postImages: res.post_images.map(convertPostImage),
  }
}

const convertPostImage = (res: PostImageReturnType): PostImageList => {
  return {
    postImageId: res.post_image_id,
    imagePath: res.image_path,
    imageTags: res.image_tags.map(convertImageTag),
  }
}

const convertImageTag = (res: ImageTagReturnType): ImageTag => {
  return {
    name: res.name,
  }
}
