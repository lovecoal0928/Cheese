import { Tables, supabase } from 'plugins/supabse'

export class PostMapper {
  public findAll = async () => {
    const { data } = await this.selectQueryBuilder().returns<PostReturnType[]>()
    return data
  }

  public findById = async (postId: string) => {
    const { data } = await this.selectQueryBuilder()
      .eq('post_id', postId)
      .single()
    return data as PostReturnType | undefined
  }

  public findByUserId = async (userId: string) => {
    return (await this.selectQueryBuilder().eq('user_id', userId)).data
  }

  private selectQueryBuilder = () => {
    return supabase.from('posts').select(`
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
        `)
  }
}

export const postMapper = new PostMapper()

export type PostReturnType = Tables['posts']['Row'] & {
  post_images: PostImageReturnType[]
  address: AddressReturnType
}
export type PostImageReturnType = Tables['post_images']['Row'] & {
  image_tags: ImageTagReturnType[]
}
export type ImageTagReturnType = Tables['image_tags']['Row']
export type AddressReturnType = Tables['addresses']['Row']
