import React from 'react'
import { createBrowserRouter,RouterProvider, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Single from './pages/Single'
import Write from './pages/Write'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './style.scss'

export const Layout = () =>{
  return (
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <Single/>
      },
      {
        path: '/write',
        element: <Write/>
      },
    ]
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router = {router}/>
      </div>
    </div>
  )
}


export default App