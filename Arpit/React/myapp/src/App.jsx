import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Ref from './components/Ref'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout'
import Name from './components/Name'
import Form from './components/Form'

export const counter = createContext()

function App() {
 
  const [number,setNumber] = useState(0)
  const [ name, setname ] = useState()

  const router = createBrowserRouter([{
      path:"/",
      element:<Layout/>,
      children:[
        {
        path:"/",
        // element:<Navbar/>
        element:<Form/>
      },
      {
        path:"/home",
        element:<Home/>,
      },
      {
        path:"/ref",
        element:<Ref />
      },
      {
        path:"/name/:id",
        element: <Name/>
      }
    ]
  }])


  return (
    <div>
     
     <counter.Provider value={{number,setNumber}}>

    <RouterProvider router={router} />

    {/* <button onClick={()=>{setNumber(number + 1)}}>click</button> */}

     </counter.Provider>
   
    
    </div>
  )
}

export default App
