import React, { ReactNode } from 'react'
import FooterCommom from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

/**
 * PROPS -> truyen tai giua lieu giua cac component voi nhau
 */
interface props {
  children?: ReactNode //cu phap ts
}
export default function RegisterLayout({ children }: props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <FooterCommom />
    </div>
  )
}

//component
