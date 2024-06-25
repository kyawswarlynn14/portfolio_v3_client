import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../api/authSlice";
import { setMessages } from "./messageSlice";

export const messageApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllMessages: builder.query({
			query: () => ({
				url: "/email/get-all",
				method: "GET",
			}),

			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					// console.log('messages -->', data)
					if (data?.success) {
						dispatch(userLoggedIn(data?.success));
						dispatch(setMessages(data?.messages));
					} else {
						dispatch(userLoggedIn(data?.success));
						console.log("get all message failed -->", data);
					}
				} catch (error) {
					dispatch(userLoggedIn(false));
					console.log("get all message failed -->", error);
				}
			},
		}),

		getOneMessage: builder.query({
			query: (id) => ({
				url: `/email/get-one/${id}`,
				method: "GET",
			}),
		}),

		createMessage: builder.mutation({
			query: (data) => ({
				url: "/email/create",
				method: "POST",
				body: data,
			}),
		}),

		deleteMessage: builder.mutation({
			query: (id) => ({
				url: `/email/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllMessagesQuery,
	useGetOneMessageQuery,
	useCreateMessageMutation,
	useDeleteMessageMutation,
} = messageApi;
