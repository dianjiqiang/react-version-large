import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/views/home'))

const routes = [
  {
    path: '/',
    element: <Navigate to={'/home'}></Navigate>
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default routes
