import React, { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
  style?: CSSProperties
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  onClick?:()=>void
}

export const Flex = (props: Props) => {
  const { children, style,direction,onClick } = props
  return <div style={{ ...style, display: 'flex',flexDirection:direction }} onClick={onClick}>{children}</div>
}
