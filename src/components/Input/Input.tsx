/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  className: string
  type: React.HTMLInputTypeAttribute
  placeholder: string
  register: UseFormRegister<any>
  rules?: any
  errorsMessage: string
  name: string
}
export default function Input({ className, errorsMessage, placeholder, register, rules, name, type }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='p-3 w-full outline-none border rounded-full border-gray-300 focus:border-black focus:border-[1.5px] focus:shadow-sm'
        placeholder={placeholder}
        /*Neu ta con de thuoc tinh name cura input se loi vi
      register co trar ve name nen bi sinh loi => xoa name 
      , va truyen cai key cura input do vao 
      - {...register('email')} , day la cu phap dung cho cac the input tuong tu*/
        {...register(name, rules)}
        autoComplete='on'
      />
      <div className='mt-1 text-start text-red-700 min-h-[1.25rem] text-sm ml-2'>{errorsMessage}</div>
    </div>
  )
}
