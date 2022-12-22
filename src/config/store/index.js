import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; // imports from redux-persist
import { useAuthApi } from "../../services/auth-service";
import { useCategoryApi } from "../../services/category-service";
import { useQuestionChoiceApi } from "../../services/question-choice-service";
import { useQuestionApi } from "../../services/questions-service";
import { useScoreApi } from "../../services/score-service";
import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage,
      whitelist: ["authentification"],
    },
    rootReducer
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      useAuthApi.middleware,
      useCategoryApi.middleware,
      useQuestionChoiceApi.middleware,
      useQuestionApi.middleware,
      useScoreApi.middleware,
    ]),
});

export const persistor = persistStore(store);
