import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Otp from './Components/Otp'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/otp' element={<Otp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
