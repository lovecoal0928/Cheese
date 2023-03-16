import React, { ComponentProps } from 'react'

export const TextInput = (props: ComponentProps<'input'>) => {
  return <input {...props} type="text" />
}
