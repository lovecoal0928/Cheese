import { Tables, supabase } from 'plugins/supabse'

export type PostReturnType = Tables['posts']['Row'] & {
  post_images: PostImageReturnType[]
  address: AddressReturnType
}
export type PostImageReturnType = Tables['post_images']['Row'] & {
  image_tags: ImageTagReturnType[]
}
export type ImageTagReturnType = Tables['image_tags']['Row']
export type AddressReturnType = Tables['addresses']['Row']

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

  public save = async (post: Tables['posts']['Insert']) => {
    await supabase.from('posts').insert(post)
    return
  }

  public saveImage = async (postImage: Tables['post_images']['Insert']) => {
    await supabase.from('post_images').insert(postImage)
    return
  }

  public saveImageTag = async (imageTag: Tables['image_tags']['Insert']) => {
    await supabase.from('image_tags').insert(imageTag)
    return
  }

  public saveAddress = async (address: Tables['addresses']['Insert']) => {
    await supabase.from('addresses').insert(address)
    return
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
