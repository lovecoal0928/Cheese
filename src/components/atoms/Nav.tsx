import React, { CSSProperties, ReactNode } from 'react'

type Nav = {
  children: ReactNode
  style:CSSProperties
}
export const Nav = (props: Nav) => {
  const { children,style } = props
  return <nav style={style}>{children}</nav>
}
