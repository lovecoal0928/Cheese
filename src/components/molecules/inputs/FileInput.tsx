import { Input } from '@/components/atoms/Input'
import { Label } from '@/components/atoms/Label'
import React, { ComponentProps, CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ComponentProps<'input'>

export const FileInput = ({ children, ...props }: Props) => {
  return (
    <Label>
      {children}
      <Input {...props} type="file" style={{ display: 'none' }} multiple/>
    </Label>
  )
}
