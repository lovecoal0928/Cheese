import React from 'react'
import { Styles } from 'types'
import { useAuth } from 'utils/hooks/auth/useAuth'
import { Button } from '../atoms/Button'
import { Flex } from '../atoms/Flex'
import { Image } from '../atoms/Image'
import { Typography } from '../atoms/Typography'

export const Signin = () => {
    const { signIn, signOut } = useAuth()
  return (
    <Flex style={styles.container} direction="column">
      <Image src={'/signin/icon.svg'} alt="icon" style={styles.logo} />
      <Flex style={styles.main_text_body}>
        <Typography style={styles.main_text}>
          スワイプしてお気に入りの写真を探してみよう。
        </Typography>
      </Flex>
      <Button style={styles.google_button_body} onClick={signIn}>
        <img
          style={styles.google_button}
          src={'/signin/googleBtn.png'}
          alt="login_button"
        />
      </Button>
      <Typography style={styles.text}>
        登録すると、<Typography style={styles.strong}>利用規約</Typography>
        および
        <Typography style={styles.strong}>プライバシーポリシー</Typography>
        に同意したとみなされます。
      </Typography>
    </Flex>
  )
}

const styles: Styles = {
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    width: '100px',
    height: '100px',
  },
  main_text_body: {
    alignItems: 'center',
    height: '50vh',
  },
  main_text: {
    fontSize: '25px',
    fontWeight: 'bold',
    display: 'inline-block',
  },
  google_button_body: {
    background: '#fff',
    border: 'none',
    width: '100%',
  },
  google_button: {
    width: '100%',
    objectFit: 'contain',
  },
  text: {
    margin: '20px 0',
    color: '#333333',
    display: 'inline-block',
  },
  strong: {
    fontWeight: 'bold',
    borderBottom: '1px solid #000',
    display: 'inline-block',
    lineHeight:"16px"
  },
}
