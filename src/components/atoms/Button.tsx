import { ComponentProps } from 'react'

type Button = {
  label: string
} & ComponentProps<'button'>

export const Button = ({ label,...props }: Button) => {
  return <button {...props} >{label}</button>
}
