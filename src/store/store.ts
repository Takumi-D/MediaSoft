import { configureStore, combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./reducers/news-reducer";
import formReducer from "./reducers/form-reducer";

const rootReducer = combineReducers({
  newsReducer,
  formReducer,
});

const logMiddleware = (store: any) => (dispatch: any) => (action: any) => {
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  dispatch(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return dispatch(action);
};

const store = configureStore({
  reducer: {
    rootReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logMiddleware),
});

export default store;
