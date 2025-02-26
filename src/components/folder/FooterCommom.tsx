import React from 'react'

export default function FooterCommom() {
  return (
    <footer className='p-10 bg-neutral-300'>
      <div className='max-w-7xl px-5 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8'>
          <div className='lg:col-span-0'>
            <p>© 2025 Restaurent. Tất cả các quyền được bảo lưu.</p>
          </div>
          <div className='lg:col-span-2'>
            <p>
              Quốc gia & Khu vực: Singapore Indonesia Thái Lan Malaysia Việt Nam Philippines Brazil México Colombia
              Chile Đài Loan
            </p>
          </div>
        </div>
        <div className='max-w-4xl p-5 flex justify-between items-center m-auto '>
          <div>Chính sách bảo mật</div>
          <div>Chính sách hoàn tiền</div>
          <div>Chính sách vận chuyển</div>
          <div>Hướng dẫn sử dụng</div>
        </div>
      </div>
      <div className='max-w-5xl px-4 mx-auto text-center'>
        <h4 className='text-lg font-medium mb-4'>THANH TOÁN</h4>
        <ul className='flex justify-between items-center'>
          <li>
            <a href=''>
              <img src='https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8' alt='' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src='https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16' alt='' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src='https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08' alt='' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src='https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c' alt='' />
            </a>
          </li>
          <li>
            <a href=''>
              <img
                src='https://down-vn.img.susercontent.com/file/d4bbeahttps://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281'
                alt=''
              />
            </a>
          </li>
          <li>
            <a href=''>
              <img src='https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06' alt='' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
