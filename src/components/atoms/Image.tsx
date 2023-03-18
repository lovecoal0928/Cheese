import React, { CSSProperties } from 'react'
import NextImage from 'next/image'
import { Flex } from './Flex'

type Props={
    alt:string
    src:string
    style?:CSSProperties
    width?:number
    height?:number
}
export const Image = (props:Props) => {
    const {alt,src,width=100,height=100,style} = props
  return (
    <Flex style={style}>
      <NextImage alt={alt} src={src} width={width} height={height}/>
    </Flex>
  )
}
