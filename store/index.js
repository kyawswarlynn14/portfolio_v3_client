'use client'

import {configureStore} from '@reduxjs/toolkit';
import { apiSlice } from "./api/apiSlice";
import authSlice from './api/authSlice';
import serviceSlice from './service/serviceSlice';
import projectSlice from './project/projectSlice';
import certificateSlice from './certificate/certificateSlice';
import messageSlice from './message/messageSlice';
import layoutSlice from './layout/layoutSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        service: serviceSlice,
        project: projectSlice,
        certificate: certificateSlice,
        message: messageSlice,
        layout: layoutSlice,
    }, 
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
