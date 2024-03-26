import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

import { State, UrlParam, UpdateAction, NewsItem } from "../type";
import ServicePosts from "../../service/service-posts";
import { updatePage } from "../actions";

const servicePosts: any = new ServicePosts();

const initialState: State = {
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

export const fetchData: any = createAsyncThunk(
  "fetchData",
  (parameters: UrlParam) => {
    return servicePosts.getData().then((response: NewsItem) => {
      return { response, parameters };
    });
  },
);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchData.fulfilled, (state, action) => {
    state.data = action.payload.response;
    state.loading = false;
    state.numberOfRecords =
      action.payload.response.length / state.numberOfPages;
    state.homePage = action.payload?.parameters?.id || HOME_PAGE;
    state.outputSegment = action.payload.response.slice(
      state.homePage * state.numberOfRecords - state.numberOfRecords,
      state.homePage * state.numberOfRecords,
    );
  });
  builder.addCase(fetchData.rejected, (state) => {
    state.loading = false;
    state.error.status = true;
    state.error.errorMessage = "Что-то пошло не так...";
  });
  builder.addCase(updatePage, (state, action: UpdateAction) => {
    state.homePage = Number(action.payload?.id || 1);
    state.outputSegment = state.data.slice(
      state.homePage * state.numberOfRecords - state.numberOfRecords,
      state.homePage * state.numberOfRecords,
    );
  });
});

export default reducer;
