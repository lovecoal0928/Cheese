import { Nav } from '@/components/atoms/Nav'
import { NavButton } from '@/components/molecules/NavButton'
import React from 'react'

type BottomNav = {
    path:string
}

export const BottomNav = (props: BottomNav) => {
  return (
    <Nav>
      <NavButton src="" label='マップ'/>
      <NavButton src="" label='マップ'/>
      <NavButton src="" label='ホーム'/>
      <NavButton src="" label='投稿'/>
      <NavButton src="" label='一覧'/>
    </Nav>
  )
}
