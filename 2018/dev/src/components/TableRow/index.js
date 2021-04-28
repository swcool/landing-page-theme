import React from "react";
import _ from "lodash";

import TableTime from "../TableTime";
import TableTalk from "../TableTalk";

export default ({ start, end, rest, talks, onClickTopic }) => {
  const renderTalks = _.map(talks, ({ id, topic, presenter, description }) => (
    <TableTalk
      key={id}
      topic={topic}
      presenter={presenter}
      description={description}
      onClickTopic={onClickTopic}
    />
  ));

  return (
    <tr>
      <TableTime start={start} end={end} />
      {rest ? (
        <td colSpan="2" style={{ textAlign: "center", fontWeight: "bold" }}>
          {rest}
        </td>
      ) : (
        renderTalks
      )}
    </tr>
  );
};
