import { useState } from 'react'
import './App.css'

import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Layout from './Layout'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './Component/About'
import Dynamic_route from './Dynamic_route'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home />,
          // children:[
          //   {
          //     path:"/user/:name",
          //     element:<Dynamic_route />
          //   }
          // ]
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:'/user/:id',
          element:<Dynamic_route />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
