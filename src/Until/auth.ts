import { User } from 'src/types/user.type'

export const saveAccessFromLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccessFromLS = () => localStorage.getItem('access_token') || ''

export const getProfile = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const saveProfile = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
