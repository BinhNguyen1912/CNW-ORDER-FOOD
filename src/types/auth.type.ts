import { ResponeApi } from './untill.type'
import { User } from './user.type'

export type authRespone = ResponeApi<{
  user: User
  access_token: string
}>
