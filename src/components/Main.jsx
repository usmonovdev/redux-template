import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Main() {
  const state = useSelector((state) => state.article);
  console.log(state.article);
  return (
    <Container fixed>
      <div
        className="grid"
      >
        {state?.article.map((data) => {
          return (
            <Card key={data.id}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title={data.author.username}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.author.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default Main;
