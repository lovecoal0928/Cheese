import { authUserRepository } from 'repositories/auth/AuthUserReppositoryImpl'
import { useSessionStorage } from 'react-use'
import { AuthChangeEvent, Session } from '@supabase/supabase-js'
import { useEffect } from 'react'
import { supabase } from 'plugins/supabse'

export const useAuth = () => {
  const signOut = async () => {
    authUserRepository.signOut()
  }

  const signIn = async () => {
    authUserRepository.signIn()
  }

  return {
    signIn,
    signOut,
  } as const
}

export const useAuthLister = () => {
  const AUTH_SESSION_KEY = 'AUTH_SESSION_KEY'
  const [session, setSession] = useSessionStorage<null | Session>(
    AUTH_SESSION_KEY,
    null,
  )
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session) => {
        setSession(session)
      },
    )
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [session])
  return { session, userId: session?.user.id } as const
}
