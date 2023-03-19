import { Tables } from 'plugins/supabse'
import { ImageTag, Post, PostImage } from 'types'
import {
  ImageTagReturnType,
  PostImageReturnType,
  PostReturnType,
} from './PostRepositoryImpl'

export class PostMapper {
  public findAll = (res: PostReturnType[] | null): Post[] => {
    return res?.map(this.convert) ?? []
  }

  public findById = (res: PostReturnType | null): Post | undefined => {
    if (!res) return undefined
    return this.convert(res)
  }

  public save = (post: Post): Tables['posts']['Insert'] => {
    return {
      user_id: post.userId,
      title: post.title,
      comment: post.comment,
      posted_at: post.postedAt,
      post_id: post.postId,
    }
  }

  public saveImage = (post: Post): Tables['post_images']['Insert'][] => {
    return post.postImages.map((postImage) => {
      return {
        post_image_id: postImage.postImageId,
        image_path: postImage.imagePath,
        post_id: post.postId,
      }
    })
  }

  public saveImageTag = (post: Post): Tables['image_tags']['Insert'][] => {
    return post.postImages.flatMap((postImage) => {
      return postImage.imageTags.map((imageTag) => {
        return {
          name: imageTag.name,
          post_image_id: postImage.postImageId,
          tag_id: imageTag.tagId,
        }
      })
    })
  }

  public saveAddress = (post: Post): Tables['addresses']['Insert'] => {
    return {
      address_id: post.address.addressId,
      latitude: post.address.latitude,
      longitude: post.address.longitude,
      post_id: post.postId,
    }
  }

  private convert = (res: PostReturnType): Post => {
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
      postImages: res.post_images.map(this.convertPostImage),
    }
  }

  private convertPostImage = (res: PostImageReturnType): PostImage => {
    return {
      postImageId: res.post_image_id,
      imagePath: res.image_path,
      imageTags: res.image_tags.map(this.convertImageTag),
    }
  }

  private convertImageTag = (res: ImageTagReturnType): ImageTag => {
    return {
      name: res.name,
      tagId: res.tag_id,
    }
  }
}
export const postMapper = new PostMapper()
