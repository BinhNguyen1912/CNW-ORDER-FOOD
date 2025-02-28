import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from 'src/api/auth.api'
import { path } from 'src/common/path'
import ButtonForSpam from 'src/components/ButtonForSpam/ButtonForSpam'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/App.Context'
import { authRespone } from 'src/types/auth.type'
import { ErrorResponeApi } from 'src/types/untill.type'
import { isAxiosUnprocessableEntityError } from 'src/Until/FixErrorFromAxios'
import { schemaValidate_Login, useFormType_Login } from 'src/Until/rules'

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate() //su dung thang nay de chuyen huong trang
  const {
    register,
    handleSubmit,
    watch,
    // getValues,
    // setError,
    formState: { errors }
  } = useForm<useFormType_Login>({
    resolver: yupResolver(schemaValidate_Login)
  }) //lay ra 3 cai quan trong nhat
  const LoginMutation = useMutation({
    mutationFn: (body: useFormType_Login) => login(body),
    onSuccess: (data) => {
      toast.success((data.data as authRespone).message, {
        style: {
          backgroundColor: ' #ffff',
          color: 'black',
          borderRadius: '5px',
          fontSize: '16px'
        },
        autoClose: 2000,
        position: 'top-right'
      })
      setIsAuthenticated(true)
      setProfile(data.data.data.user)
      navigate('/')
    },
    onError: (error) => {
      if (isAxiosUnprocessableEntityError<ErrorResponeApi<useFormType_Login>>(error)) {
        //ResponeApi<Omit<useFormType, 'confirm_password'>>

        const formError = error.response?.data
        console.log(formError)
      }
    }
  })
  const onSubmit = handleSubmit((data) => {
    LoginMutation.mutate(data)
  })
  console.log(watch())

  return (
    <div className='bg-orange-300 py-11'>
      <div className='max-w-7xl px-4 mx-auto'>
        <div className='flex h-auto justify-center'>
          <div className='pr-7 sm:hidden md:hidden lg:block'>
            <img
              src='https://i.pinimg.com/474x/0b/18/15/0b18157ed9d98cd5526c5844013dca00.jpg'
              alt=''
              className='w-full h-auto object-cover rounded-3xl md:hidden sm:hidden lg:block'
            />
          </div>
          <form
            action=''
            className='w-1/2 rounded-3xl  bg-white text-center px-8 py-5 shadow-sm'
            onSubmit={onSubmit}
            noValidate
          >
            <div className='text-black mb-7 text-3xl font-bold'>Đăng nhập</div>
            <Input
              className='mt-3'
              errorsMessage={errors.email?.message as string}
              name='email'
              placeholder='Nhập Email'
              register={register}
              type='email'
            />
            <Input
              className='mt-3'
              errorsMessage={errors.password?.message as string}
              name='password'
              placeholder='Nhập Password'
              register={register}
              type='password'
            />

            <ButtonForSpam
              isLoading={LoginMutation.isPending}
              disabled={LoginMutation.isPending}
              type='submit'
              className='w-full mt-2 px-4 py-3 rounded-full border text-center bg-amber-400 hover:bg-black hover:text-amber-400'
            >
              ĐĂNG NHẬP
            </ButtonForSpam>
            <div className='mt-3 flex justify-between items-center text-sm '>
              <Link to='ForgotPassword'>
                <p className='text-blue-800'>Quên mật khẩu ?</p>
              </Link>
              <Link to={path.register}>
                <p className='text-blue-800'>Đăng ký</p>
              </Link>
            </div>
            <div className='my-2 text-slate-500'>Hoặc</div>
            <Link
              to='https://google.com'
              className='flex items-center justify-center border-2 border-gray-300 px-4 py-3 rounded-full'
            >
              <div className='w-7 text-center mr-2'>
                <img
                  className='w-full'
                  src='https://th.bing.com/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
                  alt=''
                />
              </div>
              <p>Google</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
