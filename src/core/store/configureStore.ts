import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas';
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  const store =  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
      sagaMiddleware,
    ],
    preloadedState
  })
  sagaMiddleware.run(rootSaga);
  return store;
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
