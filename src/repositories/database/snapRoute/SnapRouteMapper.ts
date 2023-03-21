import { SnapRoute } from 'types/entities/SnapRoute'
import { SnapRouteReturnType } from './SnapRouteRepositoryImpl'
import { postMapper } from 'repositories/database/post/PostMapper'

class SnapRouteMapper {
  public findAll = (res: SnapRouteReturnType[] | null): SnapRoute[] => {
    return res?.map(this.convert) ?? []
  }
  private convert = (res: SnapRouteReturnType): SnapRoute => {
    return {
      snapRouteId: res.snap_route_id,
      title: res.title,
      posts: postMapper.findAll(res.posts),
    }
  }
}

export const snapRouteMapper = new SnapRouteMapper()
