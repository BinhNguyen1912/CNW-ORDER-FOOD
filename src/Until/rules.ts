/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterOptions, FieldValues, Path, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

export type Rules<T extends FieldValues> = { [K in keyof T]?: RegisterOptions<T, Path<T> & string> }

// Định nghĩa rules dựa trên interface dữ liệu của form

export const GetRules = (getValues?: UseFormGetValues<any>): Rules<useFormType> => ({
  email: {
    required: {
      value: true,
      message: 'Email không được để trống!'
    },
    pattern: {
      value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      message: 'Email không đúng định dạng'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Passsword không được để trống!'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    },
    maxLength: {
      value: 15,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại để xác nhận mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    },
    maxLength: {
      value: 15,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Không khớp với mật khẩu!'
        : undefined
  },
  name: {
    required: {
      value: true,
      message: 'Tên không được để trống !'
    }
  },
  phone: {
    required: {
      value: true,
      message: 'Số điện thoại không được để trống !'
    }
  }
})

//Khai bao Schema -> quan ly cac truong dau vao
export const schemaValidate = yup
  .object({
    email: yup
      .string()
      .required('Vui lòng nhập Email')
      .email('Email không đúng định dạng!')
      .min(6, 'Độ dài tối thiểu là 6-160 từ!')
      .max(160, 'Độ dài tối thiểu là 6-160 từ!'),
    password: yup
      .string()
      .required('Vui lòng nhập password')
      .min(6, 'Password : Độ dài tối thiểu là 6-15 từ!')
      .max(15, 'Password : Độ dài tối thiểu là 6-15 từ!'),
    phone: yup
      .string()
      .required('Vui lòng nhập Số điện thoại')
      .min(0, 'Vui lòng nhập đúng 10 chữ số điện thoại')
      .max(10, 'Vui lòng nhập đúng 10 chữ số điện thoại'),
    name: yup
      .string()
      .required('Vui lòng nhập họ và tên!')
      .min(2, 'Tên không thể nào < 2!')
      .max(30, 'Tên không thể nào > 30!'),
    confirm_password: yup
      .string()
      .required('Vui lòng xác nhận lại mật khẩu')
      .min(6, 'Password : Độ dài tối thiểu là 6-15 từ!')
      .max(15, 'Password : Độ dài tối thiểu là 6-15 từ!')
      .oneOf([yup.ref('password')], 'Không khớp với mật khẩu')
  })
  .required()
export type useFormType = yup.InferType<typeof schemaValidate>
export const schemaValidate_Login = schemaValidate.omit(['confirm_password', 'name', 'phone'])
export type useFormType_Login = yup.InferType<typeof schemaValidate_Login>
