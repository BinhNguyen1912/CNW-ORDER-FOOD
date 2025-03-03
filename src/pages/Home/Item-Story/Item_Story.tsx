import React from 'react'
interface Props {
  date: string
  title: string
  content: string
  src_image: string
}
export default function Item_Story({ content, date, title, src_image }: Props) {
  return (
    <div className='max-w-[400px] rounded-md max-h-fit bg-bg_footer text-white border border-gray-300'>
      <img className='w-h-full object-fill rounded-t-md shadow-md' src={src_image} alt='' />{' '}
      <div className='p-2'>
        <div className='text-gray-500 text-[13px] mt-[8px] mb-[6px]'>{date}</div>
        <div className='uppercase font-bold'>{title}</div>
        <div className='text-[14px] mt-[10px]'>{content}</div>
      </div>
    </div>
  )
}
