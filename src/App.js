import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './components'
import "./app.css"
import "./index.scss"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
