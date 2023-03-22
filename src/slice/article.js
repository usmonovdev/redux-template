import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "article",
    initialState: {
        isLoading: false,
        article: [],
        error: null
    },
    reducers: {
        articleStart: state => {
            state.isLoading = true
        },
        articleSuccess: (state, action) => {
            state.article = action.payload
            state.isLoading = false
        },
        articleFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { articleStart, articleSuccess, articleFailure } = articleSlice.actions
export default articleSlice.reducer