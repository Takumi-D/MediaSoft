import React from "react";
import { useSelector } from "react-redux";

import "./pagination.scss";

import urlParameters from "../hoc/url-parameters";
import {
  loadingSelector,
  numberOfPagesSelector,
} from "@store/selectors/newsSelectors";

function Pagination({ navigate, parameters }) {
  const amountPage: React.JSX.Element[] = [];
  const numberOfPages: number = useSelector(numberOfPagesSelector);
  const loading = useSelector(loadingSelector);

  for (let i = 1; i <= numberOfPages; i += 1) {
    amountPage.push(
      <li
        aria-hidden="true"
        key={i}
        onClick={() => navigate(`/MediaSoft/${i}`)}
        className={`${numberOfPages === i ? "last-page" : "page"}${
          +parameters.id === i ? " active" : ""
        }`}
      >
        {i}
      </li>,
    );
  }

  if (loading) {
    return <></>;
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          aria-hidden="true"
          onClick={() => {
            if (Object.keys(parameters).length === 0) {
              // empty
            } else if (+parameters.id <= 1) {
              // empty
            } else navigate(`/MediaSoft/${+parameters.id - 1}`);
          }}
          className="back"
        >
          Назад
        </li>

        <div className="wrapper-page">{amountPage}</div>

        <li
          aria-hidden="true"
          onClick={() => {
            if (Object.keys(parameters).length === 0) {
              navigate("2");
            } else if (+parameters.id >= numberOfPages) {
              // empty
            } else navigate(`/MediaSoft/${+parameters.id + 1}`);
          }}
          className="next"
        >
          Далее
        </li>
      </ul>
    </nav>
  );
}
export default urlParameters(Pagination);
