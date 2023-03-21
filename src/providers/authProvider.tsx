import { userFactory } from 'factories/userFactory'
import { ReactNode, useEffect } from 'react'
import { userRepository } from 'repositories/database/user/UserRepositoryImpl'
import { useAuthLister } from 'utils/hooks/auth/useAuth'

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const { session } = useAuthLister()

  // NOTE: ログイン時にユーザーが存在しない場合は作成する
  useEffect(() => {
    ;(async () => {
      if (!session) return
      const user = await userRepository.findById(session.user.id)
      if (user) return
      await userRepository.save(userFactory.create(session))
    })()
  }, [session])

  return <>{children}</>
}
