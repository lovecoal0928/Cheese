import { Nav } from '@/components/atoms/Nav'
import { NavButton } from '@/components/molecules/buttons/NavButton'
import React, { useState } from 'react'
import { PathName, Styles } from 'types/index'
import { Image } from '@/components/atoms/Image'
import { MotionDiv } from '@/components/atoms/MotionDiv'
import { buttonSlide, navSlide } from 'anim/slide'

type Props = {
  isActive: (pathname: string) => boolean
  isLastActive: (pathname: string) => boolean
  PAGE_NAME: PathName[]
  pathHistory:string[]
}
export const BottomNav = (props: Props) => {
  const { isActive, PAGE_NAME,pathHistory,isLastActive } = props


  return (
    <Nav style={style.nav}>
      <MotionDiv style={style.body}
      variants={navSlide}
      initial={`${pathHistory[0].split("/")[1]}`}
      animate={`${pathHistory[1].split("/")[1]}`}
      exit={`${pathHistory[0].split("/")[1]}`}
      >
        <Image style={style.image} src={"/bottomNav/side.png"} alt="nav" />
        <Image style={style.image} src={"/bottomNav/body.png"} alt="nav" />
        <Image style={style.image} src={"/bottomNav/side.png"} alt="nav" />
      </MotionDiv>
      {PAGE_NAME.map(
        (value: PathName, index: number) =>
          value.src && (
            <>
              <MotionDiv
                variants={isLastActive(`/${value.path}`) ? buttonSlide : {}}
                initial={{y:0}}
                animate={'up'}
                exit={'down'}
                style={style.button}
              >
                <NavButton
                  src={isActive(`/${value.path}`)?value.selected:value.src}
                  href={value.path}
                  label={value.label}
                  isActive={isActive}
                  key={index}
                />
              </MotionDiv>
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
    justifyContent: 'space-evenly',
    left: 0,
    bottom: 5,
    height: '90px',
    alignItems: 'center',
  },
  body: {
    position: 'fixed',
    justifyContent: 'space-around',
    bottom: 0,
    height:"90px",
    right:"40vw",
    width:"100vw",
    display:"flex"
  },
  image:{
    height:"90px",
    width:"120vw",
    objectFit: 'contain',
  },
  button: {
    zIndex: 2,
    width:"65px"
  },
}
