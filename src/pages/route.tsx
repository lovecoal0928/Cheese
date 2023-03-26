import { Route } from '@/components/templates/Route'
import { NextPage } from 'next'
import React from 'react'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'

const route: NextPage = () => {
    const { isActive, isLastActive,pathHistory } = useCustomRouter()
  return (
    <Route
      isActive={isActive}
      isLastActive={isLastActive}
      pathHistory={pathHistory}
    />
  )
}

export default route
