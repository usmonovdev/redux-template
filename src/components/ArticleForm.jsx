import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import { Input, TextArea } from "./index";

function ArticleForm(props) {
  const { isLoading } = useSelector((state) => state.article);
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit
  } = props;
  return (
    <form onSubmit={formSubmit}>
      <Input
        label="Title"
        type="text"
        text={title}
        setText={setTitle}
      />
      <TextArea
        label="Description"
        text={description}
        setText={setDescription}
        rows={5}
      />
      <TextArea
        label="Body"
        text={body}
        setText={setBody}
        rows={9}
      />
      <LoadingButton
        fullWidth
        disableElevation
        loading={isLoading}
        type="submit"
        variant="contained"
        disabled={isLoading}
      >
        Create
      </LoadingButton>
    </form>
  );
}

export default ArticleForm;
