import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Component/Home'
import Register from './Component/Register'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/register',
          element:<Register />
        }
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
