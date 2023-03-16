import { NextPage } from 'next'
import { Home } from '@/components/templates/Home'
import React from 'react'
import { useRouter } from 'next/router'
import { Post } from 'types'
import { handlePushRouter } from 'utils/libs/handlePushRouter'
import { PAGE_NAME } from 'constants/PathName'

const home: NextPage = () => {
  const router = useRouter()
  const PostData: Post[] = [{ title: '', address: '', src: '', comment: '' }]

  return (
    <Home
      data={PostData}
      handlePushRouter={(pathname) => handlePushRouter(router, pathname)}
      PAGE_NAME={PAGE_NAME}
    />
  )
}

export default home
