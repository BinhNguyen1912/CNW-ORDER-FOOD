import React, { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom' //cung cap
import ProductList from './pages/ProductList'
import Login from './pages/login'
import Register from './pages/Register'
import RegisterLayout from './layouts/registerLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import Profile from './pages/Profile'
import { AppContext } from './contexts/App.Context'
import { path } from './common/path'

//ban chat cua compinent la tao ra 1 cai cap the tuong tu html -> tai su dung nhieu lan
// const isAuthenticated = false
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)

  //Neu nguoi dung dang nhap roi thi di tiep con khong quay ve trang dang nhap
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)

  //Chua Login thi cho vao , con login r dua toi trang list san pham
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
export default function useRouteElement() {
  const routeElements = useRoutes([
    //cach nay goi la custom Router
    {
      index: true, //co tac dung nhan biet dau la trang chinh
      path: path.home, //trang chu , mac dinh la se chay cai nay trc
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '', //route cha
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
