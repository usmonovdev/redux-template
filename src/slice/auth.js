import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        loggedIn: false,
        user: null
    },
    reducers: {
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSuccess: state => {},
        loginUserFailure: state => {}
    }
})

export const { loginUserStart } = authSlice.actions
export default authSlice.reducer