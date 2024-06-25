import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: null
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessages: (state, { payload }) => {
            state.messages = payload;
        },
    }
})

export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;