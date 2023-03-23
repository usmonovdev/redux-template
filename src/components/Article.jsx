import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  artilceDetailFailure,
  artilceDetailStart,
  artilceDetailSuccess,
} from "../slice/article";
import ArticleService from "../service/articles";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import moment from "moment/moment";

function Article() {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);
  const { articleDetail } = useSelector((state) => state.article);
  console.log(articleDetail);
  const getArticle = async () => {
    const response = await ArticleService.getArticleDetail(slug);
    console.log(response);
    dispatch(artilceDetailStart());
    try {
      dispatch(artilceDetailSuccess(response.data.article));
    } catch (error) {
      dispatch(artilceDetailFailure());
    }
  };

  useEffect(() => {
    getArticle();
  }, [slug]);

  return (
    <Container fixed>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          // boxShadow: 10,
          height: "300px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <h2>{articleDetail?.title}</h2>
        <p>{articleDetail?.description}</p>
        <p><span style={{ fontWeight: "600" }}>Created At:</span> {moment(articleDetail?.createdAt).format("DD MMM, YYYY")}</p>
        <p>{articleDetail?.body}</p>
      </div>
    </Container>
  );
}

export default Article;
