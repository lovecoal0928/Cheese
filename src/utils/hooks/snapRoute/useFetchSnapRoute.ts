import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { snapRouteRepository } from 'repositories/database/snapRoute/SnapRouteRepositoryImpl'

import { SnapRoute } from 'types/entities/SnapRoute'

const QUERY_KEYS = {
  ALL: 'all-snap-routes',
}

export const useFetchSnapRoutes = (
  queryOptions?: UseQueryOptions<SnapRoute[]>,
) => {
  return useQuery<SnapRoute[]>(
    [QUERY_KEYS.ALL],
    () => snapRouteRepository.findAll(),
    {
      ...queryOptions,
    },
  )
}
