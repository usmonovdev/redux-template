import AuthServie from './service/auth'
import ArticleService from './service/articles'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar, Article, CreateArticle } from './components'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { articleFailure, articleStart, articleSuccess } from './slice/article'
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

  const getArticle = async () => {
    dispatch(articleStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(articleSuccess(response.data.articles))
    } catch (error) {
      dispatch(articleFailure(error))
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
    getArticle()
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
