import { Link } from 'react-router-dom'

//function componet , class component
export default function RegisterHeader() {
  return (
    <header className='px-8'>
      <div className=' max-w-7xl mx-auto px-4 py-8 flex justify-between items-center'>
        <nav className='flex items-center'>
          <Link to={'/'} className='w-48 h-auto'>
            <img className='lg:h-30 h-full w-full' alt='' src='../../../public/images/logo.jpg' />
          </Link>
        </nav>
        <a href='https://google.com' target='_blank'>
          <div className='text-base font-medium fill-logo'>Bạn cần hỗ trợ gì không ?</div>
        </a>
      </div>
    </header>
  )
}
