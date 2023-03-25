import { PostRepository } from './PostReppository'
import { Post } from 'types/entities/Post'
import { postMapper } from './PostMapper'
import { Tables, supabase } from 'plugins/supabse'

class PostRepositoryImpl implements PostRepository {
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

  public findAll = async (): Promise<Post[]> => {
    const { data, error } = await this.selectQueryBuilder().returns<
      PostReturnType[]
    >()
    if (error) throw error
    if (!data) return []
    return postMapper.findAll(data)
  }
  public findById = async (postId: string): Promise<Post | undefined> => {
    const { data, error } = await this.selectQueryBuilder()
      .eq('post_id', postId)
      .single()
    if (error) throw error
    if (!data) return undefined
    return postMapper.findOne(data as PostReturnType)
  }

  public findByUserId = async (userId: string): Promise<Post[]> => {
    const { data, error } = await this.selectQueryBuilder()
      .eq('user_id', userId)
      .returns<PostReturnType[]>()
    if (error) throw error
    if (!data) return []
    return postMapper.findAll(data)
  }

  public findByExcludeIds = async (
    postIds: string[],
    userId: string,
  ): Promise<Post[]> => {
    const { data, error } = await this.selectQueryBuilder()
      .not('post_id', 'in', `(${postIds.join(',')})`)
      .neq('user_id', userId)
      .returns<PostReturnType[]>()
    if (error) throw error
    if (!data) return []
    return postMapper.findAll(data)
  }

  public save = async (post: Post): Promise<void> => {
    await supabase.from('posts').insert(postMapper.save(post))
    await supabase.from('addresses').insert(postMapper.saveAddress(post))
    await supabase.from('post_images').insert(postMapper.saveImage(post))
    await supabase.from('image_tags').insert(postMapper.saveImageTag(post))
    return
  }
}

export const postRepository = new PostRepositoryImpl()

export type PostReturnType = Tables['posts']['Row'] & {
  post_images: PostImageReturnType[]
  address: AddressReturnType
}
export type PostImageReturnType = Tables['post_images']['Row'] & {
  image_tags: ImageTagReturnType[]
}
export type ImageTagReturnType = Tables['image_tags']['Row']
export type AddressReturnType = Tables['addresses']['Row']
