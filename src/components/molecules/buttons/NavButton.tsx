import React, { CSSProperties } from 'react'
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'

type NavButton = {
  src: string
  label: string
  handlePushRouter:(pathname:string)=>void
  pathname:string
}

export const NavButton = (props: NavButton) => {
  const { src, label,handlePushRouter,pathname} = props

  return (
    <Button style={style.button} onClick={()=>handlePushRouter(pathname)}>
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
