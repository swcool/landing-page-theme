import React from "react";

import "./styles.css";

export default ({ topic, presenter, description, room, isWorkshop, onClickTopic }) => {
  const talk = { topic, presenter, description, room };

  return (
    <div className="table-talk">
      {( ()=>{
        var style = isWorkshop? {display:"block"}:{};
         switch(room){
             case "101":return <div className="room_lable talk_room_lable room_101" style={style}>101</div>; break;
             case "102":return <div className="room_lable talk_room_lable room_102" style={style}>102</div>; break;
             case "103":return <div className="room_lable talk_room_lable room_103" style={style}>103</div>; break;
             default:return room? <div className="room_lable talk_room_lable room_101" style={style}>{room}</div> : null;
          }
        }
      )()}
      <span
        className="table-talk__topic"
        style = {
          ( topic === "Backporting UICollectionViewCompositionalLayout") ? {wordBreak:"break-all"} :{}
        }
        onClick={() => {
          onClickTopic(talk);
        }}
      >
        {topic}
      </span>
      <span className="table-talk__presenter">{presenter}</span>
    </div>
  );
};
