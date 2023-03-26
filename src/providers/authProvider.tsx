import { userFactory } from 'factories/userFactory'
import { ReactNode, useEffect } from 'react'
import { userRepository } from 'repositories/database/user/UserRepositoryImpl'
import { useGetSession } from 'utils/hooks/auth/useAuth'

import { useRouter } from 'next/router'
import { pagesPath } from 'utils/$path'
interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const { data: session, isLoading } = useGetSession()
  const router = useRouter()

  // NOTE: ログイン時にユーザーが存在しない場合は作成する
  useEffect(() => {
    ;(async () => {
      if (session === undefined) return
      if (session === null) {
        router.push(pagesPath.signup.$url())
        return
      }
      const user = await userRepository.findById(session.user.id)
      if (!user) {
        await userRepository.save(userFactory.create(session))
      }
    })()
  }, [session])

  if (isLoading) {
    return <div>loading...</div>
  }

  return <>{children}</>
}
