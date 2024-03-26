import React from "react";

import "./line.scss";

import { PropsComponentLine } from "@type/type";

function Line({
  id,
  header,
  description,
}: PropsComponentLine): React.JSX.Element {
  return (
    <tr>
      <th className="line" scope="row">
        {id}
      </th>
      <td className="line">{header}</td>
      <td className="line">{description}</td>
    </tr>
  );
}

export default Line;
