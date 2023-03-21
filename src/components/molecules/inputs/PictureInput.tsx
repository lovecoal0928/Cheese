import { Input } from '@/components/atoms/Input'
import { Label } from '@/components/atoms/Label'
import React, { ComponentProps, CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ComponentProps<'input'>

export const PictureInput = ({ children, ...props }: Props) => {
  return (
    <label style={{
      width: 150,
      margin: "0 auto",
      border: "2px solid #000",
      textAlign: "center",
      borderRadius: 30,
      padding: 8,
      marginTop: 30
    }}>
      {children}
      <Input {...props} type="file" style={{ display: 'none' }} multiple />
    </label>
  )
}
