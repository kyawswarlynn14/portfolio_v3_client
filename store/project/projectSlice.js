import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: null
};

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjects: (state, { payload }) => {
            state.projects = payload;
        },
    }
})

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;