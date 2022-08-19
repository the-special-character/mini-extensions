import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import classesReducer from './classesReducer'

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  classes: classesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
