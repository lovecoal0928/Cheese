import { Address } from './Address'

export type Post = {
  postId: string
  userId: string
  title: string
  comment?: string
  postedAt: string
  postImages: PostImage[]
  address: Address
}

export type PostImage = {
  postImageId: string
  imagePath: string
  imageTags: ImageTag[]
}

export type ImageTag = {
  tagId: string
  name: string
}
