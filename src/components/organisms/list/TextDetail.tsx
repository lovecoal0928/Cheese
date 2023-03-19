import { Flex } from '@/components/atoms/Flex'
import { Typography } from '@/components/atoms/Typography'
import React from 'react'

type Props = {
  title: string
}
export const TextDetail = (props: Props) => {
  const { title, } = props
  return (
    <Flex direction="column">
      <Typography style={style.title}>{title}</Typography>
    </Flex>
  )
}

const style = {
  title: {},
  address: {},
}
