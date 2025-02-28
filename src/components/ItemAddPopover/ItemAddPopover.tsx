import React from 'react'
interface props {
  src_Image: string
  title: string
  price: string
}
export default function ItemAddPopover({ price, src_Image, title }: props) {
  return (
    <div className='mt-4 flex items-center hover:bg-gray-50 rounded-sm'>
      <div className='flex-shrink-0'>
        <img src={src_Image} alt='anhsp' className='w-11 h-11 object-cover' />
      </div>
      <div className='flex-grow ml-2 overflow-hidden'>
        <div className='truncate'>{title}</div>
      </div>
      <div className='flex-grow ml-2 text-red-500'>{price} VNĐ</div>
    </div>
  )
}
