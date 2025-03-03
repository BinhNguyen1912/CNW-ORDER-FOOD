/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logout } from 'src/api/auth.api'
import { path } from 'src/common/path'
import Aside from 'src/components/Aside'
import ItemAddPopover from 'src/components/ItemAddPopover/ItemAddPopover'
import Popover from 'src/components/popover/Popover'
import QualityNotification from 'src/components/QualityNotification/QualityNotification'
import { AppContext } from 'src/contexts/App.Context'
import { authRespone } from 'src/types/auth.type'
import { clearLS } from 'src/Until/auth'

export default function Header() {
  //Poopover

  const [, setOpen] = useState(false)
  const [checked, setChecked] = useState(false)
  const { setIsAuthenticated, setProfile, profile, isAuthenticated, openSlideBar, setOpenSlideBar } =
    useContext(AppContext)
  const navigate = useNavigate()

  const LogoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      clearLS()
      toast.success((data.data as authRespone).message || '')
      setIsAuthenticated(false)
      setProfile(null)
      navigate('/')
    },
    onError: (data) => {
      console.log(data)
    }
  })
  const handleLogout = () => {
    LogoutMutation.mutate()
  }
  const OpenMouseSlideBar = () => {
    setOpenSlideBar(openSlideBar)
  }
  const CloseMouseSlideBar = () => {
    setOpenSlideBar(!openSlideBar)
  }
  const hanldeClickSlideBar = () => {
    setOpenSlideBar(!openSlideBar)
  }
  // const arrowRef = useRef(null) //dung de tham chieu den mui ten
  // const { refs, floatingStyles, context, middlewareData } = useFloating({
  //   open: open, //kiểm tra trạng thái mở popover
  //   onOpenChange: setOpen, //thay đổi trạng thái đóng mở
  //   middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })], //offset : khoảng cách từ popver đến nút , flip : nếu bị tràn trên ui thi tự động đổi hướng , shift : dịch chuyển pôper để tránh bị cắt bớtbớt
  //   whileElementsMounted: autoUpdate //cập nhật vị trí khi có thay đổi trên UI,
  // })

  // const click = useClick(context)
  // const dismiss = useDismiss(context)
  // const role = useRole(context)
  // const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  // const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss, role])

  // //ham xu ly di chuot vao mo popover
  // const handleMouseEnter = () => {
  //   if (timeoutRef.current) clearTimeout(timeoutRef.current)
  //   setOpen(true)
  // }
  // //ham xu ly di chuot ra , dat timeout de tranh mat ngay lap tuc
  // const handleMouseLeave = () => {
  //   timeoutRef.current = setTimeout(() => {
  //     setOpen(false)
  //   }, 200)
  // }
  //ham click vao ngn ngu vao the mo popover , dong popover ngay lap tuc
  const handleSelectPopover = () => {
    setOpen(false)
  }
  return (
    //fixed z-[1000] top-0 left-0 w-full
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <div className='w-full mx-auto'>
        <div className='flex justify-between px-2 py-2 bg-black text-white'>
          <div className='flex items-center hover:font-bold hover:text-xl'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>
              <nav className='text-xs ml-1'>2 cửa hàng ở Tp HCM</nav>
            </div>
            <div className='flex items-center ml-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                />
              </svg>
              <nav className='text-xs ml-1'>Đặt hàng : 1900 3131</nav>
            </div>
          </div>
          <div className='flex items-center cursor-pointer flex-shrink-0 mr-6'>
            <Popover
              children={
                <div className='flex hover:text-gray-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
                    />
                  </svg>
                  <span className='mx-1 text-sm'>Ngôn ngữ</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                  </svg>
                </div>
              }
              PopoverComponent={
                <div className='bg-black shadow-md rounded-sm  text-white text-sm'>
                  <div className='flex flex-col py-1 px-2'>
                    <button className='px-3 py-2 hover:text-orange-300 hover:bg-opacity-80 border-b'>Tiếng Việt</button>
                    <button className='px-3 py-2 hover:text-orange-300'>Tiếng Anh</button>
                  </div>
                </div>
              }
            />
            {isAuthenticated && (
              <Popover
                children={
                  <div className='flex items-center ml-4 hover:text-gray-400 z-50'>
                    <div className='w-8 h-8 mr-2 flex-shrink-0'>
                      <img src={profile?.avatar || ''} alt='' className='w-full h-full object-cover rounded-full' />
                    </div>
                    <nav className='text-xs'>{profile?.email || ''}</nav>
                  </div>
                }
                PopoverComponent={
                  <div className='bg-black shadow-md rounded-sm  text-white text-sm'>
                    <div className='flex flex-col py-1 px-2 text-start'>
                      <Link
                        to='https://google.com'
                        target='_blank'
                        className='px-3 py-2 flex items-center text-white hover:text-orange-300 border-b '
                        onClick={handleSelectPopover}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-4 h-4 mr-1'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Tài khoản của tôi
                      </Link>
                      <Link
                        to={path.register}
                        className='px-3 py-2 flex items-center text-white hover:text-orange-300 border-b'
                        onClick={handleSelectPopover}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-4 h-4 mr-1'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Giỏ hàng
                      </Link>
                      <button className='px-3 py-2 flex items-center hover:text-orange-300' onClick={handleLogout}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-4 h-4 mr-1'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z'
                            clipRule='evenodd'
                          />
                        </svg>
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                }
              />
            )}
            {!isAuthenticated && (
              <Popover
                children={
                  <div className='flex  ml-2 text-sm'>
                    <Link to={path.register}>
                      <div className='text-red-500 pr-2 border-r'>Đăng ký</div>
                    </Link>
                    <Link to={path.login}>
                      <div className='text-red-500 ml-2'>Đăng nhập</div>
                    </Link>
                  </div>
                }
                PopoverComponent={null}
              />
            )}
          </div>
        </div>
        <div className='flex justify-between items-center py-3 shadow-md px-10'>
          <label className='btn btn-circle swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} className='hidden' />
            {!checked ? (
              <svg
                className='swap-off fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'
                data-drawer-target='drawer-navigation'
                data-drawer-show='drawer-navigation'
                aria-controls='drawer-navigation'
                // onMouseMove={OpenMouseSlideBar}
                // onMouseLeave={CloseMouseSlideBar}
                onClick={hanldeClickSlideBar}
              >
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>
            ) : (
              <svg
                className='swap-on fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'
                data-drawer-target='drawer-navigation'
                data-drawer-show='drawer-navigation'
                aria-controls='drawer-navigation'
                // onMouseMove={OpenMouseSlideBar}
                // onMouseLeave={CloseMouseSlideBar}
                onClick={hanldeClickSlideBar}
              >
                <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
              </svg>
            )}
          </label>

          {/* <Popover
            children={
              <button
                // onMouseMove={ToggleSlideBar}
                // onMouseLeave={ToggleSlideBar}
                type='button'
                data-drawer-target='drawer-navigation'
                data-drawer-show='drawer-navigation'
                aria-controls='drawer-navigation'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-8 h-8 font-bold'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            }
            PopoverComponent={<Aside />}
          /> */}
          <Popover
            children={
              <QualityNotification
                iconJSX={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='x-9 h-9 z-0'
                  >
                    <path d='M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z' />
                  </svg>
                }
                quality={50}
              />
            }
            PopoverComponent={
              <div className='bg-white relative shadow-sm rounded-sm border border-gray-200 max-h-[450px] max-w-[600px] text-sm'>
                <div className='p-2'>
                  <div className='text-gray-400 capitalize'>Các sản phẩm vừa thêm</div>
                  <div className=' h-[300px] overflow-auto'>
                    <ItemAddPopover
                      price='12.000'
                      src_Image='https://product.hstatic.net/1000075078/product/1737355620_tx-espresso-marble_3942abe277644167a391b0a3bcfc52fc_large.png'
                      title='Trà Xanh Espresso Marble'
                    />
                    <ItemAddPopover
                      price='12.000'
                      src_Image='https://product.hstatic.net/1000075078/product/1737355620_tx-espresso-marble_3942abe277644167a391b0a3bcfc52fc_large.png'
                      title='Trà Xanh Espresso Marble'
                    />
                    <ItemAddPopover
                      price='12.000'
                      src_Image='https://product.hstatic.net/1000075078/product/1737355620_tx-espresso-marble_3942abe277644167a391b0a3bcfc52fc_large.png'
                      title='Trà Xanh Espresso Marble'
                    />
                    <ItemAddPopover
                      price='12.000'
                      src_Image='https://product.hstatic.net/1000075078/product/1737355620_tx-espresso-marble_3942abe277644167a391b0a3bcfc52fc_large.png'
                      title='Trà Xanh Espresso Marble'
                    />
                    <ItemAddPopover
                      price='12.000'
                      src_Image='https://product.hstatic.net/1000075078/product/1737355620_tx-espresso-marble_3942abe277644167a391b0a3bcfc52fc_large.png'
                      title='Trà Xanh Espresso Marble'
                    />
                    <ItemAddPopover
                      price='12.000'
                      src_Image='https://product.hstatic.net/1000075078/product/1737355620_tx-espresso-marble_3942abe277644167a391b0a3bcfc52fc_large.png'
                      title='Trà Xanh Espresso Marble'
                    />
                  </div>
                  <div className='mt-5'>
                    <div className='flex mt-6 justify-between'>
                      <Link to='/'>
                        <button
                          type='button'
                          className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 hover:bg-opacity-80 focus:ring-4 hover:px-4 focus:outline-none focus:ring-gray-300 px-2 py-3 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
                        >
                          Thánh Toán
                        </button>
                      </Link>
                      <Link to='/'>
                        <button
                          type='button'
                          className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 hover:bg-opacity-80 focus:ring-4 hover:px-4 focus:outline-none focus:ring-gray-300 px-2 py-3 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
                        >
                          Đến giỏ hàng
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <QualityNotification
            iconJSX={
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='x-9 h-9'>
                <path
                  fillRule='evenodd'
                  d='M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z'
                  clipRule='evenodd'
                />
              </svg>
            }
            quality={100}
          />
          <Link to='/login' className='w-32 h-auto cursor-pointer'>
            {' '}
            <img src='../../../public/images/logo.jpg' alt='' className='ww-full h-full' />
          </Link>
          <form noValidate className='w-3/5 ml-3'>
            <div className='flex p-1 items-center border border-black rounded-md'>
              <input
                type='text'
                alt='search'
                placeholder='Tìm kiếm món ăn , danh mục , ...'
                className='w-11/12 p-3 outline-none text-gray-500 focus:border-gray-500'
              />
              <button className='ml-4 p-2 rounded-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-7 h-7'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        {openSlideBar && <Aside />}
      </div>
    </header>
  )
}
