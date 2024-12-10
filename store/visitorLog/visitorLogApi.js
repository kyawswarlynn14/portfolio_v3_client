import { apiSlice } from "../api/apiSlice";

export const visitorLogApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllVisitorLogs: builder.query({
			query: () => ({
				url: "/visitor-log/get-all",
				method: "GET",
			}),
		}),

		getOneVisitorLog: builder.query({
			query: (id) => ({
				url: `/visitor-log/get-one/${id}`,
				method: "GET",
			}),
		}),

		createVisitorLog: builder.mutation({
			query: () => ({
				url: "/visitor-log/create",
				method: "POST",
			}),
		}),

		deleteVisitorLog: builder.mutation({
			query: (id) => ({
				url: `/visitor-log/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
    useGetAllVisitorLogsQuery,
    useGetOneVisitorLogQuery,
    useCreateVisitorLogMutation,
    useDeleteVisitorLogMutation,
} = visitorLogApi;
