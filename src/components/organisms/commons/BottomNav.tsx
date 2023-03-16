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
    <Nav style={style}>
      {PAGE_NAME.map(
        (
          value: { path: string; label: string; src: string },
          index: number,
        ) => (
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
  Nav: {
    padding: '10px',
  },
}
