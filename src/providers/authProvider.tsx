import { Session } from '@supabase/supabase-js'
import { ReactNode, useEffect } from 'react'
import { userRepository } from 'repositories/user/UserRepositoryImpl'

import { useAuthLister } from 'utils/hooks/useAuth'
interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const { session } = useAuthLister()
  const createUser = (session: Session) => {
    return {
      userId: session.user.id,
      name: session.user.user_metadata.full_name,
      email: session.user.email as string,
    }
  }

  useEffect(() => {
    ;(async () => {
      if (!session) return
      const user = await userRepository.findById(session.user.id)
      if (user) return
      await userRepository.save(createUser(session))
    })()
  }, [session])
  return <>{children}</>
}
