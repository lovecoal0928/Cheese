import React from 'react'
import { Styles } from 'types'
import { Flex } from '../atoms/Flex'
import { Typography } from '../atoms/Typography'

export const Prepare = () => {
  return (
    <Flex style={styles.container}>
      <Typography style={styles.text}>工事中です...</Typography>
    </Flex>
  )
}

const styles: Styles = {
  container: {
    height: '100vh',
    width: '100vw',
    alignItems:"center",
    justifyContent:"center"
  },
  text: {
    fontSize: '40px',
  },
}
