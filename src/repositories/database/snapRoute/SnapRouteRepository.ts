import { SnapRoute } from 'types/entities/SnapRoute'

export interface SnapRouteRepository {
  findAll: () => Promise<SnapRoute[]>
  findById: (id: string) => Promise<SnapRoute | undefined>
  save: (snapRoute: SnapRoute) => Promise<void>
}
