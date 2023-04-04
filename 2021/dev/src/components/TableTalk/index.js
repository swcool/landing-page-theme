import React from "react";
import _ from "lodash";
import "./styles.css";

export default ({ topic, presenter, description, room, tags, isWorkshop, program, onClickTopic, programId }) => {
  // console.log(presenter)
  const talk = { topic, presenter, description, room, tags, program };

  console.log(room)
  const speaker = presenter.map((value) => {
    return (
      <span className="table-talk__presenter">{value.name}</span>
    );
  })
  function fontcolor(room) {
    switch (room) {
      case "801":
        return "font_801"
      case "802":
        return "font_802"
      case "1002":
        return "font_1002"
      case "1005":
        return "font_801"
      case "1006":
        return "font_802"
      case "1007":
        return "font_1002"
      default:
        return "font_1005"
    }
  }
  return (
    <div className="table-talk">
      {(() => {
        var style = isWorkshop ? { display: "block" } : {};
        switch (room) {
          case "801": return <div className="room_lable talk_room_lable room_101" style={style}>801</div>;
          case "1005": return <div className="room_lable talk_room_lable room_101" style={style}>1005</div>;
          case "802": return <div className="room_lable talk_room_lable room_102" style={style}>802</div>;
          case "1006": return <div className="room_lable talk_room_lable room_102" style={style}>1006</div>;
          case "1002": return <div className="room_lable talk_room_lable room_103" style={style}>1002</div>;
          case "1007": return <div className="room_lable talk_room_lable room_103" style={style}>1007</div>;
          default: return room ? <div className="room_lable talk_room_lable room_101" style={style}>{room}</div> : null;
        }
      }
      )()}
      <span
        className="table-talk__topic"
        style={
          (topic === "Backporting UICollectionViewCompositionalLayout") ? { wordBreak: "break-all" } : {}
        }
        onClick={() => {
          programId === 999 ? null : onClickTopic(talk);
        }}>
        <div className={fontcolor(room)}>
          {topic}
        </div>
      </span>
      {speaker}
      <div>
        {
          _.map(tags, (tag) =>
            <img className="tag_image" src={require("../../images/" + tag + ".png")} />
          )
        }
      </div>
    </div>
  );
};
