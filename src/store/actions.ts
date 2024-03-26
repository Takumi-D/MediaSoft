import { createAction } from "@reduxjs/toolkit";

const updatePage = createAction("UPDATE_PAGE");
const initForm = createAction("INIT_FORM");

const storage = createAction("STORAGE");
const examinationStorage = createAction("EXAMINATION_STORAGE");

const deleteForm = createAction("DELETE_FORM");

export { updatePage, initForm, storage, examinationStorage, deleteForm };
