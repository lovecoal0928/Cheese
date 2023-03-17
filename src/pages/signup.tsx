import { NextPage } from 'next'
import React from 'react'
import { useAuth } from 'utils/hooks/useAuth'

const signup: NextPage = () => {
  const { signIn, signOut } = useAuth()
  signOut()
  return <button onClick={signIn}>signup</button>
}

export default signup
