import React from 'react'
import { Button } from '../atoms/Button'
import Image from 'next/image'

type SwipeButton={
    src:string
}
export const SwipeButton = ({src}:SwipeButton) => {
  return (
    <label>
        <Image src={src} width={50} height={50} alt={"swipe_button"}/>
      <Button disabled />
    </label>
  )
}
