import AsideFilter from './AsideFilter/AsideFilter'
import SortProductList from './SortProductList/SortProductList'

export default function ProductList() {
  return (
    <div className='bg-gray-200 py-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProductList />
            <div className='mt-6'>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
                    alt=''
                  />
                </div>
                <div>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
