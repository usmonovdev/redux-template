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
        createArticleStart: state => {
            state.isLoading = true
        },
        createArticleSuccess: state => {
            state.isLoading = false
        },
        createArticleFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        deleteArticleStart: state => {
            state.isLoading = true
        },
        deleteArticleSuccess: state => {
            state.isLoading = false
        },
        deleteArticleFailure: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export const { 
    articleStart,
    articleSuccess,
    articleFailure,
    artilceDetailStart,
    artilceDetailSuccess,
    artilceDetailFailure,
    createArticleStart,
    createArticleSuccess,
    createArticleFailure,
    deleteArticleStart,
    deleteArticleSuccess,
    deleteArticleFailure
} = articleSlice.actions
export default articleSlice.reducer