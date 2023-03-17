import { supabase } from 'plugins/supabse'
import { AuthUserRepository } from './AuthUserReppository'
import { Provider } from '@supabase/supabase-js'

class AuthUserRepositoryImpl implements AuthUserRepository {
  private authProvider: Provider = 'google'
  public signOut = async () => {
    supabase.auth.signOut()
  }
  public signIn = async () => {
    supabase.auth.signInWithOAuth({
      provider: this.authProvider,
    })
  }
  public find = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user ?? undefined
  }
}

export const authUserRepository = new AuthUserRepositoryImpl()
