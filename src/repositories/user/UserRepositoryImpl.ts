import { User } from 'types/entities/User'
import { UserRepository } from './UserReppository'
import { supabase } from 'plugins/supabse'
import { converter } from './converter'
import { UserParams } from 'types/api'

class UserRepositoryImpl implements UserRepository {
  public async findById(id: string): Promise<User | undefined> {
    const { data } = await supabase
      .from('users')
      .select('*')
      .eq('user_id', id)
      .single()
    if (!data) return undefined
    return converter.from(data)
  }
  public async save(user: UserParams): Promise<void> {
    await supabase.from('users').insert(converter.to(user))
  }
}

export const userRepository = new UserRepositoryImpl()
