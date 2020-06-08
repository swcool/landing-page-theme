import React from "react";
import _ from "lodash";

import TableTime from "../TableTime";
import TableTalk from "../TableTalk";
import './styles.css';

export default ({ start, end, rest, talks, isWorkshop, programs, onClickTopic }) => {
  
  //state = { programs: []};

  const renderTalks = _.map(talks, ({ id, topic, presenter, description, room, tags, programId }) => {
    const program = programs ? programs.find(function(element) {
      return element.id === programId;
    }) : null

    var speaker = ""
    program ? program.speakers.map(({name,bio}) => {
      speaker += (name + " ")
       
    })  : (speaker = null)

    return (
      <TableTalk 
      key={id}
      topic={program? program.title : topic}
      presenter={speaker? speaker : presenter}
      description={program? program.abstract : description}
      room = {room}
      tags = {tags}
      program = {program}
      isWorkshop = {isWorkshop}
      onClickTopic={onClickTopic}
    />)
    });

  return (
    <li className="sechdule_row">
      <TableTime start={start} end={end} />
      {rest ? (
        <div  className="sechdule_talk_container" style={{textAlign: "center",fontWeight: "bold",alignItems : "center", justifyContent: "center",color:"#666666"}}>
          {rest}
        </div>
      ) : (
        <div className="sechdule_talk_container">
        {renderTalks}
        </div>
      )}
    </li>
  );
};
