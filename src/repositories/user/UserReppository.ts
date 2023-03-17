import { UserParams } from 'types/api'
import { User } from 'types/entities/User'

export interface UserRepository {
  findById: (id: string) => Promise<User | undefined>
  save: (user: UserParams) => Promise<void>
}
