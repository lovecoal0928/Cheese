import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [session, setSession] = useState()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session)
      },
    )

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const signInWithGithub = () => {
    supabase.auth.signIn({ provider: 'github' })
  }

  const signOut = () => {
    supabase.auth.signOut()
  }

  return {
    session,
    signInWithGithub,
    signOut,
  } as const
}
