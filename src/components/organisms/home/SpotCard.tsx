import { Card } from '@/components/atoms/Card'
import { Flex } from '@/components/atoms/Flex'
import { Image } from '@/components/atoms/Image'
import { Typography } from '@/components/atoms/Typography'
import React from 'react'
import { Styles } from 'types/index'

type Props = {
  title: string
  address: string
  src: string
  comment: string
}

export const SpotCard = (props: Props) => {
  const { title, address, src, comment } = props
  return (
    <Card style={styles.card}>
      <Flex direction="column">
        <Typography style={styles.title}>{title}</Typography>
        <Typography style={styles.address}>{address}</Typography>
      </Flex>
      <Image alt="スポット画像" src={src} />
      <Typography style={styles.comment}>{comment}</Typography>
    </Card>
  )
}

const styles: Styles = {
  card: {
    padding: '10px',
    borderWidth: '2px 2px 2px 2px',
    borderStyle: 'solid',
    borderColor: '#333333',
    minHeight:"90vh"

  },
  title: {
    fontSize: 'bold',
  },
  address: {
    color: '#777',
  },
}
