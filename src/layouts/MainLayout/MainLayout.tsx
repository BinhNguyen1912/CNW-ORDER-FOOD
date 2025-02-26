import React, { ReactNode } from 'react'
import FooterCommom from 'src/components/folder'
import Header from 'src/pages/Header'
interface props {
  children?: ReactNode
}
export default function MainLayout({ children }: props) {
  return (
    <div>
      <Header />
      {children}
      <FooterCommom />
    </div>
  )
}
