import { IUser } from "@/types/common";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: () => ({
        url: `/users`,
        method: 'GET',
      }),
    }),
    getSingleUser: builder.query<IUser, string>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetSingleUserQuery } = userApi;