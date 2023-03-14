import React from 'react'
import NextImage from 'next/image'

type Props={
    alt:string
    src:string
    width?:number
    height?:number
}
export const Image = (props:Props) => {
  return (
    <div>
      <NextImage {...props}/>
    </div>
  )
}
