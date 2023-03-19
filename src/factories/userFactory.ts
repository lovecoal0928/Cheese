import { Session } from '@supabase/supabase-js'
import { User } from 'types/entities/User'
import { generateTimestamp } from 'utils/libs/generaters/generateTimestamp'

export const userFactory = {
  create: (session: Session): User => {
    return {
      userId: session.user.id,
      name: session.user.user_metadata.full_name,
      email: session.user.email as string,
      registeredAt: generateTimestamp(),
      updatedAt: generateTimestamp(),
    }
  },
}
