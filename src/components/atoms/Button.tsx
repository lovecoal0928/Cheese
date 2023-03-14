import { ComponentProps, ReactNode } from 'react'

type Button = {
  children: ReactNode
} & ComponentProps<'button'>

export const Button = ({ children,...props}: Button) => {
  return <button {...props} >{children}</button>
}
