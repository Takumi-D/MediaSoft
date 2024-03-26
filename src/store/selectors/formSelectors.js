import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";
var stateForm = function (state) { return state.rootReducer.formReducer; };
var formSelector = createDraftSafeSelector(stateForm, function (formReducer) { return formReducer.dateControllers; });
var formFiled = createDraftSafeSelector(stateForm, function (formReducer) { return formReducer.filled; });
var userDate = createDraftSafeSelector(stateForm, function (formReducer) { return formReducer.userDate; });
var storageSelector = createSelector(stateForm, function (formReducer) { return formReducer.dateStorage; });
export { formSelector, formFiled, userDate, storageSelector };
