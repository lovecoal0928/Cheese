import React, { CSSProperties } from 'react'
import { Styles } from 'types/index'
import { Button } from '../../atoms/Button'
import { Image } from '../../atoms/Image'

type SwipeButton = {
  src: string
  alt: string
  onClick: () => void
}
export const SwipeButton = (props: SwipeButton) => {
  const { src, alt, onClick } = props
  return (
    <Button style={style.button} onClick={onClick}>
      <Image src={src} alt={alt} style={style.image} width={30} height={30} />
    </Button>
  )
}
const style: Styles = {
  button: {
    padding: '10px',
  },
  image: {
    padding: '10px',
  },
}
