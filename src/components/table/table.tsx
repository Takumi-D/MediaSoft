import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./table.scss";

import Line from "../line/line";
import urlParameters from "../hoc/url-parameters";

import newsSelector, {
  loadingSelector,
  errorSelector,
} from "@store/selectors/newsSelectors";

import { fetchData } from "@store/reducers/news-reducer";
import { updatePage } from "@store/actions";

import { NewsItem } from "@type/type";

function Table({ parameters }): React.JSX.Element {
  const dispatch = useDispatch();
  const news = useSelector(newsSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (news.length === 0) {
      dispatch(fetchData(parameters));
    } else {
      dispatch(updatePage(parameters));
    }
  }, [parameters]);

  if (loading) {
    return <div>Загузка...</div>;
  }

  if (error.status) {
    return <div>{error.errorMessage}</div>;
  }

  const outputSegment = news.map((item: NewsItem) => {
    return (
      <Line
        key={item.id}
        id={item.id}
        header={item.title}
        description={item.body}
      />
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col-1 col-head">ID</th>
          <th className="col-6 col-head">Заголовок</th>
          <th className="col-5 col-head">Описание</th>
        </tr>
      </thead>
      <tbody>{outputSegment}</tbody>
    </table>
  );
}

export default urlParameters(Table);
