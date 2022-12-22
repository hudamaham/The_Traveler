import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../config/axios-global";
import { createSlice } from "@reduxjs/toolkit";

export const useCategoryApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/category",
  }),

  endpoints: (builder) => ({
    list: builder.query({
      query: () => ({
        url: "/get_category",
        method: "get",
      }),
    }),

    create: builder.mutation({
      query: (newuser) => ({
        url: "/create_category",
        method: "post",
        data: newuser,
      }),
    }),
    update: builder.mutation({
      query: (newuser) => ({
        url: "/update_category",
        method: "post",
        data: newuser,
      }),
    }),
    delete: builder.query({
      query: (id) => ({
        url: `/delete_category/${id}`,
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
} = useCategoryApi;

const initialState = {};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useCategoryApi.endpoints.list.matchRejected,
      (state, action) => {}
    );
  },
});

// export const {} = categorySlice.actions;
export const { reducer } = categorySlice;
