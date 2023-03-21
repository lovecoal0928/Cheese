import { Button } from '@/components/atoms/Button'
import { Image } from '@/components/atoms/Image'
import React from 'react'
import { Styles } from 'types'

type Props = {
  onClick: () => void
}
export const ZoomCancelButton = (props: Props) => {
  const { onClick } = props
  return (
    <Button style={style.cancel} onClick={onClick}>
      <Image alt="cancel" src={'/zoom/cancel.svg'} width={20} height={20}/>
    </Button>
  )
}

const style: Styles = {
  cancel: {
    background: 'none',
    border:"none",
    padding:"20px"
  },
}
