import React, { ComponentProps, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Label = (props: Props) => {
  const { children } = props
  return <label>{children}</label>
}
