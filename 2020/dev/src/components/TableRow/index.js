import React from "react";
import _ from "lodash";

import TableTime from "../TableTime";
import TableTalk from "../TableTalk";
import './styles.css';

export default ({ start, end, rest, talks, isWorkshop, programs, onClickTopic }) => {

  //state = { programs: []};

  const renderTalks = _.map(talks, ({ id, topic, presenter, description, room, tags, programId }) => {
    console.log(presenter)
    const program = programs ? programs.find(function (element) {
      return element.id === programId;
    }) : null

    var speaker = ""
    program ? program.speakers.map(({ name, bio }) => {
      speaker += (name + " ")

    }) : (speaker = null)

    if (presenter === undefined || presenter === null || presenter === null) {
      return null
    }
    return (
      <TableTalk
        key={id}
        topic={program ? program.title : topic}
        presenter={presenter}
        description={program ? program.abstract : description}
        room={room}
        tags={tags}
        program={program}
        isWorkshop={isWorkshop}
        programId={programId}
        onClickTopic={onClickTopic}
      />)
  });
  console.log(Array.isArray(renderTalks))
  console.log(renderTalks.length)
  return (
    <li className="sechdule_row">
      <TableTime start={start} end={end} />
      {rest ? (
        <div className="sechdule_talk_container" style={{ display: "flex", width: "100%", textAlign: "center", fontWeight: "bold", alignItems: "center", justifyContent: "center", color: "#666666" }}>
          {rest}
        </div>
      ) : (renderTalks.length !== 1 ?
        <div className="sechdule_talk_container" style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {renderTalks}
        </div> :
        <div className="sechdule_talk_container" style={{ display: "flex", width: "100%", textAlign: "center", fontWeight: "bold", alignItems: "center", justifyContent: "center", color: "#666666" }}>
          {renderTalks}
        </div>
        )}
    </li>
  );
};
