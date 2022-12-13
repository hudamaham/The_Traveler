import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../config/axios-global";
import { createSlice } from "@reduxjs/toolkit";

export const useAuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/grayti-api",
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password, email }) => ({
        url: "/login/",
        method: "post",
        data: { username, password, email },
      }),
    }),

    confirmPassword: builder.mutation({
      query: ({ name, password }) => ({
        url: "/password/change",
        method: "post",
        data: { name, password },
      }),
    }),
    register: builder.mutation({
      query: (newuser) => ({
        url: "/registration/",
        method: "post",
        data: newuser,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useConfirmPasswordMutation,
  useRegisterMutation,
} = useAuthApi;

const initialState = {
  user: undefined,
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
        localStorage.setItem("user", action.payload.user);
        localStorage.setItem("access", action.payload.key);

        state.isAuthenticated = true;

        state.user = action.payload.user;
      }
    );
    builder.addMatcher(
      useAuthApi.endpoints.login.matchRejected,
      (state, action) => {
        state.user = undefined;
        state.isAuthenticated = false;
        state.loginError = "Unvalid  username or password";
      }
    );
    builder.addMatcher(
      useAuthApi.endpoints.confirmPassword.matchFulfilled,
      (state, action) => {
        state = initialState;
        localStorage.clear();
      }
    );
    builder.addMatcher(
      useAuthApi.endpoints.confirmPassword.matchRejected,
      (state, action) => {}
    );
  },
});

export const { logOut, logInTemperory } = authSlice.actions;
export const { reducer } = authSlice;
