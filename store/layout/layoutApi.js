import { apiSlice } from "../api/apiSlice";
import { setAboutMe, setBlogInfo, setProjectInfo, setServiceInfo } from "./layoutSlice";

export const layoutApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getLayout: builder.query({
			query: ( type ) => ({
				url: `/manage-layout?type=${type}`,
				method: "GET",
			}),

			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data?.success) {
						console.log("layout data -->", data.layout)
						if(data?.layout?.type === "about_me") {
							dispatch(setAboutMe(data?.layout?.data));
						} else if (data?.layout?.type === "service_info") {
							dispatch(setServiceInfo(data?.layout?.data));
						} else if (data?.layout?.type === "project_info") {
							dispatch(setProjectInfo(data?.layout?.data));
						} else if (data?.layout?.type === "blog_info") {
							dispatch(setBlogInfo(data?.layout?.data));
						} else {
							console.log("get layout err -->", data)
						}
					} else {
						console.log("get layout failed -->", data);
					}
				} catch (error) {
					console.log("get layout failed -->", error);
				}
			},
		}),

		updateLayout: builder.mutation({
			query: ({ type, data }) => ({
				url: `/manage-layout?type=${type}`,
				method: "PUT",
				body: data,
			}),
		}),
	}),
});

export const {
    useGetLayoutQuery,
    useUpdateLayoutMutation,
} = layoutApi;
