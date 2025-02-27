import {
  arrow,
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
interface props {
  children?: ReactNode
  PopoverComponent?: ReactNode
}
export default function Popover({ PopoverComponent, children }: props) {
  //Poopover
  const [open, setOpen] = useState(false)
  const arrowRef = useRef(null) //dung de tham chieu den mui ten
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: open, //kiểm tra trạng thái mở popover
    onOpenChange: setOpen, //thay đổi trạng thái đóng mở
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })], //offset : khoảng cách từ popver đến nút , flip : nếu bị tràn trên ui thi tự động đổi hướng , shift : dịch chuyển pôper để tránh bị cắt bớtbớt
    whileElementsMounted: autoUpdate //cập nhật vị trí khi có thay đổi trên UI,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss, role])

  //ham xu ly di chuot vao mo popover
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  //ham xu ly di chuot ra , dat timeout de tranh mat ngay lap tuc
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 200)
  }
  //ham click vao ngn ngu vao the mo popover , dong popover ngay lap tuc
  // const handleSelectPopover = () => {
  //   setOpen(false)
  // }
  return (
    <div className='z-50'>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <div className='flex hover:text-gray-400'>
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
        </div> */}
        {children}
      </div>
      <FloatingFocusManager context={context} modal={false}>
        <AnimatePresence>
          {open && (
            <div
              ref={refs.setFloating}
              {...getFloatingProps()}
              style={floatingStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                initial={{ opacity: 0, transform: 'scale(0)' }}
                animate={{ opacity: 1, transform: 'scale(1)' }}
                exit={{ opacity: 0, transform: 'scale(0)' }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className='border-x-transparent border-t-transparent border-b-white border-[11px] z-50 absolute z-10'
                  ref={arrowRef}
                  style={{
                    left: middlewareData.arrow?.x ?? 0,
                    top: middlewareData.arrow?.y ?? 0,
                    transform: 'translateY(-95%)'
                  }}
                />
                {/* <div className='bg-black shadow-md rounded-sm  text-white text-sm'>
                  <div className='flex flex-col py-1 px-2'>
                    <button className='px-3 py-2 hover:text-orange-300 border-b'>Tiếng Việt</button>
                    <button className='px-3 py-2 hover:text-orange-300'>Tiếng Anh</button>
                  </div>
                </div> */}
                {PopoverComponent}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </FloatingFocusManager>
    </div>
  )
}
