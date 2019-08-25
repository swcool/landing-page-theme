import React from "react";

import "./styles.css";

export default ({ topic, presenter, description, room, onClickTopic }) => {
  const talk = { topic, presenter, description, room };

  return (
    <div className="table-talk">
      {( ()=>{
         switch(room){
             case "101":return <div className="room_lable talk_room_lable room_101">101</div>; break;
             case "102":return <div className="room_lable talk_room_lable room_102">102</div>; break;
             case "103":return <div className="room_lable talk_room_lable room_103">103</div>; break;
             default:return room? <div className="room_lable talk_room_lable room_101">{room}</div> : null;
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
