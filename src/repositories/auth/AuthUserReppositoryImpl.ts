import { supabase } from 'plugins/supabse'
import { AuthUserRepository } from './AuthUserReppository'
import { Provider } from '@supabase/supabase-js'
import { pagesPath } from 'utils/$path'

class AuthUserRepositoryImpl implements AuthUserRepository {
  private readonly authProvider: Provider = 'google'
  private readonly redirectPath: string = pagesPath.home.$url().pathname
  private readonly redirectTo: string =
    (process.env.NEXT_PUBLIC_SITE_URL as string) + this.redirectPath
  public signOut = async () => {
    supabase.auth.signOut()
  }
  public signIn = async () => {
    supabase.auth.signInWithOAuth({
      provider: this.authProvider,
      options: {
        redirectTo: this.redirectTo,
      },
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
