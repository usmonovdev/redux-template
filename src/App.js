import AuthServie from './service/auth'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar, Article, CreateArticle } from './components'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { createTheme, ThemeProvider } from "@mui/material";
import "./app.css"
import "./index.scss"

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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e89e27",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-article' element={<CreateArticle />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
