import { tagTypes } from "../tagTypes"
import { baseApi } from "./baseApi"


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ( data ) => ({
        url: `/auth/signup`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
})

export const { useCreateUserMutation } = authApi