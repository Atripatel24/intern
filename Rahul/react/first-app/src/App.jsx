import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Effect from './Components/Effect'
import Ref from './Components/Ref'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Layout'

function App() {

  const [number, setNumber] = useState(0)
  const [data, setdata] = useState("old")

  let increment = () =>{
    setNumber(number+1)
  }
  let decrement = () => {
    setNumber(number - 1)
  }
  // console.log(data)
  let set = () => {
    setdata("newdata")
  }


  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/effrct",
          element:<Effect/>
        },
        {
          path:"/ref",
          element:<Ref />
        }
      ]
    }
  ])

  return (
    <>
      {/* <h1>app compoment</h1>
      app : {number} <br />
      data : {data} <br />
      <button onClick={increment}>+</button> &nbsp;&nbsp;
      <button onClick={decrement}>-</button> &nbsp;&nbsp;
      <button onClick={set}>data</button>
      <Home value={{number,data}}/> */}

        {/* <Effect /> */}

        {/* <Ref /> */}

        <RouterProvider router={routes}/>

    </>
  )
}

export default App
