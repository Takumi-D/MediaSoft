import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";

const stateForm = (state: any) => state.rootReducer.formReducer;

const formSelector = createDraftSafeSelector(
  stateForm,
  (formReducer) => formReducer.dateControllers,
);

const formFiled = createDraftSafeSelector(
  stateForm,
  (formReducer) => formReducer.filled,
);

const userDate = createDraftSafeSelector(
  stateForm,
  (formReducer) => formReducer.userDate,
);

const storageSelector = createSelector(
  stateForm,
  (formReducer) => formReducer.dateStorage,
);

export { formSelector, formFiled, userDate, storageSelector };
