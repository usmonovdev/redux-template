import { LoadingButton } from "@mui/lab";
import { Input, TextArea } from "./index";

function ArticleForm(props) {
  const { title, setTitle, description, setDescription, body, setBody } = props;
  return (
    <form>
      <Input label="Title" type="text" text={title} setText={setTitle} />
      <TextArea
        label="Description"
        text={description}
        setText={setDescription}
        rows={5}
      />
      <TextArea label="Body" text={body} setText={setBody} rows={9} />
      <LoadingButton
        fullWidth
        type="submit"
        variant="contained"
        disableElevation
      >
        Create
      </LoadingButton>
    </form>
  );
}

export default ArticleForm;
