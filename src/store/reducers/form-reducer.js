import { createReducer } from "@reduxjs/toolkit";
import { initForm, storage, examinationStorage, deleteForm } from "../actions";
var initialState = {
    dateControllers: [
        { nameInput: "firstName", nameField: "Имя", id: 1 },
        { nameInput: "lastName", nameField: "Фамилия", id: 2 },
    ],
    userDate: {
        firstName: "",
        lastName: "",
    },
    dateStorage: {
        save: "",
        rand: null,
    },
    filled: false,
};
var reducer = createReducer(initialState, function (builder) {
    builder.addCase(initForm, function (state, action) {
        state.userDate.firstName = action.payload.firstName;
        state.userDate.lastName = action.payload.lastName;
        state.filled = true;
    });
    builder.addCase(storage, function (state, action) {
        state.dateStorage.save = action.payload.save;
        state.dateStorage.rand = action.payload.rand;
        state.filled = true;
    });
    builder.addCase(deleteForm, function (state) {
        state.dateStorage.save = "";
        state.dateStorage.rand = null;
        state.filled = false;
    });
    builder.addCase(examinationStorage, function (state) {
        state.filled = true;
    });
});
export default reducer;
