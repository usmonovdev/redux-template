import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register } from './components'
import "./app.css"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
