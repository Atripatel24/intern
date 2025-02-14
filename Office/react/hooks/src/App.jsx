import { useState } from 'react'
import './App.css'

import Effect from './component/Use_Effect'
import UseRef from './component/Use_Ref'
import Condition from './component/Condition_Rendering'
import Input from './component/Input'
import  Navbar  from './component/Router'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Condition/>
        },
        {
          path:"/input",
          element:<Input/>
        },
        {
          path:"/ref",
          element:< UseRef/>
        }
      ]
    }
  
  ])

  return (
    <>
    {/* <Effect /> */}

    {/* <UseRef /> */}

    {/* <Condition/> */}

    {/* <Input /> */}

  
    <RouterProvider router={router}/>

    </>
  )
}

export default App
