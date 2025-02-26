import { Link } from 'react-router-dom'

//function componet , class component
export default function RegisterHeader() {
  return (
    <header className='py-5 px-8'>
      <div className=' max-w-7xl mx-auto px-4 flex justify-between items-center'>
        <nav className='flex items-center'>
          <Link to={'/'}>
            <img
              className='lg:h-30 h-auto w-24 '
              src='https://i.pinimg.com/474x/5f/53/5b/5f535be83dee7e512915aed2b866a99e.jpg'
              alt=''
            />
          </Link>
          <p className='text-xl text-black ml-1 font-semibold'>Đăng ký</p>
        </nav>
        <a href='https://google.com'>
          <div className='text-base font-medium fill-logo'>Bạn cần hỗ trợ gì không ?</div>
        </a>
      </div>
    </header>
  )
}
