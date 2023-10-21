import { createSlice } from "@reduxjs/toolkit";


const imageSlice = createSlice({
    name: "login_auth",
    initialState: {
        isLogin: true
    },
    reducers: {
        login: (state, action) => { state.isLogin = true },
        signup: (state, action) => { state.isLogin = true },
        logout: (state, action) => { state.isLogin = false },
    }
});

export const { login, logout, signup } = imageSlice.actions;

export default imageSlice.reducer;