import { apiSlice } from "../api/apiSlice";
import { setServices } from "./serviceSlice";

export const serviceApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllServices: builder.query({
			query: () => ({
				url: "/service/get-all",
				method: "GET",
			}),

			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data?.success) {
						dispatch(setServices(data?.services));
					} else {
						console.log("get all service failed -->", data);
					}
				} catch (error) {
					console.log("get all service failed -->", error);
				}
			},
		}),

		getOneService: builder.query({
			query: (id) => ({
				url: `/service/get-one/${id}`,
				method: "GET",
			}),
		}),

		createService: builder.mutation({
			query: (data) => ({
				url: "/service/create",
				method: "POST",
				body: data,
			}),
		}),

		updateService: builder.mutation({
			query: ({ id, data }) => ({
				url: `/service/update/${id}`,
				method: "PUT",
				body: data,
			}),
		}),

		deleteService: builder.mutation({
			query: (id) => ({
				url: `/service/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllServicesQuery,
	useGetOneServiceQuery,
	useCreateServiceMutation,
	useUpdateServiceMutation,
	useDeleteServiceMutation,
} = serviceApi;
