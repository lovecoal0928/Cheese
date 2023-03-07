import { ComponentProps } from 'react'

type Button = {
  label: string
} & ComponentProps<'button'>

export const Button = ({ label }: Button) => {
  return <button>{label}</button>
}
