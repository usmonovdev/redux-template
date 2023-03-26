import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  artilceDetailFailure,
  artilceDetailStart,
  artilceDetailSuccess,
} from "../slice/article";
import ArticleService from "../service/articles";
import { Container } from "@mui/system";
import moment from "moment/moment";
import { ArticleLoader } from "./index";

function Article() {
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.article);

  const { articleDetail, isLoading } = useSelector((state) => state.article);
  const getArticle = async () => {
    const response = await ArticleService.getArticleDetail(slug);
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
          height: "300px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {isLoading ? (
          <>
            <ArticleLoader />
          </>
        ) : (
          <>
            <h2>{articleDetail?.title}</h2>
            <p>{articleDetail?.description}</p>
            <p>
              <span style={{ fontWeight: "600" }}>Created At:</span>{" "}
              {moment(articleDetail?.createdAt).format("DD MMM, YYYY")}
            </p>
            <p>{articleDetail?.body}</p>
          </>
        )}
      </div>
    </Container>
  );
}

export default Article;
