export interface SuccessResponeApi<Data> {
  message: string
  data: Data
}
export interface ErrorResponeApi<Data> {
  message: string
  data?: Data
}
