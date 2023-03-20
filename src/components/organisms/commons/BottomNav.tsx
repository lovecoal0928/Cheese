import { Nav } from '@/components/atoms/Nav'
import { NavButton } from '@/components/molecules/buttons/NavButton'
import React from 'react'
import { PathName, Styles } from 'types/index'

type Props = {
  isActive: (pathname: string) => boolean
  handlePushRouter: (pathname: string) => void
  PAGE_NAME: PathName[]
}
export const BottomNav = (props: Props) => {
  const { handlePushRouter, isActive, PAGE_NAME } = props
  return (
    <Nav style={style.nav}>
      {PAGE_NAME.map(
        (
          value: PathName,
          index: number,
        ) => (
          <>
            {value.src && (
              <NavButton
                src={isActive(`/${value.path}`) ? value.selected : value.src}
                handlePushRouter={handlePushRouter}
                pathname={value.path}
                label={value.label}
                key={index}
              />
            )}
          </>
        ),
      )}
    </Nav>
  )
}
const style: Styles = {
  nav: {
    display: 'flex',
    width: '100%',
    position: 'fixed',
    justifyContent: 'space-around',
    left: 0,
    bottom: 0,
    height: '80px',
    background: '#fff',
  },
}
