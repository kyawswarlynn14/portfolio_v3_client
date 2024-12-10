import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from './authSlice';
import Cookies from 'js-cookie';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders: (headers) => {
            const token = Cookies.get('token');
            if(token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: { email, password }
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const { data } = await queryFulfilled;
                    if(data?.success) {
                        Cookies.set("token", data?.token)
                        dispatch(userLoggedIn(data?.success))
                    } else {
                        console.log("login failed -->", data)
                    }
                } catch (error) {
                    console.log("login failed -->", error)
                }
            }
        }),
    }),
})

export const { useLoginMutation } = apiSlice;