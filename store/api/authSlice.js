import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdmin: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, { payload }) => {
            state.isAdmin = payload;
        },
        userLoggedOut: (state) => {
            state.isAdmin = false;
        }
    }
})

export const { userLoggedIn, userLoggedOut} = authSlice.actions;
export default authSlice.reducer;