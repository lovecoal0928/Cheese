import { NextPage } from 'next'
import React from 'react'
import { List } from '@/components/templates/List'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'
import { useFetchPosts } from 'utils/hooks/post/useFetchPost'

const list: NextPage = () => {
  const { isActive, isLastActive, pathHistory } = useCustomRouter()

  const { data: posts } = useFetchPosts()

  return (
    <List
      data={posts!}
      isActive={isActive}
      isLastActive={isLastActive}
      pathHistory={pathHistory}
    />
  )
}

export default list
