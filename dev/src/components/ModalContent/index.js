import React from 'react';

import './styles.css';

export default ({ imgURL, alt, name, position, intro, onClickCloseBtn }) => (
  <div className="modal-content">
    <a className="modal-content__close-btn" onClick={onClickCloseBtn} />
    <div className="modal-content__img-section">
      <img className="modal-content__img" src={imgURL} alt={alt} />
    </div>
    <div className="modal-content__txt-section">
      <p className="modal-content__name"><strong>{name}</strong></p>
      <p className="modal-content__position">{position}</p>
      <p className="modal-content__intro">{intro}</p>
    </div>
  </div>
);
