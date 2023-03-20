import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidError() {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error)?.map((name) => {
      const msg = error[name]?.join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  return (
    <>
      {error !== null ? (
        <>
          {errorMessage()?.map((err) => {
            return (
              <Alert key={err} icon={false} severity="error" variant="filled" sx={{ width: "100%", marginBottom: "10px" }}>
                <AlertTitle sx={{ marginBottom: "0" }}>{err}</AlertTitle>
              </Alert>
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ValidError;
