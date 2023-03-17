import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/database/schema'

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
)

export type Tables = Database['public']['Tables']
export type TableName = keyof Tables
