import React from 'react';
import _ from "lodash";

import './styles.css';

export default ({ session, onClickCloseBtn, speakers }) => {
  console.log(session)

  return (
    <div className="modal-content-schedule">
      <a className="modal-content-schedule__close-btn" onClick={onClickCloseBtn} />
      <div className="modal-content-schedule__txt-section">
        <p className="modal-content-schedule__topic"><strong>{session.topic}</strong></p>

        <div>
          {

            _.map(session.tags, (tag) =>
              <div className="modal_tag">
                <img className="modal_tag_image" style={{ verticalAlign: "middle" }} src={require("../../images/" + tag + ".png")} />
                <span style={{ lineHeight: "32px" }}>{(() => {
                  switch (tag) {
                    case "english_talk": return "英語演說"; break;
                    case "no_record": return "不提供錄影"; break;
                    case "public_address": return "聯播場次"; break;
                    default: return null;
                  }
                }
                )()}</span>
              </div>
            )
          }
        </div>
        <p dangerouslySetInnerHTML={{ __html: session.description }}></p>
        <div className="modal-content-schedule_subtitle">Speaker 講者</div>
        <div>
          {

            _.map(session.presenter, ({ name, bio, imgURL }) =>
              <div>
                <p className="modal-content-schedule__presenter">{name}</p>
                <div className="modal-speaker-detail-container">
                  <img className="modal-content-speakers__img" src={imgURL} />
                  <div className="modal-content-schedule__presenter-description">{bio}</div>
                </div>
              </div>
            )
          }
        </div>
        {/* <a className="modal-content-speakers_sns" href={program.custom_fields.SNS} target="_blank" rel="noopener noreferrer">
          {
            program.custom_fields.SNS
          }
        </a> */}
      </div>
    </div>
  )
};
