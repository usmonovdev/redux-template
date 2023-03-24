import TextField from "@mui/material/TextField";

function TextArea({ label, text, setText, rows }) {
  return <>
    <TextField
        fullWidth
        multiline
        label={label}
        variant="filled"
        value={text}
        margin="dense"
        type="text"
        rows={rows}
        onChange={(e) => setText(e.target.value)}
      />
  </>;
}

export default TextArea;
