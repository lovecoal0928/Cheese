import { Address } from './Address'

export type Post = {
  postId: string
  userId: string
  title: string
  comment?: string
  postedAt: string
  postImages: PostImageList[]
  address: Address
}

export type PostImageList = {
  postImageId: string
  imagePath: string
  imageTags: ImageTag[]
}

export type ImageTag = {
  tagId: string
  name: string
}
