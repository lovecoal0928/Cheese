import React, { CSSProperties } from 'react'
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'

type NavButton = {
  src: string
  label: string
}

export const NavButton = (props: NavButton) => {
  const { src, label} = props
  return (
    <Button style={style.button}>
      <Image alt={label} src={src} width={30} height={30} style={style.image}/>
    </Button>
  )
}

const style={
  button:{
    padding:"10px"
  },
  image:{
    padding:"10px"
  },
}
