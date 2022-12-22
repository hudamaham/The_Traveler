import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../config/axios-global";
import { createSlice } from "@reduxjs/toolkit";

export const useScoreApi = createApi({
  reducerPath: "ScoreApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/score",
  }),

  endpoints: (builder) => ({
    list: builder.query({
      query: (userid) => ({
        url: `/get_score/${userid}?`,
        method: "get",
      }),
    }),

    create: builder.mutation({
      query: (newuser) => ({
        url: "/create_score",
        method: "post",
        data: newuser,
      }),
    }),
    update: builder.mutation({
      query: (newuser) => ({
        url: "/update_score",
        method: "post",
        data: newuser,
      }),
    }),
    delete: builder.query({
      query: (userid) => ({
        url: `/delete_score/${userid}`,
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
} = useScoreApi;

const initialState = {};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useScoreApi.endpoints.list.matchRejected,
      (state, action) => {}
    );
  },
});

// export const {} = scoreSlice.actions;
export const { reducer } = scoreSlice;
