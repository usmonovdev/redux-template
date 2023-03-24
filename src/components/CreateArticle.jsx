import { Container } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleService from "../service/articles";
import { createArticleFailure, createArticleStart, createArticleSuccess } from "../slice/article";
import { ArticleForm } from "./index";

function CreateArticle() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault()
    const article = { title, description, body }
    dispatch(createArticleStart())
    try {
      await ArticleService.postArticle(article)
      dispatch(createArticleSuccess())
      navigate("/")
    } catch (error) {
      dispatch(createArticleFailure(error))
    }
  }
  
  const articleProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }
  return (
    <Container fixed>
      <div style={{ marginTop: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Create article</h1>
        <ArticleForm {...articleProps} />
      </div>
    </Container>
  );
}

export default CreateArticle;
