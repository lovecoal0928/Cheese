import { Nav } from '@/components/atoms/Nav'
import { NavButton } from '@/components/molecules/buttons/NavButton'
import React from 'react'
import { Styles } from 'types/index'

type Props={
  handlePushRouter:(pathname:string)=>void
}
export const BottomNav = (props:Props) => {
  const {handlePushRouter} = props
  return (
    <Nav style={style}>
      <NavButton src=""  handlePushRouter={handlePushRouter} pathname="/map" label='マップ'/>
      <NavButton src=""  handlePushRouter={handlePushRouter} pathname="/route" label='ルート'/>
      <NavButton src=""  handlePushRouter={handlePushRouter} pathname="/home" label='ホーム'/>
      <NavButton src=""  handlePushRouter={handlePushRouter} pathname="/post" label='投稿'/>
      <NavButton src=""  handlePushRouter={handlePushRouter} pathname="/list" label='一覧'/>
    </Nav>
  )
}
  const style:Styles = {
    Nav:{
      padding:"10px"
    }
  }
