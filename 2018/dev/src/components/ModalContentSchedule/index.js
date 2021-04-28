import React from 'react';

import './styles.css';

export default ({ topic, presenter, description, onClickCloseBtn }) => (
  <div className="modal-content-schedule">
    <a className="modal-content-schedule__close-btn" onClick={onClickCloseBtn} />
    <div className="modal-content-schedule__txt-section">
      <p className="modal-content-schedule__topic"><strong>{topic}</strong></p>
      <p className="modal-content-schedule__presenter">{presenter}</p>
      <p>{description}</p>
    </div>
  </div>
);
