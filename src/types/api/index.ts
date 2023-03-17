import { Tables } from 'plugins/supabse'
import { SnakeToCamel } from 'repositories/converters'

export type UserParams = SnakeToCamel<Tables['users']['Insert']>
export type UpdateUserParams = SnakeToCamel<Tables['users']['Update']>
