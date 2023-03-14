import React, { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
  style?: CSSProperties
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export const Flex = (props: Props) => {
  const { children, style,direction } = props
  return <div style={{ ...style, display: 'flex',flexDirection:direction }}>{children}</div>
}
