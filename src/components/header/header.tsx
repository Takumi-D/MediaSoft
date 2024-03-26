import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
  formFiled,
  storageSelector,
  userDate,
} from "../../store/selectors/formSelectors";
import { deleteForm, examinationStorage } from "@store/actions";

import { deleteCookie, getCookie } from "../../ secondary-funcion/cookie";

import "./header.scss";

const logo = require("@images/logo.svg");

function Header(): React.JSX.Element {
  const dateUser = useSelector(userDate);
  const filedForm = useSelector(formFiled);
  const storageDate = useSelector(storageSelector);
  const dispatch = useDispatch();

  let dataFromStorage: any = {};

  switch (storageDate.save) {
    case "Localstorage":
      dataFromStorage = {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
      };
      break;
    case "Cookie":
      dataFromStorage = {
        firstName: getCookie("firstName"),
        lastName: getCookie("lastName"),
      };
      break;
    case "Redux":
      dataFromStorage = { ...dateUser };
      break;
  }

  if (localStorage.getItem("firstName")) {
    dataFromStorage = {
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
    };
    if (!filedForm) dispatch(examinationStorage());
    setTimeout(() => {
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      dispatch(deleteForm());
    }, 60000);
  } else if (getCookie("firstName")) {
    dataFromStorage = {
      firstName: getCookie("firstName"),
      lastName: getCookie("lastName"),
    };
    if (!filedForm) dispatch(examinationStorage());
    setTimeout(() => {
      deleteCookie("firstName");
      deleteCookie("lastName");
      dispatch(deleteForm());
    }, 60000);
  }
  return (
    <div className="header">
      <img className="header-img" src={logo} alt="logo" />
      <div className="wrapper-user">
        <div className={filedForm ? "d-none" : ""}>
          <Link className="login-btn" to="/Form">
            Войти
          </Link>
        </div>
        <div className={!filedForm ? "d-none" : "" + "user-name"}>
          <p>{dataFromStorage?.firstName}</p>
          <p>{dataFromStorage?.lastName}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
