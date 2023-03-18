import { NextPage } from 'next'
import { Home } from '@/components/templates/Home'
import React from 'react'
import { useRouter } from 'next/router'
import { Post } from 'types'
import { handlePushRouter } from 'utils/libs/handlePushRouter'
import { PAGE_NAME } from 'constants/PathName'

const home: NextPage = () => {
  const router = useRouter()
  const PostData: Post[] = [{ title: 'タイトル', address: '住所', src: '', comment: 'コメント' }]

  return (
    <Home
      data={PostData}
      handlePushRouter={(pathname) => handlePushRouter(router, pathname)}
      PAGE_NAME={PAGE_NAME}
    />
  )
}

export default home
