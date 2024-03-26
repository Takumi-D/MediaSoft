import { configureStore, combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./reducers/news-reducer";
import formReducer from "./reducers/form-reducer";
var rootReducer = combineReducers({
    newsReducer: newsReducer,
    formReducer: formReducer,
});
var logMiddleware = function (store) { return function (dispatch) { return function (action) {
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    dispatch(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return dispatch(action);
}; }; };
var store = configureStore({
    reducer: {
        rootReducer: rootReducer,
    },
    devTools: true,
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(logMiddleware);
    },
});
export default store;
