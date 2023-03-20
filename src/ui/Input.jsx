import TextField from "@mui/material/TextField";

function Input({ label, text, setText, type = "text", error }) {
  return (
    <>
      <TextField
        error={error}
        fullWidth
        label={label}
        variant="filled"
        value={text}
        margin="dense"
        type={type}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default Input;
