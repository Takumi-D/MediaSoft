import { createReducer } from "@reduxjs/toolkit";

import { initForm, storage, examinationStorage, deleteForm } from "../actions";

interface Action {
  type: string;
  payload: any;
}

interface InitialState {
  dateControllers: any;
  userDate: {
    firstName: string;
    lastName: string;
  };
  dateStorage: {
    save: string;
    rand: number;
  };
  filled: boolean;
}

const initialState = {
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

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(initForm, (state: InitialState, action: Action) => {
    state.userDate.firstName = action.payload.firstName;
    state.userDate.lastName = action.payload.lastName;
    state.filled = true;
  });
  builder.addCase(storage, (state: InitialState, action: Action) => {
    state.dateStorage.save = action.payload.save;
    state.dateStorage.rand = action.payload.rand;
    state.filled = true;
  });
  builder.addCase(deleteForm, (state: InitialState) => {
    state.dateStorage.save = "";
    state.dateStorage.rand = null;
    state.filled = false;
  });
  builder.addCase(examinationStorage, (state: InitialState) => {
    state.filled = true;
  });
});

export default reducer;
