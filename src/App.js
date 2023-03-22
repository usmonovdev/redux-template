import AuthServie from './service/auth'
import ArticleService from './service/articles'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './components'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { articleFailure, articleStart, articleSuccess } from './slice/article'
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
