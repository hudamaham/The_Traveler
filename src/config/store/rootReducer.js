import { combineReducers } from "@reduxjs/toolkit";
import {
  useAuthApi,
  reducer as authenReducer,
} from "../../services/auth-service";

export const rootReducer = combineReducers({
  [useAuthApi.reducerPath]: useAuthApi.reducer,

  authentification: authenReducer,
});
