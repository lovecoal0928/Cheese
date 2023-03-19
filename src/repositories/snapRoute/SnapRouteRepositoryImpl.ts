import { SnapRoute } from 'types/entities/SnapRoute'
import { SnapRouteRepository } from './SnapRouteRepository'
import { Tables, supabase } from 'plugins/supabse'
import { PostReturnType } from 'repositories/post/PostRepositoryImpl'
import { snapRouteMapper } from './SnapRouteMapper'

class SnapRouteRepositoryImpl implements SnapRouteRepository {
  private selectQueryBuilder = () => {
    return supabase.from('snap_routes').select(`
            *,
            posts (
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
            )
            `)
  }

  public findAll = async (): Promise<SnapRoute[]> => {
    const { data } = await this.selectQueryBuilder().returns<
      SnapRouteReturnType[]
    >()
    if (!data) return []
    return snapRouteMapper.findAll(data)
  }
  public findById = async (
    snapRouteId: string,
  ): Promise<SnapRoute | undefined> => {
    return undefined
  }
  public save = async (snapRoute: SnapRoute): Promise<void> => {
    return
  }
}

export const snapRouteRepository = new SnapRouteRepositoryImpl()

export type SnapRouteReturnType = Tables['snap_routes']['Row'] & {
  posts: PostReturnType[]
}
