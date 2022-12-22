import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../config/axios-global";
import { createSlice } from "@reduxjs/toolkit";

export const useQuestionApi = createApi({
  reducerPath: "QuestionApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/question",
  }),

  endpoints: (builder) => ({
    list: builder.query({
      query: (id_category) => ({
        url: `/get_question/${id_category}?`,
        method: "get",
      }),
    }),

    create: builder.mutation({
      query: (newuser) => ({
        url: "/create_question",
        method: "post",
        data: newuser,
      }),
    }),
    update: builder.mutation({
      query: (newuser) => ({
        url: "/update_question",
        method: "post",
        data: newuser,
      }),
    }),
    delete: builder.query({
      query: (question_id) => ({
        url: `/delete_question/${question_id}`,
        method: "get",
      }),
    }),
  }),
});

export const {
  useCreateMutation,
  useListQuery,
  useUpdateMutation,
  useDeleteQuery,
} = useQuestionApi;

const initialState = {};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useQuestionApi.endpoints.list.matchRejected,
      (state, action) => {}
    );
  },
});

// export const {} = questionSlice.actions;
export const { reducer } = questionSlice;
