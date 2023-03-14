import React from 'react'
import { Image } from '../atoms/Image'
import { Button } from '../atoms/Button'
import { Label } from '../atoms/Label'

type NavButton = {
  src: string
  label:string
}

export const NavButton = (props: NavButton) => {
  const { src,label } = props
  return (
    <Label>
      <Image width={50} height={50} src={src} alt="NavButton" />
      <Button label={label}/>
    </Label>
  )
}
