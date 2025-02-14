import { useState , createContext} from 'react'
import './App.css'
import Navbar from './Component/Navbar'

export  const counter = createContext(0)

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <counter.Provider value={{count,setCount}}>
      <Navbar />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> 
      </counter.Provider>
    </>
  )
}

export default App
