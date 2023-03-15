import { NextPage } from 'next'
import React from 'react'
import { List } from '@/components/templates/List'

const list: NextPage = () => {
  const data = [{ title: '', address: '', src: '' }]
  return <List data={data} />
}

export default list
