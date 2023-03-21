import { createSlice } from "@reduxjs/toolkit";
import { saveToken } from "../helpers/storage";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        loggedIn: false,
        error: null,
        user: null
    },
    reducers: {
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
            saveToken("TOKEN", action.payload.token)
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logoutUser: state => {
            state.loggedIn = false
            state.user = null
        }
    }
})

export const { signUserStart, signUserSuccess, signUserFailure, logoutUser } = authSlice.actions
export default authSlice.reducer