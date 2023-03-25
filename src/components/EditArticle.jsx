import { ArticleForm } from "./index";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleService from "../service/articles";
import { useDispatch } from "react-redux";
import {
  artilceDetailFailure,
  artilceDetailStart,
  artilceDetailSuccess,
  createArticleFailure,
  createArticleStart,
  createArticleSuccess
} from "../slice/article";

function EditArticle() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const getArticle = async () => {
      dispatch(artilceDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        setTitle(response.data.article.title);
        setDescription(response.data.article.description);
        setBody(response.data.article.body);
        dispatch(artilceDetailSuccess(response.data.article));
      } catch {
        dispatch(artilceDetailFailure());
      }
    };
    getArticle();
  }, [slug]);

  const formSubmit = async (e) => {
    e.preventDefault();
    const response = { title, body, description };
    dispatch(createArticleStart())
    navigate("/")
    try {
        await ArticleService.putArticle(slug, response)
        dispatch(createArticleSuccess(response))
    } catch (error) {
        dispatch(createArticleFailure())
    }
  };

  const articleProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  };
  return (
    <Container fixed>
      <div style={{ marginTop: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Edit article</h1>
        <ArticleForm {...articleProps} />
      </div>
    </Container>
  );
}

export default EditArticle;
