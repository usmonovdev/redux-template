import { Container } from "@mui/material";
import React from "react";
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
      {state?.article.map((data) => {
        return (
          <Card key={data.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={data.author.image}
              title={data.author.username}
            />
            <CardContent>
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
    </Container>
  );
}

export default Main;
