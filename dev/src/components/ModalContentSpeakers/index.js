import React from 'react';

import './styles.css';

export default ({ imgURL, alt, name, position, intro, topic, abstract, onClickCloseBtn }) => (
  <div className="modal-content-speakers">
    <a className="modal-content-speakers__close-btn" onClick={onClickCloseBtn} />
    <div className="modal-content-speakers__img-section">
      <img className="modal-content-speakers__img" src={imgURL} alt={alt} />
    </div>
    <div className="modal-content-speakers__txt-section">
      <p className="modal-content-speakers__name"><strong>{name}</strong></p>
      <p className="modal-content-speakers__position">{position}</p>
      <p className="text-left"><strong>簡介:</strong></p>
      <p className="text-left">{intro}</p>
      <br />
      {topic && <p className="text-left"><strong>議程介紹: {topic}</strong></p>}
      {abstract && <p className="text-left">{abstract}</p>}
    </div>
  </div>
);
