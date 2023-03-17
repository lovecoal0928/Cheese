import { Tables } from 'plugins/supabse'
import { SnakeToCamel } from 'types/converters'

export type UserParams = SnakeToCamel<Tables['users']['Insert']>
export type UpdateUserParams = SnakeToCamel<Tables['users']['Update']>
