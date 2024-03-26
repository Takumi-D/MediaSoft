import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateSelector } from "../type";
const stateNews = (state: StateSelector) => state.rootReducer.newsReducer;

const newsSelector = createDraftSafeSelector(
  stateNews,
  (newsReducer) => newsReducer.outputSegment,
);

const loadingSelector = createDraftSafeSelector(
  stateNews,
  (newsReducer) => newsReducer.loading,
);

const errorSelector = createDraftSafeSelector(
  stateNews,
  (newsReducer) => newsReducer.error,
);

const numberOfPagesSelector = createDraftSafeSelector(
  stateNews,
  (newsReducer) => newsReducer.numberOfPages,
);

export default newsSelector;

export { loadingSelector, errorSelector, numberOfPagesSelector };
