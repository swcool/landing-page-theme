import React from 'react';

import './styles.css';

export default ({title,link}) => (
  <div className="action-button" target='_blank'>
    <div className='action-button-text'>
      {title}
    </div>
  </div>
);