import { Nav } from '@/components/atoms/Nav'
import { NavButton } from '@/components/molecules/buttons/NavButton'
import React from 'react'
import { Styles } from 'types/index'

type Props={
  handlePushRouter:(pathname:string)=>void
  pageName:{ path: string; label: string; src:string }[]
}
export const BottomNav = (props:Props) => {
  const {handlePushRouter,pageName} = props
  return (
    <Nav style={style}>
      {pageName.map((value:{path:string,label:string,src:string},index:number)=>
        <NavButton src={value.src}  handlePushRouter={handlePushRouter} pathname={value.path} label={value.label}/>
      )}
    </Nav>
  )
}
  const style:Styles = {
    Nav:{
      padding:"10px"
    }
  }
