import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducers/Count"

export default configureStore({ 
    reducer: countReducer,
    devTools: process.env.NODE_ENV !== "production"
});