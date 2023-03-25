import React, { CSSProperties } from 'react'
import NextImage from 'next/image'
import { Flex } from './Flex'

type Props={
    alt:string
    src:string
    quality?:number
    style?:CSSProperties
    width?:number
    height?:number
    onClick?:()=>void
}
export const Image = (props:Props) => {
    const{width=100,height=100} = props
  return (
      <NextImage {...props} width={width} height={height}/>
  )
}
