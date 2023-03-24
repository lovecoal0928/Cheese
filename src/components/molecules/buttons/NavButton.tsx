import React, { CSSProperties } from 'react'
import { Image } from '../../atoms/Image'
import { Button } from '../../atoms/Button'
import { Styles } from 'types'
import { Typography } from '@/components/atoms/Typography'
import Link from 'next/link'
import { Flex } from '@/components/atoms/Flex'

type NavButton = {
  src: string
  label: string
  href: string
  isActive: (pathname: string) => boolean
}

export const NavButton = (props: NavButton) => {
  const { src, label, href, isActive } = props

  return (
    <Link
      style={{
        ...styles.container,
        background: isActive(`/${href}`) ? '#FFEDAF' : 'none',
        boxShadow: isActive(`/${href}`)
          ? '0px 0px 5px rgba(0, 0, 0, 0.32)'
          : 'none',
      }}
      href={href}
    >
      <Image
        alt={label}
        src={src}
        width={35}
        height={35}
        style={{
          ...styles.image,
          margin: isActive(`/${href}`) ? '0 0 0 0' : '0 0 7px 0',
        }}
      />
      {isActive(`/${href}`) || (
        <Typography style={styles.label}>{label}</Typography>
      )}
    </Link>
  )
}

const styles: Styles = {
  container: {
    border: 'none',
    textDecoration: 'none',
    margin: 0,
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '50%',
  },
  image: {},
  label: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '12px',
    color: '#333333',
  },
}
