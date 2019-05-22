import React from "react";

import "./styles.css";

export default ({ topic, presenter, description, onClickTopic }) => {
  const talk = { topic, presenter, description };

  return (
    <td className="table-talk">
      <span
        className="table-talk__topic"
        onClick={() => {
          onClickTopic(talk);
        }}
      >
        {topic}
      </span>
      <span>{presenter}</span>
    </td>
  );
};
