import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    aboutMe: null,
    serviceInfo: null,
    projectInfo: null,
    blogInfo: null,
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setAboutMe: (state, { payload }) => {
            state.aboutMe = payload;
        },
        setServiceInfo: (state, { payload }) => {
            state.serviceInfo = payload;
        },
        setProjectInfo: (state, { payload }) => {
            state.projectInfo = payload;
        },
        setBlogInfo: (state, { payload }) => {
            state.blogInfo = payload;
        },
    }
})

export const { setAboutMe, setServiceInfo, setProjectInfo, setBlogInfo } = layoutSlice.actions;
export default layoutSlice.reducer;