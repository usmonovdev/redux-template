import React from "react";
import Skeleton from "@mui/material/Skeleton";

function Loader() {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Skeleton variant="rectangular" width={"100%"} height={140} sx={{ marginBottom: "10px" }} />
      <Skeleton variant="rounded" width={"100%"} height={30} sx={{ marginBottom: "10px" }} />
      <Skeleton variant="rounded" width={"60%"} height={15} />
    </div>
  );
}

export default Loader;
