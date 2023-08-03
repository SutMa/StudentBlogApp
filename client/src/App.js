import React from 'react'
import { createBrowserRouter,RouterProvider, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Single from './pages/Single'
import Write from './pages/Write'
import Home from './pages/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/single',
    element: <Single/>
  },
  {
    path: '/write',
    element: <Write/>
  }
])

function App() {
  return (
    <div>
    <RouterProvider router = {router}/>
    </div>
  )
}

export default App