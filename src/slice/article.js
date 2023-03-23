import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "article",
    initialState: {
        isLoading: false,
        article: [],
        articleDetail: null,
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
        },
        artilceDetailStart: state => {
            state.isLoading = true
        },
        artilceDetailSuccess: (state, action) => {
            state.isLoading = false
            state.articleDetail = action.payload
        },
        artilceDetailFailure: state => {
            state.isLoading = false
        },
    }
})

export const { articleStart, articleSuccess, articleFailure, artilceDetailStart, artilceDetailSuccess, artilceDetailFailure } = articleSlice.actions
export default articleSlice.reducer