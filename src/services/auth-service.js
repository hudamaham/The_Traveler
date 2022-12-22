import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../config/axios-global";
import { createSlice } from "@reduxjs/toolkit";

export const useAuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/user",
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password, email }) => ({
        url: "/get_user/",
        method: "post",
        data: { username, password, email },
      }),
    }),

    register: builder.mutation({
      query: (newuser) => ({
        url: "/create_user",
        method: "post",
        data: newuser,
      }),
    }),
  }),
});

export const {
  useLoginMutation,

  useRegisterMutation,
} = useAuthApi;

const initialState = {
  user: {},
  isAuthenticated: false,
  loginError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state = initialState;
      localStorage.clear();
      //window.location.reload();

      return state;
    },
    logInTemperory: (state) => {
      state.isAuthenticated = true;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      useAuthApi.endpoints.login.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          localStorage.setItem("user", action.payload);
          localStorage.setItem("access", action.payload.user);

          state.isAuthenticated = true;
          state.loginError = "";
          state.user = action.payload;
        } else {
          state.loginError = "Unvalid  username or password";
        }
      }
    );
    builder.addMatcher(
      useAuthApi.endpoints.login.matchRejected,
      (state, action) => {
        state.user = undefined;
        state.isAuthenticated = false;
        console.log(action.payload);
        state.loginError = "Unvalid  username or password";
      }
    );
  },
});

export const { logOut, logInTemperory } = authSlice.actions;
export const { reducer } = authSlice;
