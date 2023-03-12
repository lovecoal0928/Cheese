import React from 'react'
import Image from 'next/image'
import { Button } from '../atoms/Button'

type NavButton = {
  src: string
  label:string
}

export const NavButton = (props: NavButton) => {
  const { src,label } = props
  return (
    <label>
      <Image width={50} height={50} src={src} alt="NavButton" />
      <Button label={label}/>
    </label>
  )
}
