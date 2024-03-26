import { createAction } from "@reduxjs/toolkit";
var updatePage = createAction("UPDATE_PAGE");
var initForm = createAction("INIT_FORM");
var storage = createAction("STORAGE");
var examinationStorage = createAction("EXAMINATION_STORAGE");
var deleteForm = createAction("DELETE_FORM");
export { updatePage, initForm, storage, examinationStorage, deleteForm };
