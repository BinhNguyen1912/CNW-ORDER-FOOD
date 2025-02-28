import { SuccessResponeApi } from './untill.type'
import { User } from './user.type'

export type authRespone = SuccessResponeApi<{
  user: User
  access_token: string
}>
