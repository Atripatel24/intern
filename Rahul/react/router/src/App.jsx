import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'

import { createBrowserRouter , RouterProvider} from "react-router-dom"
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)
// npm i react-router-dom
  let routes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
