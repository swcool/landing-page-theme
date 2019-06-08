import React from 'react';

import './styles.css';

export default ({ title, content }) => (
  <div className="speaker-feature">
    <h3 className="speaker-feature-title">{title}</h3>
    <div className="speaker-feature-content">
      {content}
    </div>
  </div>
);
