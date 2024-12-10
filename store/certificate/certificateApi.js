import { apiSlice } from "../api/apiSlice";
import { setCertificates } from "./certificateSlice";

export const certificateApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllCertificates: builder.query({
			query: () => ({
				url: "/certificate/get-all",
				method: "GET",
			}),

			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data?.success) {
						dispatch(setCertificates(data?.certificates));
					} else {
						console.log("get all certificate failed -->", data);
					}
				} catch (error) {
					console.log("get all certificate failed -->", error);
				}
			},
		}),

		getOneCertificate: builder.query({
			query: (id) => ({
				url: `/certificate/get-one/${id}`,
				method: "GET",
			}),
		}),

		createCertificate: builder.mutation({
			query: (data) => ({
				url: "/certificate/create",
				method: "POST",
				body: data,
			}),
		}),

		updateCertificate: builder.mutation({
			query: ({ id, data }) => ({
				url: `/certificate/update/${id}`,
				method: "PUT",
				body: data,
			}),
		}),

		deleteCertificate: builder.mutation({
			query: (id) => ({
				url: `/certificate/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllCertificatesQuery,
	useGetOneCertificateQuery,
	useCreateCertificateMutation,
	useUpdateCertificateMutation,
	useDeleteCertificateMutation,
} = certificateApi;
