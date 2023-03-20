import { NextPage } from 'next'
import React from 'react'
import { List } from '@/components/templates/List'
import { useCustomRouter } from 'utils/hooks/useCustomRouter'


const list: NextPage = () => {
  const { handlePushRouter,isActive } = useCustomRouter()

  const data = [
    {
      postId: '',
      userId: '',
      title: 'タイトル',
      comment: 'コメント',
      postedAt: '',
      updatedAt: '',
      postImages: [
        {
          postImageId: '',
          imagePath: '',
          imageTags: [
            {
              tagId: '',
              name: 'タグ',
            },
          ],
        },
      ],
      address: {
        addressId: '',
        longitude: 10,
        latitude: 20,
      },
    },
  ]
  return <List data={data} handlePushRouter={handlePushRouter} isActive={isActive}/>
}

export default list
