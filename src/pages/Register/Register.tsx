/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerByUser } from 'src/api/auth.api'
import { path } from 'src/common/path'
import ButtonForSpam from 'src/components/ButtonForSpam/ButtonForSpam'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/App.Context'
import { authRespone } from 'src/types/auth.type'
import { ErrorResponeApi } from 'src/types/untill.type'
import { isAxiosUnprocessableEntityError } from 'src/Until/FixErrorFromAxios'
import { schemaValidate, useFormType } from 'src/Until/rules'

export default function Register1() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate() //su dung thang nay de chuyen huong trang
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<useFormType>({
    resolver: yupResolver(schemaValidate)
  }) //lay ra 3 cai quan trong nhat
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<useFormType, 'confirm_password'>) => registerByUser(body),
    onSuccess: (data) => {
      console.log(data.data.data)

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
      if (isAxiosUnprocessableEntityError<ErrorResponeApi<Omit<useFormType, 'confirm_password'>>>(error)) {
        //ResponeApi<Omit<useFormType, 'confirm_password'>>

        const formError = error.response?.data
        toast.error(formError?.message, { autoClose: 2000, position: 'top-right' })
        if (formError) {
          setError('email', {
            message: formError.message,
            type: 'Server'
          })
        }
      }
    }
  })
  const onSubmit = handleSubmit((data) => {
    // console.log(data)

    // console.log(data) //Ban dau se in ra {} boi vi chua co khai bao gi no biet , voi data se la cac gia tri cua cac truong
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body)
  })

  //watch -> xem cac du lieu nhap vao , nhap den dau re-render lai den do
  /*Neu ta con de thuoc tinh name cura input se loi vi
                register co trar ve name nen bi sinh loi => xoa name 
                , va truyen cai key cura input do vao 
                - {...register('email')} , day la cu phap dung cho cac the input tuong tu*/

  const value = watch()
  // console.log(value)

  return (
    <div className=''>
      <div className='max-w-7xl px-4 mx-auto'>
        <div className='flex h-auto justify-center'>
          <form
            action=''
            className='w-1/2 relative rounded-3xl border-black border-[3px]  bg-white text-center px-8 py-5 shadow-sm'
            onSubmit={onSubmit}
            noValidate
          >
            <div
              className='absolute top-[-10%] left-[40%]
                 p-4 bg-black text-white border-[3px] border-black w-[80px] h-[80px] flex justify-center items-center rounded-full'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-12 h-12'>
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='text-black mb-7 pt-[30px] text-3xl font-bold'>Đăng ký</div>
            <Input
              className='mt-1'
              errorsMessage={errors.email?.message as string}
              placeholder='Nhập Email'
              name='email'
              register={register}
              type='email'
            />
            <Input
              className='mt-1'
              errorsMessage={errors.password?.message as string}
              placeholder='Nhập mật khẩu'
              name='password'
              register={register}
              type='password'
            />
            <Input
              className='mt-1'
              errorsMessage={errors.confirm_password?.message as string}
              placeholder='Xác nhận lại mật khẩu'
              name='confirm_password'
              register={register}
              type='password'
            />
            <Input
              className='mt-1'
              errorsMessage={errors.name?.message as string}
              placeholder='Nhập tên '
              name='name'
              register={register}
              type='text'
            />
            <Input
              className='mt-1'
              errorsMessage={errors.phone?.message as string}
              placeholder='Nhập số điện thoại'
              name='phone'
              register={register}
              type='text'
            />

            <ButtonForSpam
              isLoading={registerAccountMutation.isPending}
              disabled={registerAccountMutation.isPending}
              type='submit'
              className='w-full mt-2 px-4 py-3 rounded-full border text-center hover:font-bold bg-black text-white hover:bg-white hover:text-black hover:border-black '
            >
              ĐĂNG KÝ
            </ButtonForSpam>
            <div className='flex text-sm mt-4 justify-center'>
              <span>Bạn đã có tài khoản ?</span>
              <Link to={path.login} className='text-red-600 '>
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
