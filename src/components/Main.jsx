import { Container, createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Loader } from "./index";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.article);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e89e27",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <div className="grid">
          {state.isLoading ? (
            <>
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          ) : (
            <>
              {state?.article.map((data) => {
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
                      <Button variant="outlined" disableElevation size="small">
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        disableElevation
                        color="error"
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Main;
