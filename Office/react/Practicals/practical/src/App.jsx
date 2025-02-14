import { useState , createContext} from 'react'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Componenets/Home'
import Dynamic_Route from './Componenets/Dynamic_Route'
import Hooks from './Hooks/Hooks'
import Effect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseContext from './Hooks/UseContext'
import About from './Componenets/About'
import Form from './Componenets/Form'
import Api from './API/api'
import Fetch from './API/Fetch'
import Post from './API/Post'
import Update from './API/Update'
import Redux from './Redux/Redux'



export const counter = createContext(0)

function App() {
  const [count, setCount] = useState(0)
  

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
          // children: [
          //   {
          //     path: '/user/:id',
          //     element: <Dynamic_Route />
          //   }
          // ]
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/hook',
          element: <Hooks />,
          children: [
            {
              path: '/hook/effect',
              element: <Effect />
            },
            {
              path: '/hook/ref',
              element: < UseRef />
            },
            {
              path: '/hook/context',
              element: < UseContext />
            },
          ]
        },
        {
          path:'/user/:id',
          element:<Dynamic_Route />
        },
        {
          path:'/form',
          element:<Form />
        },
        {
          path:'/api',
          element:<Api />,
          children:[
            {
              path:'/api/fetch',
              element:<Fetch />
            },
            {
              path:'/api/post',
              element:<Post />
            },
            {
              path:'/api/update/:id',
              element:<Update />
            }
          ]
        },
        {
          path:'/redux',
          element: <Redux />
        }
      ]
    }
  ])

  return (
    <>
      <counter.Provider value={{ count, setCount }} >
        <RouterProvider router={route} />
      </counter.Provider>
    </>
  )
}

export default App
