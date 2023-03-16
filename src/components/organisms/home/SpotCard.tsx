import { Card } from '@/components/atoms/Card'
import { Image } from '@/components/atoms/Image'
import { Typography } from '@/components/atoms/Typography'
import React from 'react'
import { Styles } from 'types/index'

type Props={
    title:string
    address:string
    src:string
    comment:string
}

export const SpotCard = (props:Props) => {
    const {title,address,src,comment} = props
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <Typography style={styles.address}>{address}</Typography>
      <Image alt='スポット画像' src={src}/>
      <Typography style={styles.comment}>{comment}</Typography>
    </Card>
  )
}

const styles:Styles ={
    card:{
        padding:"10px"
    },
    title:{
        fontSize:"bold"
    },
    address:{
        color:"#777"
    },
}
