import { combineReducers } from "@reduxjs/toolkit";
import {
  useAuthApi,
  reducer as authenReducer,
} from "../../services/auth-service";
import {
  useCategoryApi,
  reducer as categoryReducer,
} from "../../services/category-service";
import {
  useQuestionChoiceApi,
  reducer as questionChoiceReducer,
} from "../../services/question-choice-service";
import {
  useQuestionApi,
  reducer as questionReducer,
} from "../../services/questions-service";
import {
  useScoreApi,
  reducer as scoreReducer,
} from "../../services/score-service";
export const rootReducer = combineReducers({
  [useAuthApi.reducerPath]: useAuthApi.reducer,
  [useCategoryApi.reducerPath]: useCategoryApi.reducer,
  [useQuestionChoiceApi.reducerPath]: useQuestionChoiceApi.reducer,
  [useQuestionApi.reducerPath]: useQuestionApi.reducer,
  [useScoreApi.reducerPath]: useScoreApi.reducer,

  authentification: authenReducer,
  category: categoryReducer,
  questionChoice: questionChoiceReducer,
  question: questionReducer,
  score: scoreReducer,
});
