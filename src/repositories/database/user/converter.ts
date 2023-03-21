import { Tables } from 'plugins/supabse'
import { UserParams } from 'types/api'
import { User } from 'types/entities/User'

type FromTable = Tables['users']['Row']
type ToTable = Tables['users']['Insert']
export const converter = {
  from: (user: FromTable): User => {
    return {
      userId: user.user_id,
      name: user.name,
      registeredAt: user.registered_at ?? undefined,
      updatedAt: user.updated_at ?? undefined,
      email: user.email,
    }
  },
  to: (user: UserParams): ToTable => {
    return {
      user_id: user.userId,
      name: user.name,
      registered_at: user.registeredAt,
      updated_at: user.updatedAt,
      email: user.email,
    }
  },
}
