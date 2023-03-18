import { PostRepository } from './PostReppository'
import { ImageTag, Post, PostImage } from 'types/entities/Post'
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
  public save = async (post: Post): Promise<void> => {
    await postMapper.save({
      user_id: post.userId,
      title: post.title,
      comment: post.comment,
      posted_at: post.postedAt,
      post_id: post.postId,
    })
    await postMapper.saveAddress({
      address_id: post.address.addressId,
      latitude: post.address.latitude,
      longitude: post.address.longitude,
      post_id: post.postId,
    })
    await this.saveImages(post.postImages, post.postId)
    return
  }
  private saveImages = async (postImages: PostImage[], postId: string) => {
    postImages.forEach(async (postImage) => {
      await postMapper.saveImage({
        post_image_id: postImage.postImageId,
        image_path: postImage.imagePath,
        post_id: postId,
      })
      postImage.imageTags.forEach(async (imageTag) => {
        await postMapper.saveImageTag({
          name: imageTag.name,
          post_image_id: postImage.postImageId,
          tag_id: imageTag.tagId,
        })
      })
    })
    return
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

const convertPostImage = (res: PostImageReturnType): PostImage => {
  return {
    postImageId: res.post_image_id,
    imagePath: res.image_path,
    imageTags: res.image_tags.map(convertImageTag),
  }
}

const convertImageTag = (res: ImageTagReturnType): ImageTag => {
  return {
    name: res.name,
    tagId: res.tag_id,
  }
}
