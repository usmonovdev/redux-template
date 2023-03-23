import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { artilceDetailFailure, artilceDetailStart, artilceDetailSuccess } from "../slice/article"
import ArticleService from "../service/articles";

function Article() {
  const { slug } = useParams();
  const dispatch = useDispatch(state => state.article)

  const getArticle = async () => {
    const response = await ArticleService.getArticleDetail(slug)
    console.log(response);
    dispatch(artilceDetailStart())
    try {
      dispatch(artilceDetailSuccess(response.data.article))
    } catch (error) {
      dispatch(artilceDetailFailure())
    }
  }

  useEffect(() => {
    getArticle()
  }, [slug])

  return <div>Article</div>;
}

export default Article;
