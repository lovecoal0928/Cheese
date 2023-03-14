import React from 'react'
import { Button } from '../atoms/Button'
import { Image } from '../atoms/Image'
import { Label } from '../atoms/Label'

type SwipeButton={
    src:string
}
export const SwipeButton = ({src}:SwipeButton) => {
  return (
    <Label>
        <Image src={src} width={50} height={50} alt={"swipe_button"}/>
      <Button disabled />
    </Label>
  )
}
