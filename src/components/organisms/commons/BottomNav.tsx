import { Nav } from '@/components/atoms/Nav'
import { NavButton } from '@/components/molecules/buttons/NavButton'
import React from 'react'
import { Styles } from 'types/index'

type Props = {
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: { path: string; label: string; src: string }[]
}
export const BottomNav = (props: Props) => {
  const { handlePushRouter, PAGE_NAME } = props
  return (
    <Nav style={style.nav}>
      {PAGE_NAME.map(
        (
          value: { path: string; label: string; src: string },
          index: number,
        ) => value.src &&(
          <NavButton
            src={value.src}
            handlePushRouter={handlePushRouter}
            pathname={value.path}
            label={value.label}
            key={index}
          />
        ),
      )}
    </Nav>
  )
}
const style: Styles = {
  nav: {
    display: "flex",
    width:"100%",
    position:"fixed",
    justifyContent: "space-around",
    left:0,
    bottom:0,
    height:"100px",
    background:"#fff"
  },
}
