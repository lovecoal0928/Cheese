import { AuthUser } from '@supabase/supabase-js'

export interface AuthUserRepository {
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  find: () => Promise<AuthUser | undefined>
}
