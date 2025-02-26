import axios, { AxiosError } from 'axios'
import HttpStatusCode from './StatusCode.enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

 
export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  // console.log(`Status : ${error.response?.status}`)
  console.log(isAxiosError(error))

  return isAxiosError(error) && error.response?.status == HttpStatusCode.UnprocessableEntity
}
