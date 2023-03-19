import { Button } from '@/components/atoms/Button'
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
  const { title, postImages, comment, image, handleSetImage } = props
  const a = ["/paca.png","/mapicon.png","/paca.png"]
  return (
    <Card style={styles.card}>
      <Flex direction="column">
        <Typography style={styles.title}>{title}</Typography>
        <Button onClick={()=>{}} style={styles.map_button}><Typography style={styles.map}>地図</Typography></Button>
      </Flex>
      <Flex style={styles.images}>
        {postImages.map((value: PostImage, index: number) => (
          <Image
            alt={'写真'}
            key={index}
            // src={value.imagePath}
            src={a[index]}
            // onClick={() => handleSetImage(value.imagePath)}
            onClick={() => handleSetImage(a[index])}
            style={styles.image}
          />
        ))}
      </Flex>
      <Image alt="スポット画像" src={image} style={styles.selected_image}/>
      <Typography style={styles.comment}>{comment}</Typography>
    </Card>
  )
}

const styles: Styles = {
  card: {
    minHeight: '90vh',
    width: '90%',
    top: '2%',
    left: '4.5%',
    background: '#fff',
    position: 'absolute',
    borderRadius: '18px',
    padding: '15px',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    padding:"10px 0 2px 0"
  },
  map_button:{
    backgroundColor:"#fff",
    border:"none",
    width: "26px",
    padding: 0,
  },
  map:{
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "13px",
    color:"#666",
    margin:"0px 0px 10px 0px",
    display:"inline-block"
  },
  images:{
  },
  image:{
    background:"#000",
    objectFit:"cover",
    borderRadius: "4px",
    margin:" 0 15px 15px 0",
    width:"20%",
    height:"60px"
  },
  selected_image:{
    background:"#000",
    objectFit:"cover",
    width:"100%",
    height:"300px",
    borderRadius: "8px"
  },
  comment:{
    margin:"10px 0",
    display:"inline-block"

  }
}
