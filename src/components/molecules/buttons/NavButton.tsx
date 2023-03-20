import React, { CSSProperties } from 'react'
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'
import { Styles } from 'types'

type NavButton = {
  src: string
  label: string
  handlePushRouter:(pathname:string)=>void
  pathname:string
}

export const NavButton = (props: NavButton) => {
  const { src, label,handlePushRouter,pathname} = props

  return (
    <Button style={styles.button} onClick={()=>handlePushRouter(pathname)}>
      <Image alt={label} src={src} width={30} height={30} style={styles.image}/>
    </Button>
  )
}

const styles:Styles={
  button:{
    background:"#fff",
    border:"none",
  },
  image:{
    // padding:"10px"
  },
}
