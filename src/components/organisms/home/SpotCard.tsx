import { Card } from '@/components/atoms/Card'
import { Flex } from '@/components/atoms/Flex'
import { Image } from '@/components/atoms/Image'
import { Typography } from '@/components/atoms/Typography'
import React from 'react'
import { PostImage } from 'types/entities/Post'
import { Styles } from 'types/index'

type Props = {
  title: string
  postImages: PostImage[]
  comment: string
  handleSetImage: (src: string) => void
  image: string
}

export const SpotCard = (props: Props) => {
  const { title, postImages, comment, image,handleSetImage } = props
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <Image alt="スポット画像" src={image} />
      <Flex>
        {postImages.map((value:PostImage,index:number) => (
          <Image alt={"写真"} key={index} src={value.imagePath} width={30} height={30} onClick={()=>handleSetImage(value.imagePath)}/>
        ))}
      </Flex>
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
    minHeight: '90vh',
  },
  title: {
    fontSize: 'bold',
  },
}
