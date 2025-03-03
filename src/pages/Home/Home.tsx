import { Link } from 'react-router-dom'
import Carousel from 'src/components/Carousel'
import Item_Story from './Item-Story/Item_Story'

export default function Home() {
  return (
    <div className='pt-[125px]'>
      <Carousel />
      <div className='grid grid-cols-2 gap-4 px-5 py-9 mx-auto'>
        <div className='col-span-1 px-11'>
          <h2 className='uppercase font-bold text-[40px] my-5 py-5 px-3 border-b border-b-black border-l-black border-l-[20px]'>
            về guess
          </h2>
          <div className='text-[25px] font-bold py-6'>
            GUESS Coffee & Tea House - HÀNH TRÌNH CHINH PHỤC PHONG VỊ MỚI
          </div>
          <p className='text-gray-300 text-[20px] font-roboto italic leading-[40px]'>
            " Hành trình luôn bắt đầu từ việc chọn lựa nguyên liệu kỹ càng từ các vùng đất trù phú, cho đến việc bảo
            quản, pha chế từ bàn tay nghệ nhân. Qua những nỗ lực không ngừng, KATINAT luôn hướng đến... "
          </p>
          <Link to='https://google.com' className='flex justify-center'>
            <button
              type='button'
              className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-7  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
            >
              Xem thêm...
            </button>
          </Link>
        </div>
        <div className='col-span-1'>
          <div className='h-[400px]'>
            <img
              className='w-full rounded-sm shadow-md h-full object-cover'
              src='https://pics.craiyon.com/2023-06-11/83d3b6e11428417d9c4ff36847195e2b.webp'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-4 px-5 py-9'>
        <div className='text-center'>
          <Link to={'/'}>
            <h4 className='text-[30px] font-bold mb-[20px] underline'>COFFEE</h4>
          </Link>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://i.pinimg.com/474x/9e/a7/ee/9ea7eee807b77d4d062ec54be39c6a92.jpg'
            alt=''
          />{' '}
        </div>
        <div className='text-center'>
          <Link to={'/'}>
            <h4 className='text-[30px] font-bold mb-[20px] underline'>MILK TEA</h4>
          </Link>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://i.pinimg.com/474x/97/84/40/978440fe09d65d3d1c461e614bd150d5.jpg'
            alt=''
          />{' '}
        </div>
        <div className='text-center'>
          <Link to={'/'}>
            <h4 className='text-[30px] font-bold mb-[20px] underline'>FRUIT TEA</h4>
          </Link>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://i.pinimg.com/474x/b2/c5/f4/b2c5f474013e4c1e7d44e209a7b9f086.jpg'
            alt=''
          />{' '}
        </div>
        <div className='text-center'>
          <Link to={'/'}>
            <h4 className='text-[30px] font-bold mb-[20px] underline'>SWEET CAKE</h4>
          </Link>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://i.pinimg.com/474x/17/52/1a/17521ac6acc4ef2d4a063cf2a5644403.jpg'
            alt=''
          />{' '}
        </div>
      </div>
      <div className='py-10 px-10'>
        <h2 className='uppercase font-bold text-[35px] my-5 py-5 px-3 border-b border-b-black border-l-black border-l-[15px]'>
          Chuyện nhà GUESS
        </h2>

        <div className='grid grid-cols-3 md:grid-cols-3 gap-9'>
          <Item_Story
            src_image='https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg'
            content='Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại những dấu ấn thăng trầm của một Sài
                Gòn xưa cũ. Trên những góc phố,...'
            date='01/11/2023'
            title='BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG...'
          />
          <Item_Story
            src_image='	https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg'
            content='Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại những dấu ấn thăng trầm của một Sài
                Gòn xưa cũ. Trên những góc phố,...'
            date='01/11/2023'
            title='BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG...'
          />
          <Item_Story
            src_image='	https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg'
            content='Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại những dấu ấn thăng trầm của một Sài
                Gòn xưa cũ. Trên những góc phố,...'
            date='01/11/2023'
            title='BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG...'
          />
          <Item_Story
            src_image='	https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg'
            content='Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại những dấu ấn thăng trầm của một Sài
                Gòn xưa cũ. Trên những góc phố,...'
            date='01/11/2023'
            title='BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG...'
          />
          <Item_Story
            src_image='	https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg'
            content='Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại những dấu ấn thăng trầm của một Sài
                Gòn xưa cũ. Trên những góc phố,...'
            date='01/11/2023'
            title='BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG...'
          />
          <Item_Story
            src_image='	https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_grande.jpg'
            content='Dẫu qua bao nhiêu lớp sóng thời gian, người ta vẫn có thể tìm lại những dấu ấn thăng trầm của một Sài
                Gòn xưa cũ. Trên những góc phố,...'
            date='01/11/2023'
            title='BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG...'
          />
        </div>
      </div>
    </div>
  )
}
