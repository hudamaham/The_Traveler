import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../config/axios-global";
import { createSlice } from "@reduxjs/toolkit";

export const useQuestionChoiceApi = createApi({
  reducerPath: "QuestionChoiceApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/questionChoice",
  }),

  endpoints: (builder) => ({
    list: builder.query({
      query: (user_id) => ({
        url: `/get_questionChoice/${user_id}?`,
        method: "get",
      }),
    }),

    create: builder.mutation({
      query: (newuser) => ({
        url: "/create_questionChoice",
        method: "post",
        data: newuser,
      }),
    }),
    update: builder.mutation({
      query: (newuser) => ({
        url: "/update_questionChoice",
        method: "post",
        data: newuser,
      }),
    }),
    delete: builder.query({
      query: (user_id) => ({
        url: `/delete_questionChoice/${user_id}`,
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
} = useQuestionChoiceApi;

const initialState = {};

const questionChoiceSlice = createSlice({
  name: "questionChoice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useQuestionChoiceApi.endpoints.list.matchRejected,
      (state, action) => {}
    );
  },
});

// export const {} = questionChoiceSlice.actions;
export const { reducer } = questionChoiceSlice;
