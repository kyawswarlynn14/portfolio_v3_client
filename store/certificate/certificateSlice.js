import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    certificates: null
};

const certificateSlice = createSlice({
    name: "certificate",
    initialState,
    reducers: {
        setCertificates: (state, { payload }) => {
            state.certificates = payload;
        },
    }
})

export const { setCertificates } = certificateSlice.actions;
export default certificateSlice.reducer;