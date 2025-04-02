import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import ReactForm from './Components/ReactForm'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Table from './Components/Table'
import Editform from './Components/Editform'

function App() {
  const [count, setCount] = useState(0)

  let routes = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Form/>
        },
        {
          path:'/table',
          element:<Table/>
        },
        {
          path:'/editform/:id',
          element:<Form/>
        }
      ]
    }
  ])

  return (
    <>
      {/* <Form/> */}
      {/* <ReactForm/> */}
      <RouterProvider router={routes} />
    </>
  )
}

export default App
