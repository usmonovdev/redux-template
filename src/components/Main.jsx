import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArticleService from "../service/articles";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./index";
import { useNavigate } from "react-router-dom";
import {
  articleFailure,
  articleStart,
  articleSuccess,
  deleteArticleFailure,
  deleteArticleStart,
  deleteArticleSuccess,
} from "../slice/article";
import { useEffect } from "react";

function Main() {
  const navigate = useNavigate();
  const { article, isLoading } = useSelector((state) => state.article);
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getArticle = async () => {
    dispatch(articleStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(articleSuccess(response.data.articles));
    } catch (error) {
      dispatch(articleFailure(error));
      console.log(error);
    }
  };

  const deleteArticle = async (e) => {
    dispatch(deleteArticleStart());
    try {
      await ArticleService.deleteArticle(e);
      dispatch(deleteArticleSuccess());
      getArticle()
    } catch (error) {
      console.log(error);
      dispatch(deleteArticleFailure(error));
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <Container fixed>
      <div className="grid">
        {isLoading ? (
          <>
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        ) : (
          <>
            {article?.map((data) => {
              return (
                <Card key={data.id} sx={{ boxShadow: 10 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    title={data.author.username}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{
                        fontSize: "20px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                      component="div"
                    >
                      {data.author.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => navigate(`/article/${data.slug}`)}
                      variant="contained"
                      disableElevation
                      size="small"
                    >
                      View
                    </Button>
                    {loggedIn && user?.username == data.author?.username ? (
                      <>
                        <Button
                          variant="outlined"
                          disableElevation
                          size="small"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => deleteArticle(data.slug)}
                          variant="outlined"
                          disableElevation
                          color="error"
                          size="small"
                        >
                          Delete
                        </Button>
                      </>
                    ) : (
                      ""
                    )}
                  </CardActions>
                </Card>
              );
            })}
          </>
        )}
      </div>
    </Container>
  );
}

export default Main;
