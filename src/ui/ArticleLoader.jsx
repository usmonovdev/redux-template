import React from "react";
import Skeleton from "@mui/material/Skeleton";

function ArticleLoader() {
  return (
    <div>
      <Skeleton
        variant="rounded"
        width={"60%"}
        height={40}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        variant="rounded"
        width={"40%"}
        height={20}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        variant="rounded"
        width={"40%"}
        height={20}
        sx={{ marginBottom: "10px" }}
      />
    </div>
  );
}

export default ArticleLoader;
