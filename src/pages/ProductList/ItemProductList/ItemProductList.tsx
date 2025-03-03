export default function ItemProductList() {
  return (
    <div>
      <div className='w-full max-w-xs max-h-max bg-white border border-gray-200 hover:border-black rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg'>
        <a href='/' className='flex justify-center'>
          <img
            className='p-2 rounded-t-lg w-[225px] h-auto'
            src='https://product.hstatic.net/1000075078/product/1737356461_hi-tea-vai_04bffd940cd94bf39ad2162ee63e457d_large.png'
            alt='product image'
          />
        </a>
        <div className='px-4 pb-4'>
          <a href='#'>
            <h5 className='text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white'>A-Mê Classic</h5>
          </a>
          <div className='mt-3 flex items-center justify-between'>
            <span className='text-xs font-bold text-gray-900 dark:text-white'>39.000</span>
            <a
              href='#'
              className='text-black bg-transparent border border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 md:px-2 md:py-1 sm:px-1 text-center hover:text-white hover:bg-black'
            >
              Thêm vào giỏ hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
