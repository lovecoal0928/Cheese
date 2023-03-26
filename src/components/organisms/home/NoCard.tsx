import React, { ReactNode, useEffect } from 'react'
import { Button } from '@/components/atoms/Button'
import { Flex } from '@/components/atoms/Flex'
import { Image } from '@/components/atoms/Image'
import { Typography } from '@/components/atoms/Typography'
import { DragCard } from '@/components/molecules/cards/DragCard'
import { PostImage } from 'types/entities/Post'
import { Styles } from 'types/index'
import { useDrag } from 'utils/hooks/anim/useDrag'
import { SwipeButtons } from './SwipeButtons'
import { useImage } from 'utils/hooks/useImages'

export const NoCard = () => {
  return (
    <Flex style={styles.card}>
      <>スワイプできる画像がありません。</>
    </Flex>
  )
}

const styles: Styles = {
  card: {
    minHeight: '85vh',
    width: '90%',
    top: '2%',
    left: '4.5%',
    background: '#fff',
    position: 'absolute',
    borderRadius: '18px',
    padding: '10px 15px 100px 15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
