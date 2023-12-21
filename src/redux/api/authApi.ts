import { ILogInData, IUser } from "@/types/common"
import { tagTypes } from "../tagTypes"
import { baseApi } from "./baseApi"


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ( data:IUser ) => ({
        url: `/auth/signup`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    logInUser: builder.mutation({
      query: ( data:ILogInData ) => ({
        url: `/auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
})

export const { useCreateUserMutation, useLogInUserMutation } = authApi