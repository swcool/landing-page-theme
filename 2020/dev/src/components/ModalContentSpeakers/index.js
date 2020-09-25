import React from 'react';

import './styles.css';

export default ({ video_url, alt, speakers, position, title, topic, abstract, onClickCloseBtn }) => (
  <div className="modal-content-speakers">
    <a className="modal-content-speakers__close-btn" onClick={onClickCloseBtn} />
    <div className="modal-content-speakers__img-section">
      <img className="modal-content-speakers__img" src={video_url !== null && video_url !== "" ? video_url : "https://raw.githubusercontent.com/iplayground/SessionData/2020/v1/images/speakers/nopic.png"} alt={alt} />
    </div>
    <div className="modal-content-speakers__txt-section">
      <p className="modal-content-speakers__name"><strong>{speakers[0].name}</strong></p>
      <p className="modal-content-speakers__position">{position}</p>
      <p className="modal-content-speakers__topic"><strong>{title}</strong></p>
      <p className="modal-content-speakers__intro">{speakers[0].bio}</p>
    </div>
  </div>
);
