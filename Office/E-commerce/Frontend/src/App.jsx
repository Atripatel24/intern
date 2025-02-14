import React, { createContext } from 'react'
import './App.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

export const mainContext = createContext()

function App() {
 
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        }
      ]
    }
  ])

  let contextValue = {

  }
  

  return (
    <>
    <mainContext.Provider value={contextValue}>
     <RouterProvider router={route} ></RouterProvider>
    </mainContext.Provider>
    </>
  )
}

export default App
