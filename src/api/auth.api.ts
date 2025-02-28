import { authRespone } from 'src/types/auth.type'
import http from 'src/Until/Http'
import { useFormType_Login } from 'src/Until/rules'
const auth = '/auth'
export const registerByUser = (body: { email: string; password: string; phone: string; name: string }) => {
  return http.post<authRespone>(auth + '/registerByUser', body)
}
export const login = (body: useFormType_Login) => {
  return http.post<authRespone>(auth + '/login', body)
}
export const logout = () => {
  return http.get<authRespone>(auth + '/logout')
}
