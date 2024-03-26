import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import ServicePosts from "../../service/service-posts";
import { updatePage } from "../actions";
var servicePosts = new ServicePosts();
var initialState = {
    data: [],
    outputSegment: [],
    error: {
        status: false,
        errorMessage: "",
    },
    loading: true,
    numberOfPages: NUMBER_OF_PAGES,
    homePage: HOME_PAGE,
    numberOfRecords: null,
};
export var fetchData = createAsyncThunk("fetchData", function (parameters) {
    return servicePosts.getData().then(function (response) {
        return { response: response, parameters: parameters };
    });
});
var reducer = createReducer(initialState, function (builder) {
    builder.addCase(fetchData.fulfilled, function (state, action) {
        var _a, _b;
        state.data = action.payload.response;
        state.loading = false;
        state.numberOfRecords =
            action.payload.response.length / state.numberOfPages;
        state.homePage = ((_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.parameters) === null || _b === void 0 ? void 0 : _b.id) || HOME_PAGE;
        state.outputSegment = action.payload.response.slice(state.homePage * state.numberOfRecords - state.numberOfRecords, state.homePage * state.numberOfRecords);
    });
    builder.addCase(fetchData.rejected, function (state) {
        state.loading = false;
        state.error.status = true;
        state.error.errorMessage = "Что-то пошло не так...";
    });
    builder.addCase(updatePage, function (state, action) {
        var _a;
        state.homePage = Number(((_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) || 1);
        state.outputSegment = state.data.slice(state.homePage * state.numberOfRecords - state.numberOfRecords, state.homePage * state.numberOfRecords);
    });
});
export default reducer;
