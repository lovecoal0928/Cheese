import { Post } from 'types/entities/Post'
import { generateTimestamp } from 'utils/libs/generaters/generateTimestamp'
import { generateId } from 'utils/libs/generaters/generateId'

export type PostParams = {
  userId: string
  title: string
  comment?: string
  postedAt: string
  postImages: {
    postImageId: string
    imagePath: string
    imageTags: {
      name: string
    }[]
  }[]
  longitude: number
  latitude: number
}

export const PostFactory = {
  create: (params: PostParams): Post => {
    return {
      postId: generateId(),
      userId: params.userId,
      title: params.title,
      comment: params.comment,
      postedAt: generateTimestamp(),
      address: {
        addressId: generateId(),
        latitude: params.latitude,
        longitude: params.longitude,
      },
      postImages: params.postImages.map((postImage) => {
        return {
          postImageId: generateId(),
          imagePath: postImage.imagePath,
          imageTags: postImage.imageTags.map((imageTag) => {
            return {
              name: imageTag.name,
              tagId: generateId(),
            }
          }),
        }
      }),
    }
  },
}
