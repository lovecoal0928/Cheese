import { Flex } from '@/components/atoms/Flex'
import { Typography } from '@/components/atoms/Typography'
import React from 'react'

type Props = {
  title: string
  address: string
}
export const TextDetail = (props: Props) => {
  const { title, address } = props
  return (
    <Flex direction="column">
      <Typography style={style.title}>{title}</Typography>
      <Typography style={style.address}>{address}</Typography>
    </Flex>
  )
}

const style = {
  title: {},
  address: {},
}
