import axios, { AxiosError, AxiosInstance } from 'axios'
import HttpStatusCode from './StatusCode.enum'
import { Bounce, toast } from 'react-toastify'
import { authRespone } from 'src/types/auth.type'
import { clearLS, getAccessFromLS, saveAccessFromLS, saveProfile } from './auth'
class Http {
  instance: AxiosInstance
  private access_token: string
  constructor() {
    /**Đây là 1 cái trick hay vì nếu ta khởi tạo thẳng từ LocalStorage , thì nó phải lục lại bộ nhớ -> lâu vl
     * Nên ở đây khi khởi chạy , constructer chỉ chạy 1 lần , và trên ram thif rất rất nhanh , phục vụ khi ta cần
     */
    this.access_token = getAccessFromLS()
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/api/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token && config.headers) {
          config.headers.Authorization = `Bearer ${this.access_token}`
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const url = response.config.url
        if (url === '/auth/login' || url === '/auth/registerByUser') {
          this.access_token = (response.data as authRespone).data.access_token

          saveAccessFromLS(this.access_token)
          saveProfile((response.data as authRespone).data.user)
        } else if (url === '/auth/logout') {
          this.access_token = ''
          clearLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message, {
            style: {
              backgroundColor: ' #ffff',
              color: 'black',
              borderRadius: '5px',
              fontSize: '16px'
            },
            autoClose: 3000,
            position: 'top-right',
            transition: Bounce,
            closeButton: true,
            pauseOnHover: true,
            pauseOnFocusLoss: true,
            draggable: 'touch',
            role: 'alert'
          })
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
