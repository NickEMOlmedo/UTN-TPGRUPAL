// import { useState } from 'react'
import './App.css'

import {Routes, Route} from 'react-router-dom' 
import Home from './components/Home'






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
    
    
    </>
  )
}

export default App

      // <div className="card">
      //   <button onClick={() => setCount((count) => count + 1)}>
      //     count is {count}
      //   </button>
      //   <p>
      //     Edit <code>src/App.jsx</code> and save to test HMR
      //   </p>
      // </div>