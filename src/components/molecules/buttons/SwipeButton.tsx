import React, { CSSProperties } from 'react'
import { Styles } from 'types/index'
import { Button } from '../../atoms/Button'
import { Image } from '../../atoms/Image'

type SwipeButton = {
  src: string
  alt: string
}
export const SwipeButton = (props: SwipeButton) => {
  const { src, alt } = props
  return (
    <Button style={style.button}>
      <Image src={src} alt={alt} style={style.image}/>
    </Button>
  )
}
const style:Styles={
  button:{
    padding:"10px"
  },
  image:{
    padding:"10px"
  }
}
