import React from 'react'
import { useRoutes } from 'react-router-dom' //cung cap
import ProductList from './pages/ProductList'
import Login from './pages/login'
import Register from './pages/Register'
import RegisterLayout from './layouts/registerLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

//ban chat cua compinent la tao ra 1 cai cap the tuong tu html -> tai su dung nhieu lan

export default function useRouteElement() {
  const routeElements = useRoutes([
    //cach nay goi la custom Router
    {
      path: '/', //trang chu , mac dinh la se chay cai nay trc
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
