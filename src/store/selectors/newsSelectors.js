import { createDraftSafeSelector } from "@reduxjs/toolkit";
var stateNews = function (state) { return state.rootReducer.newsReducer; };
var newsSelector = createDraftSafeSelector(stateNews, function (newsReducer) { return newsReducer.outputSegment; });
var loadingSelector = createDraftSafeSelector(stateNews, function (newsReducer) { return newsReducer.loading; });
var errorSelector = createDraftSafeSelector(stateNews, function (newsReducer) { return newsReducer.error; });
var numberOfPagesSelector = createDraftSafeSelector(stateNews, function (newsReducer) { return newsReducer.numberOfPages; });
export default newsSelector;
export { loadingSelector, errorSelector, numberOfPagesSelector };
