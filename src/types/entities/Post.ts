import { Address } from './Address'

export type Post = {
  postId: string
  userId: string
  title: string
  comment: string
  postedAt: string
  updatedAt: string
  postImages: PostImages[]
  address: Address
}

export type PostImages = {
  postImageId: string
  imagePath: string
  imageTags: ImageTag[]
}

export type ImageTag = {
  tagId: string
  name: string
}
