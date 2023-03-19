import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { snapRouteRepository } from 'repositories/snapRoute/SnapRouteRepositoryImpl'

import { SnapRoute } from 'types/entities/SnapRoute'

const QUERY_KEYS = {
  ALL: 'ALL_SNAP_ROUTES',
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
