import { Nav } from '@/components/atoms/Nav'
import { NavButton } from '@/components/molecules/buttons/NavButton'
import React from 'react'
import { Styles } from 'types/style'

type BottomNav = {
    path:string
}

export const BottomNav = (props: BottomNav) => {
  return (
    <Nav style={style}>
      <NavButton src="" label='マップ'/>
      <NavButton src="" label='マップ'/>
      <NavButton src="" label='ホーム'/>
      <NavButton src="" label='投稿'/>
      <NavButton src="" label='一覧'/>
    </Nav>
  )
}
  const style:Styles = {
    Nav:{
      padding:"10px"
    }
  }
