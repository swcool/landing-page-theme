import React from 'react';

import './styles.css';

export default ({title,link}) => (
  <a className="action-button" href={link} target='_blank'>
      {title}
  </a>
);