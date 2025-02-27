import React, { ReactNode } from 'react'
interface props {
  iconJSX?: ReactNode
  quality?: number
}
export default function QualityNotification({ iconJSX, quality = 0 }: props) {
  return (
    <div className='flex relative justify-self-end'>
      {iconJSX}
      {iconJSX && quality != 0 && (
        <div className='bg-red-600 w-4 text-white left-5 h-4 rounded-full absolute p-2 flex justify-center items-center text-[9px]'>
          {quality}
        </div>
      )}
    </div>
  )
}
