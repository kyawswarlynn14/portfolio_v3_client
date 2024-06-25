import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: null
};

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        setServices: (state, { payload }) => {
            state.services = payload;
        },
    }
})

export const { setServices } = serviceSlice.actions;
export default serviceSlice.reducer;