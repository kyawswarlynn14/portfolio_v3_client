import { apiSlice } from "../api/apiSlice";
import { setProjects } from "./projectSlice";

export const projectApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllProjects: builder.query({
			query: () => ({
				url: "/project/get-all",
				method: "GET",
			}),

			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data?.success) {
						dispatch(setProjects(data?.projects));
					} else {
						console.log("get all project failed -->", data);
					}
				} catch (error) {
					console.log("get all project failed -->", error);
				}
			},
		}),

		getOneProject: builder.query({
			query: (id) => ({
				url: `/project/get-one/${id}`,
				method: "GET",
			}),
		}),

		createProject: builder.mutation({
			query: (data) => ({
				url: "/project/create",
				method: "POST",
				body: data,
			}),
		}),

		updateProject: builder.mutation({
			query: ({ id, data }) => ({
				url: `/project/update/${id}`,
				method: "PUT",
				body: data,
			}),
		}),

		deleteProject: builder.mutation({
			query: (id) => ({
				url: `/project/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllProjectsQuery,
	useGetOneProjectQuery,
	useCreateProjectMutation,
	useUpdateProjectMutation,
	useDeleteProjectMutation,
} = projectApi;
