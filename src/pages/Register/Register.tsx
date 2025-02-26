/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerByUser } from 'src/api/auth.api'
import Input from 'src/components/Input'
import { ResponeApi } from 'src/types/untill.type'
import { isAxiosUnprocessableEntityError } from 'src/Until/FixErrorFromAxios'
import { schemaValidate, useFormType } from 'src/Until/rules'

export default function Register() {
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
      console.log('success', data)
      // toast()
      alert('Gui thanh cong')
    },
    onError: (error) => {
      alert('that bai')

      if (isAxiosUnprocessableEntityError<ResponeApi<Omit<useFormType, 'confirm_password'>>>(error)) {
        //ResponeApi<Omit<useFormType, 'confirm_password'>>
        console.log(isAxiosUnprocessableEntityError<{ error: string; message: string; statusCode: string }>(error))
        console.log(error)

        const formError = error.response?.data
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
    <div className='bg-orange-300 py-11'>
      <div className='max-w-7xl px-4 mx-auto '>
        <div className='flex justify-center   '>
          <div className='w-1/3 pr-7 lg:block md:hidden sm:hidden'>
            <img
              src='https://i.pinimg.com/736x/0b/18/15/0b18157ed9d98cd5526c5844013dca00.jpg'
              alt=''
              className='w-full h-auto object-cover rounded-3xl '
            />
            <div className='text-center py-3 px-5 mt-5'>
              <p>
                <b>Retaurent</b> xin chân thành cảm ơn quý khách hàng thân yêu đã sử dụng dịch vụ của chúng tôi . Mọi
                thắc mắc xin liên hệ qua <br /> Fanpage : "{' '}
                <Link to='https://google.com' className='text-blue-700' target='_blank'>
                  Google
                </Link>{' '}
                "
              </p>
            </div>
          </div>
          <form action='' className='w-1/2 rounded-xl  bg-white px-8 py-5 shadow-sm' onSubmit={onSubmit} noValidate>
            <div className='text-black mb-7 text-3xl font-bold text-center'>Đăng ký</div>
            {/* <div className='mt-1'>
              <input
                type='email'
                className='p-3 w-full outline-none border rounded-full border-gray-300 focus:border-gray-950 focus:shadow-sm'
                placeholder='Email'
                {...register('email', rules.email)}
              />
              <div className='mt-1 text-red-700 min-h-[1.25rem] text-sm ml-2'>{errors.email?.message}</div>
            </div> */}
            {/* <div className='mt-1'>
              <input
                type='password'
                className='p-3 w-full rounded-full outline-none border border-gray-300 focus:border-gray-950 focus:shadow-sm'
                placeholder='password'
                {...register('password', rules.password)}
                autoComplete='on'
              />
              <div className='mt-1 text-red-700 min-h-[1.25rem] text-sm ml-2'>{errors.password?.message}</div>
            </div> */}
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
            <button className='w-full mt-2 px-4 py-3 rounded-full border text-center bg-amber-400'>ĐĂNG KÝ</button>
            <div className='flex text-sm mt-4 justify-center'>
              <span>Bạn đã có tài khoản ?</span>
              <Link to='/login' className='text-red-600 '>
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
