import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './components'
import "./app.css"
import "./index.scss"
import AuthServie from './service/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'

function App() {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthServie.getUser()
      dispatch(signUserSuccess(response.data.user))
    } catch (error) {
      console.log("Error!");
    }
  }
  useEffect(() => {
    getUser()
  }, [])
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
