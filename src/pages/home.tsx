import { NextPage } from 'next'
import { Home } from '@/components/templates/Home'
import React from 'react'
import { useRouter } from 'next/router'
import { Post } from 'types'
import { handlePushRouter } from 'utils/libs/handlePushRouter'

const home: NextPage = () => {
  const router = useRouter()
  const PostData: Post[] = [{ title: '', address: '', src: '', comment: '' }]
  const pageName = [
    { path: 'home', label: 'ホーム', src: '' },
    { path: 'map', label: 'マップ', src: '' },
    { path: 'post', label: '投稿', src: '' },
    { path: 'route', label: 'ルート', src: '' },
    { path: 'list', label: 'リスト', src: '' },
  ]
  return (
    <Home
      data={PostData}
      handlePushRouter={(pathname) => handlePushRouter(router, pathname)}
      pageName={pageName}
    />
  )
}

export default home
