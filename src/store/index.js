import { configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "../slice/article";
import AuthSlice from "../slice/auth";

export default configureStore({
    reducer: {
        auth: AuthSlice,
        article: ArticleSlice
    },
    devTools: process.env.NODE_ENV !== "production"
});