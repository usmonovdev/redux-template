import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        loggedIn: false,
        error: null,
        user: null
    },
    reducers: {
        // LOGIN
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSuccess: state => {
            state.isLoading = false
            state.loggedIn = true
        },
        loginUserFailure: state => {
            state.error = false
            state.loggedIn = false
            state.error = "Error!"
        },
        // REGISTER
        registerUserStart: state => {
            state.isLoading = true
        },
        registerUserSuccess: state => {
            state.isLoading = false
            state.loggedIn = true
        },
        registerUserFailure: state => {
            state.isLoading = false
            state.loggedIn = false
            state.error = "Error!"
        }
    }
})

export const { loginUserStart, loginUserSuccess, loginUserFailure, registerUserStart, registerUserSuccess, registerUserFailure } = authSlice.actions
export default authSlice.reducer