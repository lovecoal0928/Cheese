import { NextPage } from 'next'
import React from 'react'
import { List } from '@/components/templates/List'

const list: NextPage = () => {
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
        addressesId: '',
        longitude: 10,
        latitude: 20,
      },
    },
  ]
  return <List data={data} />
}

export default list
