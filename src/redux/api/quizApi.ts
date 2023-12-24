import { tagTypes } from "../tagTypes"
import { baseApi } from "./baseApi"


export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createQuiz: builder.mutation({
      query: ( data ) => ({
        url: `/quiz/create`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getQuiz: builder.query({
      query: () => ({
        url: `/quiz`,
        method: 'GET',
      }),
    }),
    getSingleQuiz: builder.query({
      query: (categoryId) => ({
        url: `/quiz/?category=${categoryId}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useCreateQuizMutation, useGetQuizQuery, useGetSingleQuizQuery } = quizApi;