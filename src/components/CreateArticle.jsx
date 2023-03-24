import { Container } from "@mui/system";
import { useState } from "react";
import { ArticleForm } from "./index";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const articleProps = { title, setTitle, description, setDescription, body, setBody }

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
