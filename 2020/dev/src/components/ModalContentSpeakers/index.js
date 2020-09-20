import React from 'react';

import './styles.css';

export default ({ imgURL, alt, name, position, intro, topic, abstract, onClickCloseBtn }) => (
  <div className="modal-content-speakers">
    <a className="modal-content-speakers__close-btn" onClick={onClickCloseBtn} />
    <div className="modal-content-speakers__img-section">
    <img className="app__speaker-square-img" src={require(`./images/${imgURL}`)} alt={alt} />
    </div>
    <div className="modal-content-speakers__txt-section">
      <p className="modal-content-speakers__name"><strong>{name}</strong></p>
      <p className="modal-content-speakers__position">{position}</p>
      <p className="modal-content-speakers__topic"><strong>{topic}</strong></p>
      <p className="modal-content-speakers__intro">{intro}</p>
    </div>
  </div>
);
